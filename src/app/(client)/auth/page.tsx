import { FormTabs } from "@/components"

const AuthPage = () => {
    
    return (
        <section className="min-h-screen w-full flex-center">
            <div className="">
                <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                <FormTabs userType={"user"} type={"signup"}/>
            </div>
        </section>
    )
}
export default AuthPage