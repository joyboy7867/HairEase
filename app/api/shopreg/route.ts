import { db } from "@/lib/db";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');
const saltRounds = 10;
export async function POST(req: Request) {
  try {
    const body = await req.json(); // Read the request body as JSON

    let hashpassword:any
    if (!body) {
      throw new Error("Request body is empty");
    }

    const { name, owner, email, password, number, img, open, address } = body;
    console.log(name, owner, email, password, number, img, open, address);
    hashpassword=await bcrypt.hash(password, saltRounds)
      const server = await db.shopreg.create({
        data: {
          shopname: name,
          owner: owner,
          email: email,
          password: hashpassword,
          phonenumber: number,
          address: address,
          image: img,
          workingdays: open,
        },
      });

    

    return NextResponse.json({
      data: "Register successfull ",
      message: "true",
    });
  } catch (error) {
    console.log("Api error", error);
    return NextResponse.json({
      data: "Failed to Register or Already register with this email",
      message: "false",
    });
  }
}
