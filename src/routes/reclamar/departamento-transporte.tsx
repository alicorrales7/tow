import { useLanguage } from "../../i18n/LanguageContext";
import { For, createMemo } from "solid-js";

export default function TransportDepartment() {
  const { t } = useLanguage();
  const steps = createMemo(() => {
    const list = t("transportDepartment.steps.list");
    return Array.isArray(list) ? list : [];
  });

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8 animate-fade-in">
        {/* Título principal */}
        <h1 class="text-2xl font-bold text-blue-700">
          {t("transportDepartment.title")}
        </h1>

        {/* Introducción */}
        <p class="text-gray-700 text-sm leading-relaxed">
          {t("transportDepartment.intro")}
        </p>

        {/* Enlace oficial */}
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("transportDepartment.officialLink.title")}
          </h2>
          <a
            href="https://fdotwp1.dot.state.fl.us/ComplaintForm/ComplaintForm.aspx"
            target="_blank"
            class="text-blue-600 hover:underline text-sm"
          >
            {t("transportDepartment.officialLink.text")}
          </a>
        </div>

        {/* Pasos a seguir */}
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("transportDepartment.steps.title")}
          </h2>
          <ul class="list-disc pl-6 text-gray-700 leading-relaxed text-sm space-y-1">
            <For each={steps()}>{(step) => <li>{step}</li>}</For>
          </ul>
        </div>

        {/* ¿Qué sucede después? */}
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("transportDepartment.whatNext.title")}
          </h2>
          <p class="text-gray-700 text-sm leading-relaxed">
            {t("transportDepartment.whatNext.description")}
          </p>
        </div>

        {/* Advertencia importante */}
        <div class="mt-8 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md">
          <h3 class="text-sm font-semibold text-yellow-800">
            {t("transportDepartment.warning.title")}
          </h3>
          <p class="text-sm text-yellow-700 mt-1">
            {t("transportDepartment.warning.description")}
          </p>
        </div>

        {/* Botón ayuda formulario */}
        <div class="mt-10 text-center">
          <h2 class="text-xl font-semibold text-gray-800 mb-4">
            {t("transportDepartment.aiHelp.title")}
          </h2>
          <p class="text-gray-600 text-sm mb-6 max-w-md mx-auto">
            {t("transportDepartment.aiHelp.description")}
          </p>
          <button class="btn-primary">
            {t("transportDepartment.aiHelp.button")}
          </button>
        </div>

        {/* Nota final */}
        <div class="pt-6 border-t border-gray-200 text-center text-xs text-gray-500">
          {t("transportDepartment.footer")}
        </div>
      </div>
    </section>
  );
}
