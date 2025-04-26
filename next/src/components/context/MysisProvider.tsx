'use client';
import { createContext, useEffect, useState } from 'react';
import { translations as loadTranslations } from '@/helpers/extensions/server_helper';
import { Progress } from '@radix-ui/react-progress';
import { ActivityIcon, Loader, Loader2, LoaderCircle, LoaderPinwheel } from 'lucide-react';

const MysisContext = createContext({});

export default function MysisProvider({children} : {children:any}) {


  const [isLoading, setIsLoading] = useState(true);

  const handleWithAsyncrousLoading = async (action: () => Promise<void>) => {
    setIsLoading(true);
    await action();
    setIsLoading(false);
  }

    useEffect(()=>{
      const fetchTranslations = async () => {
        await handleWithAsyncrousLoading(async() => {
          const translations = await loadTranslations();
          global.translations = translations;
        });
      }
        fetchTranslations();
      }, []);


      
  return (
    <MysisContext.Provider value={children}>
      {
        isLoading ?
      <Loader size={85} color='green' className='absolute top-1/2 left-1/2 animate-spin transition duration-[2s]'/>
      :
      children
      }
    </MysisContext.Provider>
  );
}

