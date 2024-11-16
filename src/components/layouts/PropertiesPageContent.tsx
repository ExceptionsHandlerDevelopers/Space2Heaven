// PropertiesPageContent.tsx
"use client";

import { DisplayProperties, Loader, LoaderLayout, PropertyById } from "@/components";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Property } from "@/types";
import axios from "axios";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { Skeleton } from "@/components/ui/skeleton";

const PropertiesPageContent = () => {
    const filterTypes = ["All", "Villa", "House", "Flat"] as const;

    const [data, setData] = useState<Property[]>([]);
    const [filteredData, setFilteredData] = useState<Property[]>([]);
    const [displayedData, setDisplayedData] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedFilter, setSelectedFilter] = useState<(typeof filterTypes)[number]>("All");
    const [page, setPage] = useState(1);
    const itemsPerPage = 6;

    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get<Property[]>("/api/");
                if (response && Array.isArray(response.data)) {
                    setData(response.data);
                    setFilteredData(response.data);
                } else {
                    throw new Error("Unexpected response structure");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setError("Failed to load properties. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const filterProperties = () => {
            const filtered = selectedFilter === "All" ? data : data.filter((item) => item.propertyType === selectedFilter);
            setFilteredData(filtered);
            setDisplayedData(filtered.slice(0, itemsPerPage));
            setPage(1);
        };
        filterProperties();
    }, [selectedFilter, data]);

    const handleFilterChange = (value: (typeof filterTypes)[number]) => setSelectedFilter(value);

    const loadMoreData = () => {
        setPage((prevPage) => prevPage + 1);
        const newPageData = filteredData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
        setDisplayedData((prevData) => [...prevData, ...newPageData]);
    };

    if (loading) return <>
        {id ? <LoaderLayout loaderType="single" />
            :
            <section className="min-h-screen w-full flex flex-col md:flex-row my-20 px-4 md:px-10 gap-4">
                <aside className="aside-styles">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </aside>
                <LoaderLayout loaderType="all" />
            </section>
        }
    </>
    if (error) return <p className="text-center text-red-600">{error}</p>;

    if (id) {
        return (
            <Suspense fallback={<LoaderLayout loaderType="single" />}>
                <PropertyById id={id} />
            </Suspense>
        );
    }

    return (
        <section className="min-h-screen w-full flex flex-col md:flex-row my-20 px-4 md:px-10">
            <aside className="aside-styles">
                <h3 className="text-xl font-semibold">Property Type Filter</h3>
                <RadioGroup value={selectedFilter} onValueChange={handleFilterChange}>
                    {filterTypes.map((type, index) => (
                        <div className="flex items-center space-x-2" key={type}>
                            <RadioGroupItem value={type} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`}>{type}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </aside>

            <main className="flex flex-col w-full md:w-3/4 lg:w-4/5 p-4 md:p-6 gap-6">
                <header className="mb-4">
                    <h1 className="text-2xl font-semibold">Discover Your Dream Property</h1>
                    <p className="text-gray-600">Browse through our exclusive listings to find your next home.</p>
                </header>
                <InfiniteScroll
                    dataLength={displayedData.length}
                    next={loadMoreData}
                    hasMore={displayedData.length < filteredData.length}
                    loader={<LoaderLayout />}
                >
                    <DisplayProperties data={displayedData} />
                </InfiniteScroll>
            </main>
        </section>
    );
};

export default PropertiesPageContent;
