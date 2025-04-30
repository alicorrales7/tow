import { useLanguage } from "~/i18n/LanguageContext";

export default function MyCase() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-2xl w-full p-8 space-y-6 animate-fade-in text-center">
        <h1 class="text-2xl font-bold text-blue-700">
          {t("myCase.personal.title")}
        </h1>
        <p class="text-gray-700 text-sm leading-relaxed">
          {t("myCase.personal.description")}
        </p>
        <p class="text-gray-700 text-sm leading-relaxed">
          {t("myCase.personal.incident")}
        </p>
        <p class="text-gray-700 text-sm leading-relaxed">
          {t("myCase.personal.hearing")}
        </p>

        <p class="text-gray-600 text-xs">{t("myCase.personal.updateNote")}</p>
      </div>
    </section>
  );
}
