import * as tr from '@/lang/tr/all.json';
import * as en from '@/lang/en/all.json';
import * as de from '@/lang/de/all.json';

const translationsObject : any = { "tr": tr, "en": en, "de": de };

// SSR
export const loadAppLangs = async () => Object.keys(translationsObject);

export const translations = async (appLang: string) => {
  return translationsObject[appLang] ?? translationsObject['tr'] ?? {}; // default language
};



