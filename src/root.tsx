import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Home from "~/routes/index";
import MyCase from "~/routes/my-case";
import LegalInfo from "~/routes/info-legal";
import Report from "~/routes/report";
import Assistant from "~/routes/assistant";
import { LanguageProvider } from "~/i18n/LanguageContext";
import "~/app.css";

export default function Root() {
  return (
    <LanguageProvider>
      <Router>
        <Nav />
        <main class="min-h-screen bg-gray-50 text-gray-800 font-sans">
          <Suspense>
            <Route path="/" component={Home} />
            <Route path="/my-case" component={MyCase} />
            <Route path="/info-legal" component={LegalInfo} />
            <Route path="/report" component={Report} />
            <Route path="/assistant" component={Assistant} />
          </Suspense>
        </main>
      </Router>
    </LanguageProvider>
  );
}
