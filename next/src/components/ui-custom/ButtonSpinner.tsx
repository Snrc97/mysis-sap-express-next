import { Button } from '../ui/button';

export const ButtonSpinner: React.FC<{
    className?: string;
    onClick?: () => void;
    isLoading?: boolean;
    loadingText?: string;
    children?: any;
}> = ({ className, onClick, isLoading, children, loadingText }) => {
    return (
        <Button
            className={className}
            onClick={onClick}
            disabled={isLoading}
        >
            {isLoading ? (
                <div className="flex items-center gap-2">
                    <svg className="mr-3 size-5 animate-spin" viewBox="0 0 24 24">
                    </svg>
                    {/* <Icons.Spinner className="h-4 w-4 animate-spin" /> */}
                    <span>{loadingText}</span>
                </div>
            ) : (
                <>{children}</>
            )}
        </Button>
    );
};
