"use client"
import cn from 'classnames'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HomeIcon, Calculator, Sofa, Info, MapPinHouse } from 'lucide-react'

const MobileNav = () => {

    const pathname = usePathname()

    const sidebarLinks = [
        {
            route: "/",
            label: "Home",
            logo: <HomeIcon size={20} />,
        },
        {
            route: "/properties",
            label: "Properties",
            logo: <MapPinHouse size={20} />,
        },
        {
            route: "/interior",
            label: "Interior",
            logo: <Sofa size={20} />,
        },
        {
            route: "/calculate-emi",
            label: "EMI Calculator",
            logo: <Calculator size={20} />,
        },
        {
            route: "/about",
            label: "About",
            logo: <Info size={20} />,
        },
    ]

    return (
        <section
            className="w-full flex-center max-sm:flex hidden">
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/mobile-menu.svg"
                        alt="Menu"
                        width={30}
                        height={30}
                        className="cursor-pointer sm:hidden invert"
                    />
                </SheetTrigger>
                <SheetContent
                    className="border-none px-0 pb-0 bg-home bg-[url(/images/pattern.png)]"
                >
                    <Link href="/" className="flex items-center gap-2 px-4 pb-4">
                        <Image src="/logo.svg"
                            alt="HN"
                            width={32}
                            height={32}
                            className="max-sm:size-10"
                        />
                        <h1 className="text-2xl font-bold text-sand-soft">Space2Heaven</h1>
                    </Link>

                    <div className="mobile-menu bg-sand-soft px-4">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 mt-4">
                                {sidebarLinks.map(({ route, logo, label }, index) => {
                                    const isActive = pathname === route;
                                    return (
                                        <SheetClose asChild key={index}>
                                            <Link
                                                href={route}
                                                className={cn("menu-link w-full", { "bg-home text-sand-soft": isActive })}
                                            >
                                                {logo}
                                                <p className="font-semibold">
                                                    {label}
                                                </p>
                                            </Link>
                                        </SheetClose>
                                    );
                                })}
                            </section>

                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    )
}
export default MobileNav