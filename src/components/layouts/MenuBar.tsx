"use client"
import Link from "next/link";
import { menuBarOptions } from "@/constants";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useToast } from "@/hooks/use-toast";
import { LayoutDashboard, LogOut, UserRoundCog } from "lucide-react";
import { Admin } from "@/types";
import { useRouter } from "next/navigation";

const MenuBar = () => {

    const { toast } = useToast()
    const [currentAdmin, setCurrentAdmin] = useState<Admin | null>(null);
    const router=useRouter()

    useEffect(() => {
        const adminDetails = localStorage.getItem("adminDetails");
        setCurrentAdmin(adminDetails ? JSON.parse(adminDetails) : null);
    }, []);

    const adminLogout = async () => {
        try {
            await axios.post("/api/auth/admin/signout");
            localStorage.removeItem("adminDetails")
            setCurrentAdmin(null);
            toast({
                description: "Sign out successfull!"
            })
            router.push("/")
        } catch (error) {
            toast({
                description: "Sign out failed!"
            })
            console.error("Logout error:", error);
        }
    };

    return (
        <Menubar className="max-sm:hidden bg-transparent border-none">
            {/* Admin Actions Menu */}
            {currentAdmin &&
                <MenubarMenu>
                    <MenubarTrigger aria-label="Admin Actions">
                        <div className="flex-center gap-2">
                            <UserRoundCog size={20} />
                            <h1>{currentAdmin?.name.split(" ")[1]}</h1>
                        </div>
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link href="/admin/dashboard"
                                className="flex-center gap-2">
                                <LayoutDashboard size={20} />
                                <h1>Dashboard</h1>
                            </Link>
                        </MenubarItem>
                        <MenubarItem>
                            <button onClick={adminLogout}
                                className="flex-center gap-2 font-semibold">
                                <LogOut size={20} />
                                <h1>Sign Out</h1>
                            </button>
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            }

            <MenubarMenu>
                <MenubarContent>
                    <MenubarItem>
                        <Link href="/about">About</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            {/* Dynamic Menu Items */}
            {menuBarOptions.map(({ title, options }, index) => (
                <MenubarMenu key={index}>
                    <MenubarTrigger aria-label={title}>{title}</MenubarTrigger>
                    <MenubarContent>
                        {options.map(({ option, link }, subIndex) => (
                            <MenubarItem key={subIndex}>
                                <Link href={link}>{option}</Link>
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            ))}

            {/* About Link as a Separate Menu */}
        </Menubar>
    );
};

export default MenuBar;
