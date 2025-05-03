import { A } from "@solidjs/router";
import { useLanguage } from "../i18n/LanguageContext";
import { createSignal, onMount, onCleanup } from "solid-js";

export default function Nav() {
  const { locale, setLocale, t } = useLanguage();
  const [isClaimsOpen, setIsClaimsOpen] = createSignal(false);
  const [menuOpen, setMenuOpen] = createSignal(false);
  let dropdownRef: HTMLDivElement | undefined;

  const toggleLanguage = () => {
    setLocale(locale() === "es" ? "en" : "es");
  };

  const toggleClaims = (e: MouseEvent) => {
    e.preventDefault();
    setIsClaimsOpen(!isClaimsOpen());
  };

  const toggleMenu = () => setMenuOpen(!menuOpen());

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
              <button
                onClick={toggleMenu}
                class="text-white p-2 md:hidden focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21 12h-2.756l-1.72-3.44a1 1 0 00-.894-.56H7.37L6.294 5.3A.997.997 0 005.281 5H3c-.552 0-1 .447-1 1v12c0 .553.448 1 1 1h1c0 1.103.897 2 2 2s2-.897 2-2h8c0 1.103.897 2 2 2s2-.897 2-2h1c.552 0 1-.447 1-1v-3c0-1.103-.897-2-2-2zM6 18c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1zm12 0c-.552 0-1-.447-1-1s.448-1 1-1 1 .447 1 1-.448 1-1 1zM4 8h1.382l1.38 2.76c.046.092.133.156.236.18l10.248 2.374L17.714 12H16a1 1 0 100 2h1v3h-1a1 1 0 100 2h1v1H8v-1h1a1 1 0 100-2H8v-3h1a1 1 0 100-2H7.382l-2.497-2.497L4 8z" />
                </svg>
              </button>
              <A href="/" class="text-white text-xl font-bold hidden md:block">
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
      {menuOpen() && (
        <div class="md:hidden bg-gradient-to-r from-blue-600 to-blue-800 px-2 pt-2 pb-3 space-y-1">
          <A
            href="/"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.home")}
          </A>
          <A
            href="/my-case"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.myCase")}
          </A>
          <A
            href="/reclamar/small-claims"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.claims.smallClaims")}
          </A>
          <A
            href="/reclamar/consumer-services"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.claims.consumerServices")}
          </A>
          <A
            href="/reclamar/departamento-transporte"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.claims.transport")}
          </A>
          <A
            href="/info-legal"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.legalInfo")}
          </A>
          <A
            href="/report"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.reports")}
          </A>
          <A
            href="/assistant"
            class="block text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("nav.assistant")}
          </A>
          <button
            onClick={toggleLanguage}
            class="block w-full text-left text-white hover:bg-blue-700 hover:bg-opacity-75 px-3 py-2 rounded-md text-base font-medium"
          >
            {t("common.language")} :{" "}
            {locale() === "es" ? t("common.spanish") : t("common.english")}
          </button>
        </div>
      )}
    </nav>
  );
}
