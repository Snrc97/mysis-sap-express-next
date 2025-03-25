import { serialize } from 'cookie'

export function getCookie(key: string) {
  const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
    const [k, v] = cookie.split('=');
    acc[k] = v;
    return acc;
  }, {} as Record<string, string>);
  
  return cookies[key] || "No token found";
}

export const setCookie = (key: string, value: string, expires?: number) => {
  document.cookie = serialize(key, value, {
    maxAge: expires || 60 * 60 * 24 * 7, // 7 days
    path: "/", // Accessible across the site
  });
};

export const destroyCookie = (key: string) => {
  document.cookie = serialize(key, '', {
    maxAge: -1,
    path: "/",
  });
};
