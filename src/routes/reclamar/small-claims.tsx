export default function SmallClaims() {
  return (
    <section class="flex justify-center px-4 py-12 bg-gray-100 min-h-screen">
      <div class="animate-fade-in bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-6">
        <h1 class="text-2xl font-bold text-blue-700 mb-2">
          Reclamo en Small Claims Court
        </h1>

        <p class="text-gray-700 leading-relaxed">
          Este procedimiento es ideal si quieres recuperar dinero por cobros
          ilegales o por daños a tu vehículo causados por una compañía de grúas.
          No necesitas abogado, y puedes presentar el caso tú mismo.
        </p>

        {/* Enlace oficial */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">Enlace oficial</h2>
          <a
            href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1490894476018877"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            Ver información oficial sobre Small Claims Court →
          </a>
        </div>

        {/* Qué necesitas preparar */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            1. Qué debes preparar antes de ir
          </h2>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-1 text-sm mt-2">
            <li>Una breve descripción de lo ocurrido (resumen del caso)</li>
            <li>Nombre de la empresa de grúas</li>
            <li>Fecha del incidente y lugar exacto</li>
            <li>Monto que reclamas recuperar</li>
            <li>Pruebas: fotos, recibos, capturas de chats o videos</li>
            <li>Tu identificación (ID o licencia)</li>
          </ul>
        </div>

        {/* Formulario que te entregan o llenas */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            2. Formularios que debes llenar
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            Puedes solicitar el formulario directamente en el tribunal o
            llevarlo impreso si lo descargaste antes. En mi caso personal, me
            entregaron un formulario para completar allí mismo, con espacio
            para:
          </p>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-1 text-sm mt-2">
            <li>Datos del demandante (tú)</li>
            <li>Datos del demandado (empresa de grúas)</li>
            <li>Resumen del reclamo</li>
            <li>Monto reclamado</li>
            <li>Firma y fecha</li>
          </ul>
          <p class="mt-2 text-sm text-gray-600">
            Este formulario lo llené directamente en la oficina del tribunal,
            con ayuda del personal.
          </p>
        </div>

        {/* Qué pasa al llegar */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            3. ¿Qué pasa cuando llegas al tribunal?
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            Cuando llegas a la ventanilla de reclamos menores, el personal te
            entrega el formulario si no lo llevas. Una vez que completas todo,
            entregas tus pruebas y pagas la tarifa correspondiente.
          </p>
          <p class="text-gray-700 text-sm mt-2">
            En mi caso, me asignaron directamente **una fecha para presentarme
            en corte**, sin tener que esperar confirmación por correo. Me
            entregaron un papel con la cita y un número de caso.
          </p>
        </div>

        {/* Costos y tiempo */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            4. ¿Cuánto cuesta presentar el reclamo?
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            La tarifa depende del monto que estés reclamando. En casos menores
            de $500, el costo suele ser bajo. Puedes pagar en efectivo, tarjeta
            o money order. No necesitas abogado.
          </p>
        </div>

        {/* Nota final */}
        <div class="pt-4 border-t border-gray-200 text-sm text-gray-500">
          *Esta experiencia está basada en un caso real ocurrido en el tribunal
          de reclamos menores de Miami-Dade. El proceso puede variar ligeramente
          dependiendo del condado.
        </div>
      </div>
    </section>
  );
}
