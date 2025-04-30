import { useLanguage } from "~/i18n/LanguageContext";

export default function InfoLegal() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-4 py-12 bg-gray-100 min-h-screen">
      <div class="animate-fade-in bg-white shadow-md rounded-2xl max-w-2xl w-full p-8">
        <h1 class="text-2xl font-bold text-blue-700 mb-4">
          {t("legalInfo.title")}
        </h1>
        <p class="text-gray-700 leading-relaxed">
          {t("legalInfo.description")}
        </p>
      </div>
    </section>
  );
}
