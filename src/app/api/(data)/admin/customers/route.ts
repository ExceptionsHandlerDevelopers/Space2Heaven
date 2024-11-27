import { connectDB } from "@/lib/dbConnection";
import CustomerModel from "@/models/customerModel";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    console.log(req);
    
    try {
        const token = req.cookies.get("admin_cookie_token")?.value;
        console.log("Token : ", token);
        
        if (!token) {
            return NextResponse.json(
                { error: "Session timeout!. Please sign in." },
                {
                    status: 401,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*", 
                    },
                }
            );
        }

        await connectDB()

        const getCustomers = await CustomerModel.find().sort({ createdAt: -1 })

        if (!getCustomers) return NextResponse.json(
            { msg: "Data not found!" },
            {
                status: 404,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );


        return NextResponse.json(
            { data: getCustomers },
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                },
            }
        );
    } catch (error) {
        console.error("Error fetching cookie:", error);

        return NextResponse.json(
            { error: "Failed to retrieve customers data." },
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
    }
};
