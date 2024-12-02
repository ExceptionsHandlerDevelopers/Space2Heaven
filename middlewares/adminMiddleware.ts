import { NextRequest, NextResponse } from "next/server";

export const adminMiddleware = (req: NextRequest) => {

    const token = req.cookies.get("__session");
    
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
        )
    }
    
    return null
}

export const config = {
matchers:"/api/admin/*"
}

