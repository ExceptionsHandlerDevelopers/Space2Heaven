"use client"
import cn from 'classnames'
import Link from "next/link"
import Image from "next/image"
import { sidebarLinks } from "@/constants"
import { usePathname } from "next/navigation"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const MobileNav = () => {

    const pathname = usePathname()

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
                    className="border-none bg-sand-soft"
                >
                    <Link href="/" className="flex items-center gap-2">
                        <Image src="/logo.svg"
                            alt="HN"
                            width={32}
                            height={32}
                            className="max-sm:size-10"
                        />
                    </Link>

                    <div className="mobile-menu">
                        <SheetClose asChild>
                            <section className="flex h-full flex-col gap-6 pt-16">
                                {sidebarLinks.map(({ route, imgUrl, label }, index) => {
                                    const isActive = pathname === route;
                                    return (
                                        <SheetClose asChild key={index}>
                                            <Link
                                                href={route}
                                                className={cn("menu-link w-full", { "bg-blue-1": isActive })}
                                            >
                                                <Image src={imgUrl}
                                                    alt={label}
                                                    width={20}
                                                    height={20}
                                                />
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