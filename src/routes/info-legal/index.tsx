import { useLanguage } from "~/i18n/LanguageContext";

export default function LegalInfo() {
  const { t } = useLanguage();

  return (
    <section class="flex justify-center px-6 py-12 bg-gray-100 min-h-screen">
      <div class="bg-white shadow-md rounded-2xl max-w-3xl w-full p-8 space-y-6 animate-fade-in">
        <h1 class="text-2xl font-bold text-blue-700">{t("legalInfo.title")}</h1>

        <div class="space-y-4 text-gray-700 text-sm leading-relaxed">
          <h2 class="text-xl font-semibold text-gray-800">
            {t("legalInfo.sections.rights.title")}
          </h2>
          <ul class="list-disc pl-6">
            <li>{t("legalInfo.sections.rights.content.properNotice")}</li>
            <li>{t("legalInfo.sections.rights.content.fairCharges")}</li>
            <li>{t("legalInfo.sections.rights.content.vehicleAccess")}</li>
            <li>{t("legalInfo.sections.rights.content.documentation")}</li>
            <li>{t("legalInfo.sections.rights.content.dispute")}</li>
          </ul>

          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            {t("legalInfo.sections.laws.title")}
          </h2>
          <p>{t("legalInfo.sections.laws.description")}</p>
          <ul class="list-disc pl-6">
            <li>{t("legalInfo.sections.laws.content.local")}</li>
            <li>{t("legalInfo.sections.laws.content.state")}</li>
            <li>{t("legalInfo.sections.laws.content.federal")}</li>
          </ul>

          <h2 class="text-xl font-semibold text-gray-800 mt-6">
            {t("legalInfo.sections.procedures.title")}
          </h2>
          <ul class="list-disc pl-6">
            <li>{t("legalInfo.sections.procedures.content.filing")}</li>
            <li>{t("legalInfo.sections.procedures.content.evidence")}</li>
            <li>{t("legalInfo.sections.procedures.content.hearing")}</li>
            <li>{t("legalInfo.sections.procedures.content.appeal")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
