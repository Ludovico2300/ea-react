import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import it from "./translations/it.json";

const resources = { en, it };

export const availableLanguages = Object.keys(resources);

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "it",
  lng: "it", //lingua scelta
  nsSeparator: ".",
  keySeparator: ":",
  defaultNS: "it",
  ns: ["it", "en"],
  compatibilityJSON: "v3",
  appendNamespaceToMissingKey: true,
  returnNull: false,
});

declare module "i18next" {
  interface CustomTypeOptions {
    resources: typeof it;
    nsSeparator: ".";
    keySeparator: ":";
    fallbackLng: "it";
    returnNull: false;
  }
}
