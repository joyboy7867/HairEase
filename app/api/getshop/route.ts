import { db } from "@/lib/db";
import { NextResponse } from "next/server";


export async function GET(req: Request) {
    try {
      const shops = await db.shopreg.findMany({
        where:{
            shopname:"Amaan Shaikh"
        }
      });
      
      return NextResponse.json(shops);
    } catch (error) {
      return NextResponse.json({
        message: "An error occurred while fetching shop data",
        details: error
      });
    }
  }