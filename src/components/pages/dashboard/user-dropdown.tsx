import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, SquareUser } from "lucide-react";
import Link from "next/link";

const UserDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-full gap-2 justify-start px-2">
                    <Avatar className="w-7 h-7 block">
                        <AvatarImage src="https://avatars.githubusercontent.com/u/25807301?v=4" />
                        <AvatarFallback>VV</AvatarFallback>
                    </Avatar>
                    <p>Valmir Vasconcelos</p>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-[var(--radix-dropdown-menu-trigger-width)]">
                <Link passHref href="/dashboard/account">
                    <DropdownMenuItem className="gap-2">
                        <SquareUser size={16} />
                        Configurações de Conta
                    </DropdownMenuItem>
                </Link>

                <DropdownMenuItem className="gap-2 text-red-500">
                    <LogOut size={16} />
                    Sair
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu >
    );
}

export default UserDropdown;