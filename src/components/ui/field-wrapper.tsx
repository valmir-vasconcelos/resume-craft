import { ReactNode } from "react";
import { Label } from "./label";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

type FieldWrapperProps = {
    label: string;
    children: ReactNode;
    className?: string;
    error?: FieldError;
}

const FieldWrapper = ({ label, children, className, error }: FieldWrapperProps) => {
    return (
        <div className={cn("flex flex-col gap-2", className)}>
            <Label>{label}</Label>
            {children}
            {error && (
                <p className="text-red-500 text-sm">
                    {error.message}
                </p>
            )}
        </div>
    );
}

export default FieldWrapper;