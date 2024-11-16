import { connectDB } from "@/lib/dbConnection";
import PropertyModel from "@/models/propertyModel";
import { NextResponse } from "next/server";
import { addpropertyImages } from "@/lib/cloudinary";

// Function to process form data
const processFormData = async (req: Request): Promise<any> => {
    const formData = await req.formData();
    const propertyData: Record<string, any> = {};

    // Loop through all entries in the form data
    for (const [key, value] of formData.entries()) {
        if (key === "images" && value instanceof File) {
            // Process image files
            const buffer = await value.arrayBuffer();
            const imgUrl = await addpropertyImages(Buffer.from(buffer));
            if (imgUrl) {
                propertyData.images = propertyData.images || [];
                propertyData.images.push(imgUrl);
            }
        } else if (key.includes("[")) {
            // Handle nested keys like "rooms[bedrooms]"
            const match = key.match(/^([^\[]+)\[([^\]]+)\]$/); // Match "rooms[bedrooms]"
            if (match) {
                const parentKey = match[1]; // e.g., "rooms"
                const childKey = match[2];  // e.g., "bedrooms"
                propertyData[parentKey] = propertyData[parentKey] || {};
                propertyData[parentKey][childKey] = value;
            }
        } else {
            // Handle all other form data fields
            propertyData[key] = value;
        }
    }
    console.log("Processed Property Data: ", propertyData); // Log processed data
    return propertyData;
};


export const POST = async (req: Request) => {
    try {
        // Process the form data
        const inputData = await processFormData(req);
        console.log("Input Data: ", inputData);

        // Connect to the database
        await connectDB();

        // Save property data to MongoDB
        const addProperty = new PropertyModel(inputData);
        await addProperty.save();

        return NextResponse.json(
            { msg: "Property added successfully!" },
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                }
            }
        );
    } catch (error) {
        console.error("Error occurred while adding property data:", error);
        return NextResponse.json(
            { error: "An error occurred while adding the property data." },
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
