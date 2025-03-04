"use client"
import { Button } from "@/components/ui/button";
import Dialog, { BaseDialogProps } from "@/components/ui/dialog";
import InputField from "@/components/ui/input/field";
import { FormProvider, useForm } from "react-hook-form";

type FormData = {
    name: string;
    email: string;
    phone: string;
}

const NewResumeDialog = (props: BaseDialogProps) => {

    const methods = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
    }

    return (
        <Dialog
            {...props}
            title="Criar novo currículo"
            description="Para começar, escolha um título para o seu currículo."
            content={
                <FormProvider {...methods}>
                    <form className="flex flex-col" onSubmit={methods.handleSubmit(onSubmit)}>
                        <InputField label="Título" name="title" required />
                        <Button type="submit" className="w-max mt-6 ml-auto">Criar</Button>
                    </form>
                </FormProvider>

            }
        />
    );
}

export default NewResumeDialog;