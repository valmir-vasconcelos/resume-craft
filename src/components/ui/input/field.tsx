import { ComponentProps } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from ".";
import FieldWrapper from "../field-wrapper";

type InputFieldProps = ComponentProps<typeof Input> & {
    label: string;
    name: string;
    containerClassName?: string;
}

const InputField = ({ label, name, required, containerClassName, ...props }: InputFieldProps) => {
    const { control } = useFormContext();
    return (
        <Controller
            control={control}
            name={name}
            rules={{ required: required && "Campo obrigatório" }}
            render={({ field, fieldState }) => (
                <FieldWrapper label={label} className={containerClassName}>
                    <Input {...props} {...field} />
                    {fieldState.error && <p className="text-red-500 text-sm">{fieldState.error.message}</p>}
                </FieldWrapper>
            )}
        />
    );
}

export default InputField;