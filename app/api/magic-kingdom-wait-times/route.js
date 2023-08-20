import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
        const respone = await axios.get(
        "https://queue-times.com/en-US/parks/6/queue_times.json"
        );
        const data = respone.data;
        return NextResponse.json(data, { status: 200 });
  } catch (error) {
        return NextResponse.json(error, { status: 500 });
  }
}
