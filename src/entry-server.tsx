// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { LanguageProvider } from "./i18n/LanguageContext";

export default createHandler(() => (
  <LanguageProvider>
    <StartServer
      document={({ assets, children, scripts }) => (
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta
              name="description"
              content="File a complaint against towing companies in Miami-Dade County. Get help with your claim process, legal information, and document generation."
            />
            <title>Towing Claim Assistant - Miami-Dade County</title>
            <link rel="icon" href="/favicon.ico" />
            {assets}
          </head>
          <body>
            <div id="app">{children}</div>
            {scripts}
          </body>
        </html>
      )}
    />
  </LanguageProvider>
));
