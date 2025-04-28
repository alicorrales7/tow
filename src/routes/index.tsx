import { useLanguage } from "~/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-8">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
          {t("home.title")}
        </h1>

        <p class="text-gray-700 leading-relaxed">{t("home.description")}</p>
        <div class="mt-14 bg-red-50 border border-red-200 rounded-lg p-3 text-red-700 text-xs max-w-xl mx-auto">
          <strong class="block mb-1 text-sm text-red-800">
            {t("home.warning.title")}
          </strong>
          <p class="leading-snug">{t("home.warning.description")}</p>
        </div>
      </div>
    </section>
  );
}
