"use client";
import axios from "axios";
import { Property } from "@/types";
import { useEffect, useState } from "react";
import { DisplayCarousel, FormDialogBox, LoaderLayout, PropertyCaraousel } from "@/components";

const PropertyById = ({ id }: { id: string }) => {
    const [propertyData, setPropertyData] = useState<Property | null>(null);
    const [similarProperties, setSimilarProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchProperty = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/properties?id=${id}`);
                const { matchingData, similarData } = response.data;

                // Set the main property data
                setPropertyData(matchingData);
                setSimilarProperties(similarData);
            } catch (error) {
                console.error("Failed to fetch property data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProperty();
    }, [id]);

    if (!propertyData) return <div className="flex-center text-2xl font-bold">Property not found.</div>;

    const {
        images,
        title = "Title",
        rooms = { bedrooms: 0, bathrooms: 0 },
        dimensions = "N/A",
        area = "N/A",
        features = [],
        location = "Not specified",
        status = "Unknown",
        description = "No description available.",
        price = "N/A"
    } = propertyData;
    
    return (
        <section className="min-h-screen w-full flex-center flex-col my-20 px-4">
            {loading ? (
                <LoaderLayout loaderType="single" />
            ) : (
                <>
                    <div className="w-full max-w-6xl mb-10">
                        {images && <DisplayCarousel images={images} />}
                    </div>
                    <div className="w-full max-w-6xl space-y-6 bg-white p-6 rounded-lg shadow-md">
                        <h1 className="text-xl lg:text-3xl font-bold text-left w-full">{title || "Title"}</h1>
                        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                            <h2 className="md:text-lg font-semibold">Rooms: {rooms?.bedrooms}</h2>
                            <h2 className="md:text-lg font-semibold">Baths: {rooms?.bathrooms}</h2>
                            <h2 className="md:text-lg font-semibold">Dimensions: {dimensions || "N/A"}</h2>
                            <h2 className="md:text-lg font-semibold">Area: {area || "N/A"} sq.ft</h2>
                        </div>

                        {/* Property Features */}
                        <div className="text-gray-700">{features?.join(", ") || "No features listed."}</div>

                        {/* Property Info */}
                        <div className="flex flex-wrap gap-4 items-center text-lg">
                            <h2 className="font-semibold">Location: {location || "Not specified"}</h2>
                            <span>Status: <strong>{status || "Unknown"}</strong></span>
                            <h1 className="font-bold text-xl">Price: ${price || "N/A"}</h1>
                        </div>

                        <hr className="my-4" />

                        {/* Property Description */}
                        <div>
                            <h1 className="text-xl font-semibold">About</h1>
                            <p className="text-gray-600 leading-relaxed">{description || "No description available."}</p>
                        </div>

                        {/* Form Dialog Box component */}
                        <div className="mt-8 w-full flex justify-center">
                            <FormDialogBox />
                        </div>
                    </div>
                </>
            )}

            {/* Similar Properties Carousel */}
            <hr className="my-8 w-full max-w-4xl" />
            <div className="w-full max-w-6xl">
                <h1 className="text-2xl font-semibold mb-4">Similar Properties</h1>
                <PropertyCaraousel data={similarProperties} loading={loading} />
            </div>
        </section>
    );
};

export default PropertyById;
