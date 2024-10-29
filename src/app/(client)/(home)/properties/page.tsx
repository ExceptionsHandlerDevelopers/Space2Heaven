"use client";

import { DisplayProperties, Loader } from "@/components";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Property } from "@/types";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";

const Properties = () => {
    const filterTypes = ["All", "Villa", "House", "Flat"] as const;
    const [data, setData] = useState<Property[]>([]);
    const [filteredData, setFilteredData] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedFilter, setSelectedFilter] = useState<(typeof filterTypes)[number]>("All");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Property[]>("/api");
                setData(response?.data);
                setFilteredData(response?.data); // Initialize with all data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filterProperties = () => {
            if (selectedFilter === "All") {
                setFilteredData(data);
            } else {
                const filtered = data.filter((item) => item.propertyType === selectedFilter);
                setFilteredData(filtered);
            }
        };
        filterProperties();
    }, [selectedFilter, data]);

    const handleFilterChange = (value: (typeof filterTypes)[number]) => setSelectedFilter(value);

    if (loading) return <Loader />;

    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row my-20 px-4 md:px-10">
            {/* Sidebar with Filter Options */}
            <aside className="filter-sidebar flex flex-col gap-6 md:gap-8 w-full md:w-1/4 lg:w-1/5 px-4 py-6 md:py-10 bg-white shadow-md rounded-lg">
                <h3 className="text-xl font-semibold">Property Type Filter</h3>
                <RadioGroup defaultValue={selectedFilter} onValueChange={handleFilterChange}>
                    {filterTypes.map((type, index) => (
                        <div className="flex items-center space-x-2" key={type}>
                            <RadioGroupItem value={type} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`}>{type}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </aside>

            {/* Property List Section */}
            <main className="property-list flex flex-col w-full md:w-3/4 lg:w-4/5 p-4 md:p-6 gap-6">
                <header className="mb-4">
                    <h1 className="text-2xl font-semibold">Discover Your Dream Property</h1>
                    <p className="text-gray-600">Browse through our exclusive listings to find your next home.</p>
                </header>
                <DisplayProperties data={filteredData} loading={loading} />
            </main>
        </section>
    );
};

export default Properties;
