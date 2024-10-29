"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AdminSignIn: React.FC = () => {
    const router = useRouter()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);
        router.push("/")
    };

    return (
        <div className="min-h-screen flex-center bg-gradient-to-tr from-burgundy via-[#7A00D4] to-sand-soft px-4">
            <div className="w-full max-w-md glassmorphism p-6 rounded-lg shadow-md text-white flex-center flex-col gap-4">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Admin Login
                </h2>
                <div className="w-[120px] p-2 h-[120px] glassmorphism2 rounded-full flex-center">
                    <Image src={"/icons/user.svg"}
                        alt="Admin"
                        width={150}
                        height={150}
                        className="w-full h-full object-cover text-gray-600"
                    />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-white w-full">
                    {/* Username Input */}
                    <div>
                        <label htmlFor="username" className="block font-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="input-class"
                            placeholder="Enter username"
                            required
                        />
                    </div>
                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block font-medium">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input-class"
                                placeholder="Enter password"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                    </div>
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="text-white btn-class w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminSignIn;
