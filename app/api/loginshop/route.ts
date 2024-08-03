import { db } from "@/lib/db";
var jwt=require("jsonwebtoken")
const bcrypt = require('bcrypt');
const saltRounds = 10;
import { NextResponse } from "next/server";
export async function POST(req: Request) {
    var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
    try {
        const { email, password } = await req.json();

        const user = await db.shopreg.findUnique({
            where: {
                email: email,
            },
        });

        if (!user) {
            return NextResponse.json({ data: "false" });
        }

        const isPasswordValid = await new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, (err:any, result:any) => {
                if (err) reject(err);
                resolve(result);
            });
        });

        if (isPasswordValid) {
            console.log('Password match');
            return NextResponse.json({ data: "true", token: token });
        } else {
            console.log('Password mismatch');
            return NextResponse.json({ data: "false" });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ data: "false" });
    }
}