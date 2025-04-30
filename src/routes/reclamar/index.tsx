import { A } from "@solidjs/router";
import { useLanguage } from "../../i18n/LanguageContext";

export default function ClaimsIndex() {
  const { t } = useLanguage();

  return (
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-8 gradient-text">
        {t("howToClaim.title")}
      </h1>

      <div class="grid md:grid-cols-3 gap-8">
        {/* Small Claims Court */}
        <div class="card hover-scale flex flex-col h-[400px]">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("nav.claims.smallClaims")}
          </h2>
          <p class="text-gray-600 mb-6 flex-grow">
            {t("smallClaims.description")}
          </p>
          <A
            href="/reclamar/small-claims"
            class="btn-primary inline-block w-full text-center"
          >
            {t("smallClaims.nextButton")}
          </A>
        </div>

        {/* Consumer Services */}
        <div class="card hover-scale flex flex-col h-[400px]">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("nav.claims.consumerServices")}
          </h2>
          <p class="text-gray-600 mb-6 flex-grow">
            {t("consumerServices.description")}
          </p>
          <A
            href="/reclamar/consumer-services"
            class="btn-primary inline-block w-full text-center"
          >
            {t("consumerServices.nextButton")}
          </A>
        </div>

        {/* Transport Department */}
        <div class="card hover-scale flex flex-col h-[400px]">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {t("nav.claims.transport")}
          </h2>
          <p class="text-gray-600 mb-6 flex-grow">
            {t("transportDepartment.intro")}
          </p>
          <A
            href="/reclamar/departamento-transporte"
            class="btn-primary inline-block w-full text-center"
          >
            {t("transportDepartment.nextButton")}
          </A>
        </div>
      </div>
    </div>
  );
}
