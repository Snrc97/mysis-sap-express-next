'use client';


declare global {
  interface String {
    toUpperCaseFirst(): string;
    toLowerCaseFirst(): string;
  }

  interface ArrayConstructor {
    toPluckFromEnum(enm: any): any;
  }

  var appLang: string;
  var localStorageGetItem: (key: string) => string | null;
  var localStorageSetItem: (key: string, value: string) => void;
  var localStorageRemoveItem: (key: string) => void;
  var trans:  (key: string, args?: { [key: string]: string }) => string;
  var translations: { [key: string]: string };
  var checkHasLoggedIn: () => boolean;
}

global.appLang = 'tr';

function localStorageGetItem(key: string): string | null {
  if (typeof window === 'undefined') return null; // 🛡️ safe check
  return localStorage.getItem(key);
}

global.localStorageGetItem = localStorageGetItem;

function localStorageSetItem(key: string, value: string): void {
  if (typeof window === 'undefined') return; // 🛡️ safe check
  localStorage.setItem(key, value);
}
global.localStorageSetItem = localStorageSetItem;

function localStorageRemoveItem(key: string): void {
  if (typeof window === 'undefined') return; // 🛡️ safe check
  localStorage.removeItem(key);
}

global.localStorageRemoveItem = localStorageRemoveItem;


global.checkHasLoggedIn = () => localStorageGetItem('auth-token') !== null;


global.trans = (key: string, args?: { [key: string]: string }) => {
  const empty = '*' + key + '*';
  let translation: any = '';
  let current: any = global.translations;
  if(!current)
  {
    return empty;
  }
  const keys = key.split('.');
  if (keys.length > 1) {
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      if (current[k] === undefined) {
        return empty;
      }
      current = current[k];
    }
    translation = current[keys[keys.length - 1]] ?? empty;
  } else {
    translation = current[key];
    if (translation === undefined) {
      return empty;
    }
  }

  if (!args) {
    translation = translation.replace(/\{.*?\}/g, '');
  } else {
    Object.keys(args).forEach((argKey) => {
      if (!args[argKey] && translation.includes(`{${argKey}?}`)) {
        translation = translation.replace(`{${argKey}?}`, '');
        return;
      }
      translation = translation.replace(`{${argKey}?}`, args[argKey]);
    });
  }

  return translation;
};


String.prototype.toUpperCaseFirst = function (this: string): string {
  if (this.length === 0) return this;
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.toLowerCaseFirst = function (this: string): string {
  if (this.length === 0) return this;
  return this.charAt(0).toLowerCase() + this.slice(1);
};

Array.toPluckFromEnum = function (enm: any) {
  return Object.entries(enm).map(([key, value]) => ({
    value: key,
    label: value,
  }));
};

export {};
