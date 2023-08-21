import { NextResponse } from "next/server";
import clientPromise from "../../../../libs/mongodb";


export async function GET(request, { params }){
    const slug  = params.slug;
    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("posts").find({categorySlug: slug}).sort({"createdAt": -1}).toArray();
    return NextResponse.json(posts, {status: 200});
}