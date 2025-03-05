import { ReactNode } from "react";
import { TooltipContent, TooltipProvider, Tooltip as TooltipRoot, TooltipTrigger } from "./primitive";

type TooltipProps = {
    children: ReactNode;
    content: string | number | ReactNode;
};

const Tooltip = ({ children, content }: TooltipProps) => {
    return (
        <TooltipProvider>
            <TooltipRoot delayDuration={300}>
                <TooltipTrigger asChild>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <p>{content}</p>
                </TooltipContent>
            </TooltipRoot>
        </TooltipProvider>
    );
}

export default Tooltip;