import { A } from "@solidjs/router";

export default function ReclamarIndex() {
  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8">
        <div>
          <h1 class="text-3xl font-extrabold text-gray-900 tracking-tight">
            Opciones para presentar un reclamo
          </h1>
          <p class="text-gray-600 mt-2 leading-relaxed text-sm">
            Selecciona la opción que mejor se adapta a tu situación. Cada
            sección te mostrará los pasos a seguir, enlaces oficiales y
            herramientas para generar automáticamente tus documentos con ayuda
            de inteligencia artificial.
          </p>
        </div>

        {/* Opción 1 */}
        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-blue-700">
            Small Claims Court
          </h3>
          <p class="text-sm text-gray-700 mt-1">
            Reclamos por cobros indebidos o daños materiales. No se necesita
            abogado.
          </p>
          <A
            href="/reclamar/small-claims"
            class="btn-primary mt-4 inline-block"
          >
            Ver cómo reclamar paso a paso →
          </A>
        </div>

        {/* Opción 2 */}
        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-blue-700">Consumer Services</h3>
          <p class="text-sm text-gray-700 mt-1">
            Presentar quejas formales ante la Oficina de Protección al
            Consumidor del Condado o el Departamento de Agricultura y Servicios
            al Consumidor del Estado.
          </p>
          <A
            href="/reclamar/consumer-services"
            class="btn-primary mt-4 inline-block"
          >
            Ver cómo reclamar paso a paso →
          </A>
        </div>

        {/* Opción 3 */}
        <div class="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 class="text-lg font-semibold text-blue-700">
            Departamento de Transporte
          </h3>
          <p class="text-sm text-gray-700 mt-1">
            Reportar a compañías que operan fuera de zona o sin autorización
            válida.
          </p>
          <A
            href="/reclamar/departamento-transporte"
            class="btn-primary mt-4 inline-block"
          >
            Ver cómo reclamar paso a paso →
          </A>
        </div>

        <p class="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
          *Estamos trabajando en más opciones de reclamo automatizadas. Vuelve
          pronto para encontrar más herramientas.
        </p>
      </div>
    </section>
  );
}
