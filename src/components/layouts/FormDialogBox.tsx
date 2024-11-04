"use client"

import { useState } from "react";
import axios from "axios";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import Loader from "../loaders/Loader";

const FormDialogBox = () => {

    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        serviceType: "buy",
    });
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const [msg, setMsg] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            setLoading(true)
            setMsg("")
            const response = await axios.post("/api/", formData, {
                headers: {
                    "Content-Type": "application/json",
                }
            })
            setLoading(false)
            setMsg(response?.data?.msg)
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setMsg(error.response?.data?.error || "Unable to submit data. Something went wrong");
            } else {
                setMsg("An unexpected error occurred.");
            }
            console.error("Error submitting data:", error);
        } finally {
            setLoading(false)
        }
    };

    return (
        <Dialog>
            <DialogTrigger className="btn-class">Get in Touch</DialogTrigger>
            <DialogContent className="bg-sand-soft rounded-lg">
                <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                    <DialogDescription>
                        Don&apos;t worry, we won&apos;t share your details.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input-class"
                            placeholder="Enter your name"
                        />
                    </div>

                    {/* Contact Input */}
                    <div>
                        <label htmlFor="contact" className="block text-gray-700 mb-1">Contact</label>
                        <input
                            type="text"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            required
                            className="input-class"
                            placeholder="Enter your contact"
                        />
                    </div>

                    {/* Service Type Selection */}
                    <div>
                        <label htmlFor="serviceType" className="block text-gray-700 mb-1">Type of Service</label>
                        <select
                            id="serviceType"
                            name="serviceType"
                            value={formData.serviceType}
                            onChange={handleChange}
                            required
                            className="input-class"
                        >
                            <option value="buyProperty">Buy Property</option>
                            <option value="sellProperty">Sell Property</option>
                            <option value="interiorDesign">Interior Design</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        disabled={loading}
                        type="submit"
                        className="btn-class w-full"
                    >
                        {loading ? <Loader /> : "Submit"}
                    </button>
                    <p className="text-sm text-center">{msg}</p>
                </form>
            </DialogContent>
        </Dialog>

    )
}
export default FormDialogBox