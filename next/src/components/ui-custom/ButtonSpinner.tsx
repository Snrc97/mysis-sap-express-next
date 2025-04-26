"use client";
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useState } from 'react';

interface ButtonSpinnerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick?: () => Promise<void>
}

export const ButtonSpinner: React.FC<ButtonSpinnerProps> = ({ className, onClick, children }) => {

    const [isLoading, setIsLoading] = useState(false);

    return (
        <Button

            className={className}
            onClick={async () => {
                setIsLoading(true);
                    await onClick?.();
                setIsLoading(false);
            }}
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
