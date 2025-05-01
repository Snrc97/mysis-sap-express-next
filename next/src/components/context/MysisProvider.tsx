'use client'
import { createContext, useEffect, useState } from 'react'
import { translations as loadTranslations } from '@/helpers/extensions/server_helper'
import { Loader } from 'lucide-react'
import { loadAppLangs } from '@/helpers/extensions/server_helper';

import '@/helpers/extensions/client_helper'

export type MysisContextProps = {
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  handleWithAsyncrousLoading?: (action: () => Promise<void>) => Promise<void>;
  currentAppLang: string;
  setCurrentAppLang: React.Dispatch<React.SetStateAction<string>>;
  appLangs: string[];
}

const MysisContext = createContext({});
export function MysisProvider({ children }: { children: any }) {


  const [isLoading, setIsLoading] = useState(true);
  const [currentAppLang, setCurrentAppLang] = useState(appLang);
  const [appLangs, setAppLangs] = useState<string[]>([]);

  const handleWithAsyncrousLoading = async (action: () => Promise<void>) => {
    setIsLoading(true);
    await action();
    setIsLoading(false);
    
  }

  useEffect(() => {
    const fetchTranslations = async () => {
      await handleWithAsyncrousLoading(async () => {
        const svAppLangs = await loadAppLangs();
        setAppLangs(svAppLangs);
        const translations = await loadTranslations(currentAppLang);
        global.translations = translations;
      });
    }
    fetchTranslations();
  }, [currentAppLang]);



  const values : MysisContextProps = {
    isLoading,
    setIsLoading,
    handleWithAsyncrousLoading,
    currentAppLang,
    setCurrentAppLang,
    appLangs
  }


  return (
    <MysisContext.Provider value={values}>
      {
        isLoading ?
          <Loader size={85} color='green' className='absolute top-1/2 left-1/2 animate-spin transition duration-[2s]' />
          :
          children
      }
    </MysisContext.Provider>
  );
}

export default MysisContext;
