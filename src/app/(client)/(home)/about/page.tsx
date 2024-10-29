"use client";

import Image from "next/image";

const About = () => {
    return (
        <section className="min-h-screen w-full flex flex-col items-center my-20 px-6 md:px-10 lg:px-20">
            {/* Header */}
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">About Home2Nest</h1>
                <p className="text-gray-600 mt-4 md:text-lg lg:text-xl">
                    Your trusted partner in finding your dream property.
                </p>
            </header>

            {/* Company Overview */}
            <section className="w-full max-w-5xl mb-16">
                <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Who We Are</h2>
                <p className="text-gray-700 leading-relaxed">
                    Home2Nest is dedicated to simplifying the home-buying and selling process. We offer a curated
                    selection of homes and provide the tools and support you need to make informed decisions.
                    With a team of experts in real estate, technology, and customer service, we&apos;re here to
                    guide you through every step.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="w-full max-w-5xl mb-16 flex flex-col gap-10 md:flex-row">
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Our Mission</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To provide a seamless and stress-free real estate experience for buyers and sellers,
                        leveraging technology and personalized service to bring value to every transaction.
                    </p>
                </div>
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 md:text-3xl">Our Vision</h2>
                    <p className="text-gray-700 leading-relaxed">
                        To be the go-to platform for property seekers and owners, known for transparency,
                        reliability, and innovation in the real estate industry.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="w-full max-w-5xl mb-16">
                <h2 className="text-2xl font-semibold mb-6 md:text-3xl">Meet Our Team</h2>
                <div className="flex flex-wrap gap-6 justify-center">
                    {["Alice", "Bob", "Catherine", "Daniel"].map((name, index) => (
                        <div
                            key={index}
                            className="w-40 text-center flex flex-col items-center gap-3 p-4 border border-gray-200 shadow-lg rounded-lg hover:shadow-md"
                        >
                            <Image
                                src={`/images/team/${name.toLowerCase()}.jpg`} // Replace with actual images
                                alt={name}
                                width={80}
                                height={80}
                                className="rounded-full object-cover"
                            />
                            <h3 className="text-lg font-semibold">{name}</h3>
                            <p className="text-gray-500 text-sm">Position</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Information */}
            <section className="w-full max-w-5xl bg-gray-100 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-center md:text-3xl">Contact Us</h2>
                <p className="text-gray-600 text-center mb-6">
                    Reach out to us for inquiries, support, or collaboration opportunities.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                        <Image src="/icons/phone.svg" alt="phone" width={24} height={24} />
                        <div>
                            <h3 className="text-lg font-semibold">Phone</h3>
                            <p className="text-gray-500">+1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/icons/email.svg" alt="email" width={24} height={24} />
                        <div>
                            <h3 className="text-lg font-semibold">Email</h3>
                            <p className="text-gray-500">contact@homenest.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/icons/location.svg" alt="location" width={24} height={24} />
                        <div>
                            <h3 className="text-lg font-semibold">Address</h3>
                            <p className="text-gray-500">123 Real Estate Blvd, Suite 100</p>
                            <p className="text-gray-500">Cityville, Country 56789</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/icons/clock.svg" alt="clock" width={24} height={24} />
                        <div>
                            <h3 className="text-lg font-semibold">Working Hours</h3>
                            <p className="text-gray-500">Mon - Fri: 9 AM - 6 PM</p>
                            <p className="text-gray-500">Sat: 10 AM - 4 PM</p>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default About;
