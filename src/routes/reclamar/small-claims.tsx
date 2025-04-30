import { useLanguage } from "../../i18n/LanguageContext";

export default function SmallClaims() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8 animate-fade-in">
        {/* Título principal */}
        <h1 class="text-2xl font-bold text-blue-700">
          {t("smallClaims.title")}
        </h1>

        {/* Introducción */}
        <p class="text-gray-700 leading-relaxed">
          {t("smallClaims.description")}
        </p>

        {/* Enlace oficial */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {t("smallClaims.officialLink.title")}
          </h2>
          <a
            href="https://www.miamidade.gov/global/service.page?Mduid_service=ser1490894476018877"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            {t("smallClaims.officialLink.text")}
          </a>
        </div>

        {/* Qué necesitas preparar */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {t("smallClaims.preparation.title")}
          </h2>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-1 text-sm mt-2">
            <li>{t("smallClaims.preparation.items.caseDescription")}</li>
            <li>{t("smallClaims.preparation.items.companyInfo")}</li>
            <li>{t("smallClaims.preparation.items.dateLocation")}</li>
            <li>{t("smallClaims.preparation.items.claimAmount")}</li>
            <li>{t("smallClaims.preparation.items.evidence")}</li>
            <li>{t("smallClaims.preparation.items.identification")}</li>
          </ul>
        </div>

        {/* Formularios */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {t("smallClaims.forms.title")}
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            {t("smallClaims.forms.description")}
          </p>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-1 text-sm mt-2">
            <li>
              <b>Plaintiff:</b> {t("smallClaims.forms.sections.plaintiff")}
            </li>
            <li>
              <b>Defendant:</b> {t("smallClaims.forms.sections.defendant")}
            </li>
            <li>
              <b>Amount Claimed:</b> {t("smallClaims.forms.sections.amount")}
            </li>
            <li>
              <b>Statement of Claim:</b>{" "}
              {t("smallClaims.forms.sections.statement")}
            </li>
            <li>
              <b>Signature:</b> {t("smallClaims.forms.sections.signature")}
            </li>
          </ul>
        </div>

        {/* Pasos del proceso */}
        <div class="mt-10">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">
            {t("smallClaims.process.title")}
          </h2>

          <ol class="relative border-l border-gray-300 space-y-6">
            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("smallClaims.process.steps.preparation.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("smallClaims.process.steps.preparation.description")}
              </p>
            </li>

            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("smallClaims.process.steps.courthouse.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("smallClaims.process.steps.courthouse.description")}
              </p>
            </li>

            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("smallClaims.process.steps.form.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("smallClaims.process.steps.form.description")}
              </p>
            </li>

            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("smallClaims.process.steps.submit.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("smallClaims.process.steps.submit.description")}
              </p>
            </li>

            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("smallClaims.process.steps.hearing.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("smallClaims.process.steps.hearing.description")}
              </p>
            </li>
          </ol>
        </div>

        {/* Costos */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {t("smallClaims.costs.title")}
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            {t("smallClaims.costs.description")}
          </p>
        </div>

        {/* Advertencia */}
        <div class="mt-10 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
          <div class="flex items-center">
            <svg
              class="h-6 w-6 text-yellow-500 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01M12 5.5a7 7 0 100 14 7 7 0 000-14z"
              />
            </svg>
            <div>
              <h3 class="text-sm font-semibold text-yellow-800">
                {t("smallClaims.warning.title")}
              </h3>
              <p class="text-sm text-yellow-700 mt-1">
                {t("smallClaims.warning.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Botón de Asistente IA */}
        <div class="mt-10 text-center">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {t("common.aiAssistant.title")}
          </h2>
          <p class="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            {t("common.aiAssistant.description")}
          </p>
          <button class="btn-primary">{t("common.aiAssistant.button")}</button>
        </div>
      </div>
    </section>
  );
}
