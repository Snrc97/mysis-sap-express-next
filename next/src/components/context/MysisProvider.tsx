'use client'
import { createContext, useEffect, useState } from 'react'
import { translations as loadTranslations } from '@/helpers/extensions/server_helper'
import { Loader } from 'lucide-react'

import '@/helpers/extensions/client_helper'

export type MysisContextProps = {
  isLoading?: boolean;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  handleWithAsyncrousLoading?: (action: () => Promise<void>) => Promise<void>;
}

const MysisContext = createContext({});
export function MysisProvider({ children }: { children: any }) {


  const [isLoading, setIsLoading] = useState(true);

  const handleWithAsyncrousLoading = async (action: () => Promise<void>) => {
    setIsLoading(true);
    await action();
    setIsLoading(false);
  }

  useEffect(() => {
    const fetchTranslations = async () => {
      await handleWithAsyncrousLoading(async () => {
        const translations = await loadTranslations();
        global.translations = translations;
      });
    }
    fetchTranslations();
  }, []);



  const values : MysisContextProps = {
    isLoading,
    setIsLoading,
    handleWithAsyncrousLoading,
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
