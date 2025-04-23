'use client'
import { createContext, useContext } from "react";

// Create a generic context with default value as null
const PageContext = createContext<any>(null);

export const usePage = <T = any>(): any => {
  const context = useContext(PageContext);

  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }

  return context as T;
};

export const PageProvider = <T = any>({ children, value }: { children: React.ReactNode; value: T }) => {
  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
