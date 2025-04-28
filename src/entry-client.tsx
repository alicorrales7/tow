// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import { LanguageProvider } from "./i18n/LanguageContext";

mount(
  () => (
    <LanguageProvider>
      <StartClient />
    </LanguageProvider>
  ),
  document.getElementById("app")!
);
