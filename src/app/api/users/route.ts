import { NextResponse } from "next/server";
import connectMongo from "@/libs/db/config";
import User from "@/models/User";
import { Document } from "mongoose";
import { TGetRoute, TUser } from "@/types/type";

export async function GET(): Promise<TGetRoute> {
    try {
        await connectMongo();
        const users = await User.find();
        return NextResponse.json({ data: users });
    } catch (error) {
        return NextResponse.json({ error });
    }
}
