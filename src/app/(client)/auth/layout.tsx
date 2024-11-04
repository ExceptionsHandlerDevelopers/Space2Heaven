import { FormTabs } from "@/components"
import Image from "next/image"
import Link from "next/link"

const AuthLayout = ({ type }: { type: "signup" | "signin" }) => {
    console.log("Type :", type);
    
    return (
        <section className="min-h-screen w-full flex-center">
            <div className="flex-center flex-col gap-2">
                <Link href="/">
                    <Image src="/logo.svg"
                        alt="Space2Heaven"
                        width={50}
                        height={50}
                        className="max-sm:size-10 invert"
                    />
                </Link>
                <FormTabs userType={"users"} pageType={type} />
            </div>
        </section>
    )
}
export default AuthLayout