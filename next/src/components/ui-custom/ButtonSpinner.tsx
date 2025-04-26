"use client";
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { FormEvent, useState } from 'react';

interface ButtonSpinnerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => Promise<void>;
  onSubmit?:  (event: FormEvent<HTMLButtonElement>) => Promise<FormEvent<HTMLButtonElement>>
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

            className={className}
            onClick={handleOnClick}
            onSubmit={async (e) => await handleOnSubmit(e)}
            disabled={isLoading}
        >
            <div className="flex flex-row items-center gap-2">
                {
                    isLoading &&
                    <Loader2 size={20} color='green' className='absolute top-1/2 left-1/2 animate-spin transition duration-[1s]' />
                }
                {children}
            </div>
        </Button>
    );
};
