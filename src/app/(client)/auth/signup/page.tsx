import Link from "next/link"
import Image from "next/image"
import AuthLayout from "../layout"
import { FormTabs } from "@/components"

const SignUp = () => {

    return (
        <AuthLayout>
            <Link href="/">
                <Image src="/logo.svg"
                    alt="Space2Heaven"
                    width={50}
                    height={50}
                    className="max-sm:size-10 invert"
                />
            </Link>
            <FormTabs userType={"users"} pageType={"signup"} />
        </AuthLayout>
    )
}
export default SignUp