"use client"

import { useState } from "react"
import { authTabData } from "@/constants"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Input from "../Input"

type FormTabsProps = {
    userType: string
    type: string
}


const FormTabs: React.FC<FormTabsProps> = ({ userType, type }) => {
    const [formData, setFormData] = useState({ email: "", password: "" })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form Data Submitted:", formData)
    }

    return (
        <Tabs defaultValue={userType} className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                {authTabData.map(({ value, title }) => (
                    <TabsTrigger key={value} value={value}>
                        {title}
                    </TabsTrigger>
                ))}
            </TabsList>
            {authTabData.map(({ value, description, title }) => (
                <TabsContent key={value} value={value}>
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle>{title}</CardTitle>
                            <CardDescription>{description}</CardDescription>
                        </CardHeader>
                        <form onSubmit={handleSubmit}>
                            <CardContent className="space-y-2">
                                <Input
                                    title="Email ID"
                                    name="email"
                                    value={formData.email}
                                    placeholder="Enter your Email ID"
                                    type="email"
                                    onChange={handleInputChange}
                                />
                                <Input
                                    title="Password"
                                    name="password"
                                    value={formData.password}
                                    placeholder="Enter your password"
                                    type="password"
                                    onChange={handleInputChange}
                                />
                            </CardContent>
                            <CardFooter>
                                <button type="submit" className="btn-class w-full">
                                    {type === "signin" ? "Sign In" : "Sign Up"}
                                </button>
                            </CardFooter>
                        </form>
                    </Card>
                </TabsContent>
            ))}
        </Tabs>
    )
}

export default FormTabs
