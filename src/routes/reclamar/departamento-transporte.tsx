export default function DepartamentoTransporte() {
  return (
    <section class="flex justify-center px-4 py-12 bg-gray-100 min-h-screen">
      <div class="animate-fade-in bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-6">
        <h1 class="text-2xl font-bold text-blue-700 mb-2">
          Reportar una grúa al Departamento de Transporte del Condado
        </h1>

        <p class="text-gray-700 leading-relaxed">
          El Departamento de Transporte puede intervenir cuando una compañía de
          grúas remueve vehículos sin autorización, fuera de zonas habilitadas o
          violando normativas locales. Este tipo de reclamo puede ayudar a
          sancionar administrativamente a la compañía.
        </p>

        <div>
          <h2 class="text-xl font-semibold text-gray-800">Enlace oficial</h2>
          <a
            href="https://www.miamidade.gov/global/transportation/home.page"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            Más información en el Departamento de Transporte →
          </a>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            Pasos para hacer el reclamo
          </h2>
          <ol class="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2 mt-2 text-sm">
            <li>
              Identifica el lugar donde ocurrió el remolque y verifica si es
              zona regulada.
            </li>
            <li>
              Recopila información de la empresa: nombre, número de grúa,
              operador si es posible.
            </li>
            <li>
              Adjunta fotos o videos si tienes evidencia de que no había
              señalización o autorización visible.
            </li>
            <li>
              Contacta con el Departamento de Transporte por medio del enlace
              oficial o por teléfono.
            </li>
            <li>
              Pronto podrás generar aquí una descripción detallada con IA para
              hacer tu reporte más efectivo.
            </li>
          </ol>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 text-sm">
          Esta herramienta próximamente te permitirá generar:
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Un informe claro de lo sucedido</li>
            <li>Resumen listo para enviar al Departamento de Transporte</li>
            <li>
              Instrucciones personalizadas según tu zona y tipo de remolque
            </li>
          </ul>
        </div>

        <div class="pt-4 border-t border-gray-200 text-sm text-gray-500">
          *Este reclamo no reemplaza otros procesos legales, pero puede
          contribuir a sancionar a la compañía.
        </div>
      </div>
    </section>
  );
}
