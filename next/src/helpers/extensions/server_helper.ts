"use server";

export const loadAppLangs = async () => ['tr', 'en', 'de'];

const appLangs = await loadAppLangs();
let appLangId = 0;
let appLang = async () => appLangs[appLangId]; // tr default language

// appLang = localStorageGetItem('appLang') || appLang;


export const setAppLang = async (lang: string) => {
  
    appLangId = appLangs.indexOf(lang);
    appLang = async () => appLangs[appLangId]
  localStorageSetItem('appLang', lang);
  // location.reload();
};

const getTranslationsPath = (appLang: string) => `@/lang/${appLang}/all.json`;

let translationsObject: any = {};

appLangs.forEach(
    (lang) => {
      const pathTranslations = require(getTranslationsPath(lang));
      translationsObject = { ...translationsObject, [lang]: pathTranslations };
    },
    [translationsObject]
  );

const translations = async () => {
    const loadedAppLang = await appLang();
    return translationsObject[loadedAppLang] || translationsObject[appLangs[0]]; // default language
}
export { appLang, translations };

  