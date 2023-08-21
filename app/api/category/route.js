import { NextResponse } from "next/server";
import clientPromise from "../../../libs/mongodb";


export async function GET(request){
    const client = await clientPromise;
    const db = client.db();
    const categories = await db.collection("posts").aggregate(
        [
            { "$group": { "_id": {category: "$category", "categorySlug": "$categorySlug" }}},
        ]    
    ).toArray();
    return NextResponse.json(categories, {status: 200});
}