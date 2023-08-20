import { NextResponse } from "next/server";
import clientPromise from "../../../libs/mongodb";


export async function GET(){
    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("posts").find({}).sort({"createdAt": -1}).toArray();
    return NextResponse.json(posts, {status: 200});
}