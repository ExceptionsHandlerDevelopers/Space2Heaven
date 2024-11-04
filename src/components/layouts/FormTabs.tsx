"use client";

import { useState, useEffect } from "react";
import { authTabData } from "@/constants";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import Input from "../Input";
import Link from "next/link";

type FormTabsProps = {
    userType: string;
    pageType: string;
};

const FormTabs: React.FC<FormTabsProps> = ({ userType, pageType }) => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [activeTab, setActiveTab] = useState(userType);

    useEffect(() => {
        setActiveTab(userType);
    }, [userType]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };
    console.log("Type: ", pageType);

    return (
        <>
            <h1 className="text-2xl font-bold text-center text-burgundy uppercase">
                {pageType === "signup" ? "Sign Up" : "Sign In"}
            </h1>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-[400px]">
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
                                        {pageType === "signup" ? "Sign Up" : "Sign In"}
                                    </button>
                                </CardFooter>
                            </form>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
            <p className="text-sm flex-center gap-2">
                {pageType === "signup" ? "Already have account?" : "Don't have account?"}
                <Link href={"/auth/signup"}>{pageType === "signup" ? "Sign In" : "Sign Up"}</Link>
            </p>
        </>
    );
};

export default FormTabs;
