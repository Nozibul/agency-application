import { NextResponse } from "next/server";

export async function POST(req, res){
  
    const jsonBody = await req.json();

    try {
        const resData = await fetch(process.env.BASE_URL+"CreateContact", jsonBody);
        return NextResponse.json({status: "success", data: resData });
                
    } catch (error) {
        console.error("Error:", error);

        return NextResponse.error({
          status: 500,
          statusText: "Internal Server Error",
        });
    }
}