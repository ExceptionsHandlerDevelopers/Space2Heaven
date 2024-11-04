import { ReactNode } from "react";


const AuthLayout = ({ children }: { children: ReactNode }) => {
    
    return (
        <section className="min-h-screen w-full flex-center flex-col">
                {children}
        </section>
    )
}
export default AuthLayout