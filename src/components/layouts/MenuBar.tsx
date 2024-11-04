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
            {/* Admin Actions Menu */}
            {/* <MenubarMenu>
                <MenubarTrigger aria-label="Admin Actions">Admin Actions</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>
                        <Link href="/">Add Property</Link>
                    </MenubarItem>
                    <MenubarItem>
                        <Link href="/">Remove Property</Link>
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu> */}

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
