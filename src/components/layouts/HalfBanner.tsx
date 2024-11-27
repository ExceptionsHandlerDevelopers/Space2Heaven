"use client"
import React, { useState } from "react";
import { SearchIcon } from "lucide-react";
import DialogBox from "./DialogBox";
import { FilterProps } from "@/types";

const HalfBanner = ({setSearch, setFilters, filters}:{setSearch:(e:string) => void}&FilterProps) => {

    const [key, setKey] = useState<string>("")
    const handleSearch = (e:any) => {
        e.preventDefault()
        setSearch(key)
    }

    return (
        <section className="relative h-[50vh] w-full bg-cover bg-center" style={{ backgroundImage: `url('/images/propertyBanner.webp')` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40">

            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-sand-soft">
                {/* Heading */}
                <div className="w-full mb-6">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center">
                    Find Your Perfect Space
                </h1>
                <p className="text-gray-200 text-center">Browse through our exclusive listings to find your next home.</p>
                </div>

                {/* Search Bar */}
                <div className="w-full max-w-lg">
                    <form className="flex" onSubmit={handleSearch}>
                        <input
                            type="text"
                            placeholder="Search by title..."
                            className="flex-grow px-4 py-2 rounded-l-lg text-black focus:outline-none"
                            onChange={(e) => setKey(e.target.value)}
                        />
                        <DialogBox type="filter" filters={filters} setFilters={setFilters} />
                        <button
                            type="submit"
                            className="bg-grey-1 hover:bg-home text-white px-6 py-2 rounded-r-lg duration-500"
                        >
                            <SearchIcon />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default HalfBanner;
