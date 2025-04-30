import { A } from "@solidjs/router";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ConsumerServices() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8 animate-fade-in">
        {/* Título principal */}
        <h1 class="text-2xl font-bold text-blue-700">
          {t("consumerServices.title")}
        </h1>

        {/* Introducción */}
        <p class="text-gray-700 leading-relaxed">
          {t("consumerServices.description")}
        </p>

        {/* Enlace oficial */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800">
            {t("consumerServices.officialLink.title")}
          </h2>
          <a
            href="https://www.fdacs.gov/Contact-Us/File-a-Complaint"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            {t("consumerServices.officialLink.text")}
          </a>
        </div>

        {/* Descarga de documentos */}
        <div class="mt-8">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("consumerServices.documents.title")}
          </h2>
          <div class="flex flex-row gap-4 mt-4">
            <a
              href="/documents/consumer-complaint-affidavit.pdf"
              target="_blank"
              class="btn-primary flex-1"
            >
              {t("consumerServices.documents.affidavit")}
            </a>
            <a
              href="/documents/modelo-carta-reclamo.docx"
              target="_blank"
              class="btn-primary flex-1"
            >
              {t("consumerServices.documents.template")}
            </a>
          </div>
        </div>

        {/* Cómo llenar el reclamo */}
        <div class="mt-8">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("consumerServices.process.title")}
          </h2>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed space-y-2 text-sm mt-2">
            <li>{t("consumerServices.process.steps.download")}</li>
            <li>{t("consumerServices.process.steps.fill")}</li>
            <li>{t("consumerServices.process.steps.complete")}</li>
            <li>{t("consumerServices.process.steps.attach")}</li>
            <li>
              {t("consumerServices.process.steps.send")}{" "}
              <span class="font-semibold">consumerservices@fdacs.gov</span>
            </li>
          </ul>
        </div>

        {/* Qué sucede después */}
        <div>
          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            {t("consumerServices.followUp.title")}
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed mt-2">
            {t("consumerServices.followUp.description")}
          </p>
          <p class="text-gray-600 text-xs mt-2">
            {t("consumerServices.followUp.note")}
          </p>
        </div>

        {/* Pasos resumidos */}
        <div class="mt-10">
          <h2 class="text-xl font-semibold text-gray-800 mb-6">
            {t("consumerServices.summary.title")}
          </h2>
          <ol class="relative border-l border-gray-300 space-y-6">
            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("consumerServices.summary.step1.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("consumerServices.summary.step1.description")}
              </p>
            </li>
            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("consumerServices.summary.step2.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("consumerServices.summary.step2.description")}
              </p>
            </li>
            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("consumerServices.summary.step3.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("consumerServices.summary.step3.description")}
              </p>
            </li>
            <li class="ml-6">
              <div class="absolute w-3 h-3 bg-blue-600 rounded-full -left-1.5 top-2"></div>
              <h3 class="font-semibold text-gray-900">
                {t("consumerServices.summary.step4.title")}
              </h3>
              <p class="text-sm text-gray-700 mt-1">
                {t("consumerServices.summary.step4.description")}
              </p>
            </li>
          </ol>
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
                {t("consumerServices.warning.title")}
              </h3>
              <p class="text-sm text-yellow-700 mt-1">
                {t("consumerServices.warning.description")}
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
