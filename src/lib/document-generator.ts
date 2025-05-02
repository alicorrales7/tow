import { PDFDocument, PDFTextField, PDFForm } from 'pdf-lib';
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from 'docx';

export interface ComplaintData {
  // Consumer Information
  consumerName: string;
  consumerAddress: string;
  consumerPhone: string;
  consumerEmail: string;
  
  // Business Information
  businessName: string;
  businessAddress: string;
  
  // Vehicle Information
  vehicleYear: string;
  vehicleMakeModel: string;
  licensePlate: string;
  registeredOwner: string;
  
  // Incident Details
  incidentDate: string;
  incidentDescription: string;
  
  // Financial Information
  driverPayment: number;
  towingCost: number;
  repairsCost: number;
  
  // Supporting Evidence
  evidenceList: string[];
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateComplaintData(data: ComplaintData): ValidationError[] {
  const errors: ValidationError[] = [];
  
  if (!data.consumerName.trim()) {
    errors.push({ field: 'consumerName', message: 'El nombre del consumidor es requerido' });
  }
  
  if (!data.consumerAddress.trim()) {
    errors.push({ field: 'consumerAddress', message: 'La dirección del consumidor es requerida' });
  }
  
  if (!data.consumerPhone.trim()) {
    errors.push({ field: 'consumerPhone', message: 'El teléfono del consumidor es requerido' });
  }
  
  if (!data.consumerEmail.trim()) {
    errors.push({ field: 'consumerEmail', message: 'El correo electrónico del consumidor es requerido' });
  }
  
  if (!data.businessName.trim()) {
    errors.push({ field: 'businessName', message: 'El nombre de la empresa es requerido' });
  }
  
  if (!data.businessAddress.trim()) {
    errors.push({ field: 'businessAddress', message: 'La dirección de la empresa es requerida' });
  }
  
  if (!data.vehicleYear.trim()) {
    errors.push({ field: 'vehicleYear', message: 'El año del vehículo es requerido' });
  }
  
  if (!data.vehicleMakeModel.trim()) {
    errors.push({ field: 'vehicleMakeModel', message: 'El modelo del vehículo es requerido' });
  }
  
  if (!data.licensePlate.trim()) {
    errors.push({ field: 'licensePlate', message: 'La placa del vehículo es requerida' });
  }
  
  if (!data.registeredOwner.trim()) {
    errors.push({ field: 'registeredOwner', message: 'El propietario registrado del vehículo es requerido' });
  }
  
  if (!data.incidentDate.trim()) {
    errors.push({ field: 'incidentDate', message: 'La fecha del incidente es requerida' });
  }
  
  if (!data.incidentDescription.trim()) {
    errors.push({ field: 'incidentDescription', message: 'La descripción del incidente es requerida' });
  } else if (data.incidentDescription.length < 50) {
    errors.push({ field: 'incidentDescription', message: 'La descripción debe tener al menos 50 caracteres' });
  }
  
  if (!data.driverPayment.toString().trim()) {
    errors.push({ field: 'driverPayment', message: 'El pago al conductor es requerido' });
  } else if (isNaN(data.driverPayment)) {
    errors.push({ field: 'driverPayment', message: 'El pago al conductor debe ser un número válido' });
  }
  
  if (!data.towingCost.toString().trim()) {
    errors.push({ field: 'towingCost', message: 'El costo de toque es requerido' });
  } else if (isNaN(data.towingCost)) {
    errors.push({ field: 'towingCost', message: 'El costo de toque debe ser un número válido' });
  }
  
  if (!data.repairsCost.toString().trim()) {
    errors.push({ field: 'repairsCost', message: 'El costo de reparación es requerido' });
  } else if (isNaN(data.repairsCost)) {
    errors.push({ field: 'repairsCost', message: 'El costo de reparación debe ser un número válido' });
  }
  
  return errors;
}

export async function generateAffidavit(data: ComplaintData): Promise<string> {
  try {
    // Validar los datos antes de generar el documento
    const validationErrors = validateComplaintData(data);
    if (validationErrors.length > 0) {
      throw new Error(validationErrors.map(error => `${error.field}: ${error.message}`).join('\n'));
    }

    // Cargar el PDF existente
    const existingPdfBytes = await fetch('/documents/consumer-complaint-affidavit.pdf').then(res => res.arrayBuffer());
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    
    // Obtener el formulario
    const form = pdfDoc.getForm();
    
    // Configurar el estilo de texto para los campos
    const fontSize = 12;
    
    // Rellenar los campos
    const fields = form.getFields();
    fields.forEach(field => {
      if (field instanceof PDFTextField) {
        const name = field.getName();
        
        // Configurar el estilo del campo
        field.setFontSize(fontSize);
        
        // Mapear los campos según su nombre
        switch (name) {
          case 'consumerName':
            field.setText(data.consumerName.trim());
            break;
          case 'consumerAddress':
            field.setText(data.consumerAddress.trim());
            break;
          case 'consumerPhone':
            field.setText(data.consumerPhone.trim());
            break;
          case 'consumerEmail':
            field.setText(data.consumerEmail.trim());
            break;
          case 'businessName':
            field.setText(data.businessName.trim());
            break;
          case 'businessAddress':
            field.setText(data.businessAddress.trim());
            break;
          case 'vehicleYear':
            field.setText(data.vehicleYear.trim());
            break;
          case 'vehicleMakeModel':
            field.setText(data.vehicleMakeModel.trim());
            break;
          case 'licensePlate':
            field.setText(data.licensePlate.trim());
            break;
          case 'registeredOwner':
            field.setText(data.registeredOwner.trim());
            break;
          case 'incidentDate':
            field.setText(data.incidentDate.trim());
            break;
          case 'incidentDescription':
            field.setText(data.incidentDescription.trim());
            field.setFontSize(fontSize);
            break;
          case 'driverPayment':
            field.setText(`$${data.driverPayment.toString().trim()}`);
            break;
          case 'towingCost':
            field.setText(`$${data.towingCost.toString().trim()}`);
            break;
          case 'repairsCost':
            field.setText(`$${data.repairsCost.toString().trim()}`);
            break;
        }
      }
    });
    
    // Asegurarnos de que el PDF sea editable pero mantenga su formato
    pdfDoc.setTitle('Consumer Complaint Affidavit');
    pdfDoc.setAuthor('Florida Department of Agriculture and Consumer Services');
    pdfDoc.setSubject('Official Complaint Document');
    
    // Guardar el PDF modificado y convertirlo a URL
    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
  } catch (error) {
    console.error('Error generating affidavit:', error);
    throw error;
  }
}

export function generateComplaintDocument(data: ComplaintData): Document {
  return new Document({
    sections: [{
      properties: {},
      children: [
        // Título
        new Paragraph({
          text: "Consumer Complaint Statement - Miami-Dade County",
          heading: HeadingLevel.HEADING_1,
          spacing: { after: 200 },
          alignment: AlignmentType.LEFT,
        }),

        // Consumer Information
        new Paragraph({
          text: "Consumer Information",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Name: ", bold: true }),
            new TextRun(data.consumerName)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Address: ", bold: true }),
            new TextRun(data.consumerAddress)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Phone: ", bold: true }),
            new TextRun(data.consumerPhone)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Email: ", bold: true }),
            new TextRun(data.consumerEmail)
          ]
        }),

        // Business Information
        new Paragraph({
          text: "Business Information",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Business Name: ", bold: true }),
            new TextRun(data.businessName)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Address: ", bold: true }),
            new TextRun(data.businessAddress)
          ]
        }),

        // Vehicle Information
        new Paragraph({
          text: "Vehicle Information",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Year, Make & Model: ", bold: true }),
            new TextRun(`${data.vehicleYear} ${data.vehicleMakeModel}`)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "License Plate: ", bold: true }),
            new TextRun(data.licensePlate)
          ]
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Registered Owner: ", bold: true }),
            new TextRun(data.registeredOwner)
          ]
        }),

        // Statement of Complaint
        new Paragraph({
          text: "Statement of Complaint",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        new Paragraph({
          text: data.incidentDescription,
          spacing: { after: 200 }
        }),

        // Expenses
        new Paragraph({
          text: "I am requesting full reimbursement of all expenses caused by this incident, including:",
          spacing: { before: 200, after: 100 }
        }),
        new Paragraph({ text: `- $${data.driverPayment} paid to the driver` }),
        new Paragraph({ text: `- $${data.towingCost} for the tow to the mechanic` }),
        new Paragraph({ text: `- $${data.repairsCost} for mechanical repairs` }),

        // Supporting Evidence
        new Paragraph({
          text: "Supporting Evidence",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        ...data.evidenceList.map(evidence => 
          new Paragraph({
            text: `- ${evidence}`,
            spacing: { before: 100 }
          })
        ),

        // Resolution Requested
        new Paragraph({
          text: "Resolution Requested",
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 100 },
          color: '4472C4'
        }),
        new Paragraph({
          text: "I am requesting full reimbursement for all expenses related to this incident.",
          spacing: { before: 100 }
        })
      ]
    }]
  });
}

// Función auxiliar para descargar archivos usando URLs
export function downloadFromURL(url: string, filename: string) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // Liberar la URL después de un breve retraso para asegurar que la descarga comience
  setTimeout(() => URL.revokeObjectURL(url), 100);
} 