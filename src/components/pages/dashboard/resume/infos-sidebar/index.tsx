import Link from "next/link";
import Logo from "@/assets/logo.svg";
import AIGenerationDropdown from "./ai-generation-dropdown";
import { Separator } from "@/components/ui/separator";
import BasicInfoSection from "./sections/basic-info";
import SummarySection from "./sections/summary";

const InfosSidebar = () => {
    return (
        <aside className="w-full h-full p-6 overflow-y-auto">
            <div className="w-full flex items-center justify-between">
                <Link href="/dashboard/resumes">
                    <Logo className="w-full ma-w-[80px]" />
                </Link>

                <AIGenerationDropdown />
            </div>
            <Separator className="my-5" />

            <BasicInfoSection />
            <Separator className="my-5" />
            <SummarySection />
        </aside>
    );
}

export default InfosSidebar;