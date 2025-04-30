import { A } from "@solidjs/router";
import { useLanguage } from "../i18n/LanguageContext";
import { createSignal, onMount, onCleanup } from "solid-js";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [isClaimsOpen, setIsClaimsOpen] = createSignal(false);
  let dropdownRef: HTMLDivElement | undefined;

  const toggleLanguage = () => {
    setLocale(locale() === "es" ? "en" : "es");
  };

  const toggleClaims = (e: MouseEvent) => {
    e.preventDefault();
    setIsClaimsOpen(!isClaimsOpen());
  };

  // Handle click outside
  onMount(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef && !dropdownRef.contains(event.target as Node)) {
        setIsClaimsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    onCleanup(() =>
      document.removeEventListener("mousedown", handleClickOutside)
    );
  });

  return (
    <nav class="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <A href="/" class="text-white text-xl font-bold">
                {t("home.title")}
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
                  href="/my-case"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.myCase")}
                </A>
                <div class="relative" ref={dropdownRef}>
                  <A
                    href="/reclamar"
                    class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center group"
                  >
                    {t("nav.howToClaim")}
                    <button
                      onClick={toggleClaims}
                      class="ml-2 focus:outline-none"
                    >
                      <svg
                        class={`h-4 w-4 transform transition-transform ${
                          isClaimsOpen() ? "rotate-180" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </A>
                  <div
                    class={`absolute z-10 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${
                      isClaimsOpen() ? "block" : "hidden"
                    }`}
                  >
                    <div class="py-1">
                      <A
                        href="/reclamar/small-claims"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("nav.claims.smallClaims")}
                      </A>
                      <A
                        href="/reclamar/consumer-services"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("nav.claims.consumerServices")}
                      </A>
                      <A
                        href="/reclamar/departamento-transporte"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {t("nav.claims.transport")}
                      </A>
                    </div>
                  </div>
                </div>
                <A
                  href="/info-legal"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.legalInfo")}
                </A>
                <A
                  href="/report"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.reports")}
                </A>
                <A
                  href="/assistant"
                  class="text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  {t("nav.assistant")}
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
