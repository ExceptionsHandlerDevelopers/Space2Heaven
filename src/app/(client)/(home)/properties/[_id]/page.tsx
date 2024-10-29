// "use client";
// import { useEffect, useState } from "react";
// import { DisplayCarousel, PropertyCaraousel } from "@/components";
// import axios from "axios";
// import { usePathname } from "next/navigation";
// import { properties } from "@/constants/sampleData";

// const PropertyById = () => {
//     const [propertyData, setPropertyData] = useState(properties[0]);
//     const [similarProperties, setSimilarProperties] = useState([]);
//     const pathname = usePathname();

//     useEffect(() => {
//         const fetchProperty = async () => {
//             try {
//                 const response = await axios.get(`/property/${pathname}`);
//                 setPropertyData(response.data);
//             } catch (error) {
//                 console.error("Failed to fetch property data:", error);
//             }
//         };

//         fetchProperty();

//         // Filter properties once to set similar properties
//         const similar = properties.filter((item) => item.propertyType === propertyData.propertyType);
//         setSimilarProperties(similar);
//     }, [pathname]);

//     return (
//         <section className="min-h-screen w-full flex flex-col items-center my-14 px-4">
//             {/* Main Property Carousel */}
//             <div className="w-full max-w-6xl mb-10">
//                 <DisplayCarousel images={propertyData.images} />
//             </div>

//             {/* Property Details */}
//             <div className="w-full max-w-6xl space-y-6 bg-white p-6 rounded-lg shadow-md">
//                 {/* Property Specs */}
//                 <h1 className="text-xl lg:text-3xl font-bold text-left w-full">Title</h1>
//                 <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
//                     <h2 className="md:text-lg font-semibold">Rooms: {propertyData.rooms.bedrooms}</h2>
//                     <h2 className="md:text-lg font-semibold">Baths: {propertyData.rooms.bathrooms}</h2>
//                     <h2 className="md:text-lg font-semibold">Dimensions: {propertyData.dimensions}</h2>
//                     <h2 className="md:text-lg font-semibold">Area: {propertyData.area} sq.ft</h2>
//                 </div>

//                 {/* Property Features */}
//                 <div className="text-gray-700">{propertyData.features.join(", ")}</div>

//                 {/* Property Info */}
//                 <div className="flex flex-wrap gap-4 items-center text-lg">
//                     <h2 className="font-semibold">Location: {propertyData.location}</h2>
//                     <span>Status: <strong>{propertyData.status}</strong></span>
//                     <h1 className="font-bold text-xl">Price: ${propertyData.price}</h1>
//                 </div>

//                 <hr className="my-4" />

//                 {/* Property Description */}
//                 <div>
//                     <h1 className="text-xl font-semibold">About</h1>
//                     <p className="text-gray-600 leading-relaxed">{propertyData.description}</p>
//                 </div>

//                 <button className="btn-class">
//                     Contact Us
//                 </button>
//             </div>

//             {/* Similar Properties Carousel */}
//             <hr className="my-8 w-full max-w-4xl" />
//             <div className="w-full max-w-6xl">
//                 <h1 className="text-2xl font-semibold mb-4">Similar Properties</h1>
//                 <PropertyCaraousel data={similarProperties} showMoreLink />
//             </div>
//         </section>
//     );
// };

// export default PropertyById;
