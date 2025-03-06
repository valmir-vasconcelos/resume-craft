import { Button } from "@/components/ui/button"
import {
    Dialog as DialogRoot,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./primitive"
import { ReactNode } from "react";

export type BaseDialogProps = {
    children?: ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
}

type DialogProps = BaseDialogProps & {
    title: string;
    description?: string;
    content: ReactNode;
}

const Dialog = ({ children, title, description, content, open, setOpen }: DialogProps) => {
    return (
        <DialogRoot open={open} onOpenChange={setOpen}>
            {
                children && <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
            }
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {
                        description && <DialogDescription>{description}</DialogDescription>
                    }
                </DialogHeader>
                {content}

            </DialogContent>
        </DialogRoot>
    );
}

export default Dialog;