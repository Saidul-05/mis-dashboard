import { ComponentPropsWithoutRef } from 'react';

export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'destructive';
}

export const Alert = ({ 
  variant = 'default', 
  className,
  ...props 
}: AlertProps) => (
  <div
    className={`p-4 rounded-lg border ${
      variant === 'destructive'
        ? 'bg-red-50 border-red-200 text-red-700'
        : 'bg-blue-50 border-blue-200 text-blue-700'
    } ${className}`}
    {...props}
  />
);

export const AlertTitle = ({ className, ...props }: ComponentPropsWithoutRef<'h3'>) => (
  <h3 className={`font-semibold mb-2 ${className}`} {...props} />
);

export const AlertDescription = ({ className, ...props }: ComponentPropsWithoutRef<'div'>) => (
  <div className={`text-sm ${className}`} {...props} />
);
