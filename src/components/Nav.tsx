import { A } from "@solidjs/router";
import { useLanguage } from "../i18n/LanguageContext";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();

  const toggleLanguage = () => {
    setLocale(locale() === "es" ? "en" : "es");
  };

  return (
    <nav class="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <A href="/" class="text-white text-xl font-bold">
                Reclamo Grúa
              </A>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <A
                  href="/"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.home")}
                </A>
                <A
                  href="/mi-caso"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.myCase")}
                </A>
                <A
                  href="/info-legal"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.legalInfo")}
                </A>
                <A
                  href="/reclamar"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.howToClaim")}
                </A>
                <A
                  href="/reportes"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.reports")}
                </A>
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button
              onClick={toggleLanguage}
              class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              {t("common.language")}:{" "}
              {locale() === "es" ? t("common.spanish") : t("common.english")}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
