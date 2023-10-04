import { NextResponse } from "next/server";

export async function POST(req, res){
  
    const jsonBody = await req.json();

    try {
        const data = await fetch(process.env.BASE_URL+"CreateContact", jsonBody);
        return NextResponse.json({status: "success"})        
    } catch (error) {
       return NextResponse.json(error)
    }
}