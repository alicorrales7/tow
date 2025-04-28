export default function ConsumerServices() {
  return (
    <section class="flex justify-center px-4 py-12 bg-gray-100 min-h-screen">
      <div class="animate-fade-in bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-6">
        <h1 class="text-2xl font-bold text-blue-700 mb-2">
          Presentar una queja ante Consumer Services
        </h1>

        <p class="text-gray-700 leading-relaxed">
          Si fuiste víctima de una compañía de grúas que actuó de forma abusiva,
          puedes presentar una queja formal en la Oficina de Protección al
          Consumidor del Condado. Este tipo de reclamos pueden resultar en
          sanciones administrativas a la empresa o incluso pérdida de su
          licencia.
        </p>

        <div>
          <h2 class="text-xl font-semibold text-gray-800">Enlace oficial</h2>
          <a
            href="https://www.miamidade.gov/global/business/consumer-protection/home.page"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            Ir al sitio oficial de Consumer Services →
          </a>
        </div>

        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            Pasos para hacer tu queja
          </h2>
          <ol class="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2 mt-2 text-sm">
            <li>
              Reúne la información básica: nombre de la empresa, fecha del
              incidente, monto cobrado, ubicación y descripción de lo ocurrido.
            </li>
            <li>
              Revisa si la empresa está registrada en el condado (opcional pero
              recomendable).
            </li>
            <li>
              Llena el formulario de reclamo con todos los detalles. Pronto
              podrás hacerlo aquí mismo.
            </li>
            <li>Adjunta fotos, recibos o cualquier prueba relevante.</li>
            <li>
              Presenta tu queja en línea en el sitio oficial, o imprímela y
              llévala en persona si lo prefieres.
            </li>
            <li>Guarda tu número de caso para dar seguimiento.</li>
          </ol>
        </div>

        <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 text-blue-800 text-sm">
          Muy pronto podrás usar esta herramienta para generar automáticamente:
          <ul class="list-disc pl-6 mt-2 space-y-1">
            <li>Una descripción clara de tu caso</li>
            <li>Un resumen adaptado al formulario oficial</li>
            <li>Consejos prácticos para acompañar tu evidencia</li>
          </ul>
        </div>

        <div class="pt-4 border-t border-gray-200 text-sm text-gray-500">
          *Recuerda que estas oficinas no recuperan dinero, pero pueden
          presionar legalmente a las compañías que actúan de forma ilegal.
        </div>
      </div>
    </section>
  );
}
