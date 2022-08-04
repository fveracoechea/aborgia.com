const en = require("./locales/en.json");
const es = require("./locales/es.json");
const pt = require("./locales/pt.json");

const i18n = {
  translations: {
    en,
    es,
    pt,
  },
  defaultLang: "en",
  useBrowserDefault: true,
};

module.exports = i18n;
