import { APIEvent } from "@solidjs/start/server";
import { PDFDocument } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import fs from 'fs/promises';
import path from 'path';

export async function POST({ request }: APIEvent) {
  try {
    const data = await request.json();
    
    // Validar los datos
    if (!data.claimantName || !data.companyName || !data.incidentDate || 
        !data.incidentLocation || !data.amountClaimed || !data.description) {
      return new Response('Missing required fields', { status: 400 });
    }

    // Ruta al archivo PDF template
    const pdfPath = path.join(process.cwd(), 'public', 'documents', 'consumer-complaint-affidavit.pdf');
    
    // Leer el archivo PDF template
    const pdfTemplate = await fs.readFile(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfTemplate);
    
    // Rellenar el PDF
    const form = pdfDoc.getForm();
    const fields = form.getFields();
    fields.forEach(field => {
      if (field.constructor.name === 'PDFTextField') {
        const textField = field as any;
        const name = textField.getName();
        
        switch (name) {
          case 'claimantName':
            textField.setText(data.claimantName);
            break;
          case 'companyName':
            textField.setText(data.companyName);
            break;
          case 'incidentDate':
            textField.setText(data.incidentDate);
            break;
          case 'incidentLocation':
            textField.setText(data.incidentLocation);
            break;
          case 'amountClaimed':
            textField.setText(`$${data.amountClaimed}`);
            break;
          case 'description':
            textField.setText(data.description);
            break;
        }
      }
    });

    // Generar el PDF final
    const pdfBytes = await pdfDoc.save();

    // Crear el documento Word
    const doc = new Document({
      sections: [{
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `Estimado/a ${data.companyName},`,
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Por medio de la presente, ${data.claimantName} presenta un reclamo formal por los servicios de grúa prestados el día ${data.incidentDate} en ${data.incidentLocation}.`,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Detalles del incidente:`,
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: data.description,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: `Monto reclamado: $${data.amountClaimed}`,
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'Atentamente,',
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: data.claimantName,
              }),
            ],
          }),
        ],
      }],
    });

    // Generar el documento Word
    const docxBuffer = await Packer.toBuffer(doc);

    // Devolver ambos documentos
    return new Response(JSON.stringify({
      pdf: Array.from(pdfBytes),
      docx: Array.from(docxBuffer)
    }), {
      headers: {
        'Content-Type': 'application/json'
      }
    });

  } catch (error) {
    console.error('Error generating documents:', error);
    return new Response('Error generating documents', { status: 500 });
  }
} 