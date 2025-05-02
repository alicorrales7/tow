import { useLanguage } from "../i18n/LanguageContext";

export default function LegalInfo() {
  const { t } = useLanguage();

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4 gradient-text">
        {t("legalInfo.title")}
      </h1>
      <p class="text-xl text-gray-600 mb-8">{t("legalInfo.description")}</p>

      <div class="grid md:grid-cols-2 gap-8">
        {/* Derechos */}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("legalInfo.sections.rights.title")}
          </h2>
          <p class="text-gray-600 mb-4">
            {t("legalInfo.sections.rights.description")}
          </p>
          <ul class="space-y-3">
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{t("legalInfo.sections.rights.content.properNotice")}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{t("legalInfo.sections.rights.content.fairCharges")}</span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                {t("legalInfo.sections.rights.content.vehicleAccess")}
              </span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>
                {t("legalInfo.sections.rights.content.documentation")}
              </span>
            </li>
            <li class="flex items-start">
              <svg
                class="h-6 w-6 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{t("legalInfo.sections.rights.content.dispute")}</span>
            </li>
          </ul>
        </div>

        {/* Leyes Aplicables */}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("legalInfo.sections.laws.title")}
          </h2>
          <p class="text-gray-600 mb-4">
            {t("legalInfo.sections.laws.description")}
          </p>
          <div class="space-y-4">
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900">
                {t("legalInfo.sections.laws.content.local")}
              </h3>
              <p class="text-sm text-gray-600">
                Miami-Dade County Code Chapter 30
              </p>
            </div>
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900">
                {t("legalInfo.sections.laws.content.state")}
              </h3>
              <p class="text-sm text-gray-600">
                Florida Statutes Chapter 715.07
              </p>
            </div>
            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="font-semibold text-gray-900">
                {t("legalInfo.sections.laws.content.federal")}
              </h3>
              <p class="text-sm text-gray-600">
                Consumer Protection Safety Act
              </p>
            </div>
          </div>
        </div>

        {/* Procedimientos Legales */}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("legalInfo.sections.procedures.title")}
          </h2>
          <p class="text-gray-600 mb-4">
            {t("legalInfo.sections.procedures.description")}
          </p>
          <div class="space-y-4">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span class="text-blue-800 font-semibold">1</span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">
                  {t("legalInfo.sections.procedures.content.filing")}
                </h3>
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span class="text-blue-800 font-semibold">2</span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">
                  {t("legalInfo.sections.procedures.content.evidence")}
                </h3>
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span class="text-blue-800 font-semibold">3</span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">
                  {t("legalInfo.sections.procedures.content.hearing")}
                </h3>
              </div>
            </div>
            <div class="flex items-center">
              <div class="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span class="text-blue-800 font-semibold">4</span>
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-medium text-gray-900">
                  {t("legalInfo.sections.procedures.content.appeal")}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Recursos Adicionales */}
        <div class="bg-white shadow rounded-lg p-6">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("legalInfo.resources.title")}
          </h2>
          <p class="text-gray-600 mb-4">
            {t("legalInfo.resources.description")}
          </p>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold text-gray-900">
                {t("legalInfo.resources.downloads.title")}
              </h3>
              <div class="mt-2 space-y-2">
                <button class="btn-secondary w-full">
                  {t("legalInfo.resources.downloads.forms")}
                </button>
                <button class="btn-secondary w-full">
                  {t("legalInfo.resources.downloads.guides")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
