import PropertyModel from "@/models/propertyModel";
import { NextResponse } from "next/server";
import { Request } from "next/dist/compiled/@edge-runtime/primitives";

export const GET = async (req: Request) => {
    // Extract `id` from the query parameters
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
        return NextResponse.json(
            { error: "Property ID is required." },
            {
                status: 400,
                headers: { "Content-Type": "application/json" },
            }
        );
    }

    try {
        const data = await PropertyModel.findById(id);

        if (!data) {
            return NextResponse.json(
                { error: "Property not found." },
                {
                    status: 404,
                    headers: { "Content-Type": "application/json" },
                }
            );
        }

        return NextResponse.json(
            { data },
            {
                status: 200,
                headers: { "Content-Type": "application/json" },
            }
        );
    } catch (error) {
        console.error("Error fetching property data:", error);
        return NextResponse.json(
            { error: "An error occurred while fetching the property data." },
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
};
