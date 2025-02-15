// alert.tsx
   import { ComponentPropsWithoutRef } from 'react';

   export interface AlertProps extends ComponentPropsWithoutRef<'div'> {
     variant?: 'default' | 'destructive';
   }

   export const Alert = ({ variant = 'default', ...props }: AlertProps) => (
     <div
       role="alert"
       className={`rounded-lg border p-4 ${
         variant === 'destructive'
           ? 'border-red-200 bg-red-100 text-red-700'
           : 'border-blue-200 bg-blue-100 text-blue-700'
       }`}
       {...props}
     />
   );

   export const AlertTitle = (props: ComponentPropsWithoutRef<'h3'>) => (
     <h3 className="mb-1 font-medium leading-none tracking-tight" {...props} />
   );

   export const AlertDescription = (props: ComponentPropsWithoutRef<'div'>) => (
     <div className="text-sm [&_p]:leading-relaxed" {...props} />
   );
