import { NextResponse } from "next/server";
import clientPromise from "../../../../libs/mongodb";


export async function GET(request, { params }){
    const slug  = params.slug;
    const client = await clientPromise;
    const db = client.db();
    const post = await db.collection("posts").find({slug: slug}).sort({"createdAt": -1}).toArray();
    return NextResponse.json(post, {status: 200});
}