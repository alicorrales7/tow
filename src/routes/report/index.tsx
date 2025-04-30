import { useLanguage } from "~/i18n/LanguageContext";

export default function Report() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8 animate-fade-in">
        {/* Título principal */}
        <h1 class="text-2xl font-bold text-blue-700">
          Casos Reales de Reclamos contra Grúas
        </h1>

        {/* Introducción */}
        <p class="text-gray-700 text-sm leading-relaxed">
          Aquí recopilamos experiencias reales de consumidores que han
          enfrentado abusos o prácticas irregulares de compañías de grúas,
          principalmente en el área de Miami-Dade, Florida.
        </p>

        {/* Testimonios */}
        <div class="space-y-6">
          <div class="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 class="font-semibold text-gray-800">
              Cobro Excesivo y Falta de Recibo
            </h2>
            <p class="text-gray-700 text-sm mt-2">
              “Me remolcaron el coche en South Beach. Pagué 280 dólares para
              liberarlo. Me dijeron que pagara en efectivo y no me dieron recibo
              porque, según ellos, el precio reducido no incluía recibo.”
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Fuente: Reddit –{" "}
              <a
                class="text-blue-600 hover:underline"
                href="https://www.reddit.com/r/Miami/comments/123fmqr/towed_in_south_beach/"
                target="_blank"
              >
                ver publicación
              </a>
            </p>
          </div>

          <div class="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 class="font-semibold text-gray-800">
              Remolque sin Señalización Adecuada
            </h2>
            <p class="text-gray-700 text-sm mt-2">
              “Mi carro fue remolcado desde un estacionamiento que no tenía
              ninguna señal visible advirtiendo sobre el remolque. Tomé fotos
              como evidencia.”
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Fuente: Reddit –{" "}
              <a
                class="text-blue-600 hover:underline"
                href="https://www.reddit.com/r/Miami/comments/17xri9v/656_for_a_tow/"
                target="_blank"
              >
                ver publicación
              </a>
            </p>
          </div>

          <div class="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 class="font-semibold text-gray-800">
              Tarifas Ocultas y Horarios Irregulares
            </h2>
            <p class="text-gray-700 text-sm mt-2">
              “La empresa Midtown Towing se negó a informarme las tarifas cuando
              llamé y cerró antes del horario legal permitido, dificultando la
              recuperación de mi vehículo.”
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Fuente: Reddit –{" "}
              <a
                class="text-blue-600 hover:underline"
                href="https://www.reddit.com/r/Miami/comments/17xri9v/656_for_a_tow/"
                target="_blank"
              >
                ver publicación
              </a>
            </p>
          </div>

          <div class="p-4 bg-gray-50 rounded-lg shadow-inner">
            <h2 class="font-semibold text-gray-800">
              Falta de Regulación Efectiva
            </h2>
            <p class="text-gray-700 text-sm mt-2">
              “Las compañías de grúas hacen lo que quieren en Miami-Dade. No hay
              verdadera regulación ni consecuencias. Los consumidores quedan
              totalmente desprotegidos.”
            </p>
            <p class="text-xs text-gray-500 mt-1">
              Fuente: Reddit –{" "}
              <a
                class="text-blue-600 hover:underline"
                href="https://www.reddit.com/r/Miami/comments/17xri9v/656_for_a_tow/"
                target="_blank"
              >
                ver publicación
              </a>
            </p>
          </div>
        </div>

        {/* Información extra sobre tarifas y leyes */}
        <div class="mt-8 space-y-4">
          <h2 class="text-xl font-semibold text-gray-800">
            Datos importantes sobre tarifas y leyes
          </h2>
          <ul class="list-disc pl-6 text-gray-700 text-sm leading-relaxed">
            <li>
              En Miami-Dade, la tarifa máxima permitida por remolque de un
              vehículo de menos de 20 pies es de $145, más $33.90 por día de
              almacenamiento y $38.20 de cargos administrativos.
            </li>
            <li>
              En 2024, Florida aprobó la ley HB 179 que refuerza los límites de
              tarifas de remolque y establece procesos oficiales de reclamo.
            </li>
          </ul>
          <p class="text-xs text-gray-500">
            Fuentes:{" "}
            <a
              href="https://elparacaidista.com/casa54/"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              El Paracaidista
            </a>
            ,{" "}
            <a
              href="https://www.lanacion.com.ar/estados-unidos/florida/nueva-ley-de-ron-desantis-lo-que-debes-saber-si-te-remolcan-el-vehiculo-en-florida-nid05062024/"
              class="text-blue-600 hover:underline"
              target="_blank"
            >
              La Nación
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
