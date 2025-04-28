import { Router, Route } from "@solidjs/router";
import { Suspense } from "solid-js";
import Nav from "~/components/Nav";
import Home from "~/routes/index";
import MiCaso from "~/routes/mi-caso";
import InfoLegal from "~/routes/info-legal";
import Reclamar from "~/routes/reclamar/index";
import SmallClaims from "~/routes/reclamar/small-claims";
import DepartamentoTransporte from "~/routes/reclamar/departamento-transporte";
import Reportes from "~/routes/reportes";
import ConsumerServices from "~/routes/reclamar/consumer-services";
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
            <Route path="/mi-caso" component={MiCaso} />
            <Route path="/info-legal" component={InfoLegal} />
            <Route path="/reclamar" component={Reclamar} />
            <Route path="/reclamar/small-claims" component={SmallClaims} />
            <Route
              path="/reclamar/departamento-transporte"
              component={DepartamentoTransporte}
            />
            <Route
              path="/reclamar/consumer-services"
              component={ConsumerServices}
            />
            <Route path="/reportes" component={Reportes} />
          </Suspense>
        </main>
      </Router>
    </LanguageProvider>
  );
}
