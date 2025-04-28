import {
  createContext,
  useContext,
  createSignal,
  ParentComponent,
} from "solid-js";
import { translations } from "./translations";

type Language = "en" | "es";

const LanguageContext = createContext<{
  locale: () => Language;
  setLocale: (lang: Language) => void;
  t: (key: string) => string;
}>();

export const LanguageProvider: ParentComponent = (props) => {
  const [locale, setLocale] = createSignal<Language>("es");

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[locale()];

    for (const k of keys) {
      value = value?.[k];
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
