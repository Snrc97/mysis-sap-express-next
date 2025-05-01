import { serialize } from 'cookie'

export function getLocalCookie(key: string) {
  if (typeof document === 'undefined') {
    return '';
  }
  return localStorageGetItem(key) || "No token found";
  // const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
  //   const [k, v] = cookie.split('=');
  //   acc[k] = v;
  //   return acc;
  // }, {} as Record<string, string>);
  
  // return cookies[key] || "No token found";
}

export const setLocalCookie = (key: string, value: string, expires?: number) => {
  if (typeof document === 'undefined') {
    return '';
  }
  localStorageSetItem(key, value);
  // document.cookie = serialize(key, value, {
  //   maxAge: expires || 60 * 60 * 24 * 7, // 7 days
  //   path: "/", // Accessible across the site
  // });
};

export const destroyLocalCookie = (key: string) => {
  if (typeof document === 'undefined') {
     return '';
  }
  localStorageRemoveItem(key);
  // document.cookie = serialize(key, '', {
  //   maxAge: -1,
  //   path: "/",
  // });
};
