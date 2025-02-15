import { AlertTriangle } from "lucide-react";
import { ComponentPropsWithoutRef } from "react";

interface AlertProps extends ComponentPropsWithoutRef<"div"> {
  variant?: "default" | "destructive";
}

export const Alert = ({ variant = "default", className, ...props }: AlertProps) => (
  <div
    className={`p-4 rounded-lg ${
      variant === "destructive" 
        ? "bg-red-100 text-red-700" 
        : "bg-blue-100 text-blue-700"
    } ${className}`}
    {...props}
  />
);

export const AlertTitle = ({ className, ...props }: ComponentPropsWithoutRef<"h3">) => (
  <h3 className={`font-semibold mb-2 ${className}`} {...props} />
);

export const AlertDescription = ({ className, ...props }: ComponentPropsWithoutRef<"p">) => (
  <p className={`text-sm ${className}`} {...props} />
);
