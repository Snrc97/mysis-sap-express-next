"use client";
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { FormEvent, useState } from 'react';

interface ButtonSpinnerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => Promise<void>;
    onSubmit?: (event: FormEvent<HTMLButtonElement>) => Promise<FormEvent<HTMLButtonElement>>
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ className, onClick, onSubmit, children }) => {

    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = async () => {
        setIsLoading(true);
        await onClick?.();
        setIsLoading(false);
    }

    const handleOnSubmit = async (event: FormEvent<HTMLButtonElement>) => {
        setIsLoading(true);
        await onSubmit?.(event);
        setIsLoading(false);
    }

    return (
        <Button

            className={className + " min-w-[135px] cursor-pointer relative flex flex-row justify-center items-center"}
            onClick={handleOnClick}
            onSubmit={async (e) => await handleOnSubmit(e)}
            disabled={isLoading}
        >
                {
                    isLoading &&
                    <Loader2 size={25} color='white' className='
                    absolute 
                    ml-[-90px] 
                    scale-120
                    z-0
                    animate-spin 
                    transition duration-[0.5s]' />
                }
                {children}
        </Button>
    );
};
