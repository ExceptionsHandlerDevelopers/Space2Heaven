import Link from "next/link";
import { menuBarOptions } from "@/constants";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";


const MenuBar = () => {
    return (
        <Menubar className="max-sm:hidden bg-transparent border-none">
            {/* Admin Actions Link */}
            <MenubarMenu>
                <MenubarTrigger>Admin Actions</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href="/">Add Property</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href="/">Remove Property</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>

            {/* Dynamic Menus */}
            {menuBarOptions.map(({ title, options }, index) => (
                <MenubarMenu key={index}>
                    <MenubarTrigger>{title}</MenubarTrigger>
                    <MenubarContent>
                        {options.map(({ option, link }, subindex) => (
                            <MenubarItem key={subindex}>
                                <Link href={link}>{option}</Link>
                            </MenubarItem>
                        ))}
                    </MenubarContent>
                </MenubarMenu>
            ))}
        </Menubar>
    );
};

export default MenuBar;
