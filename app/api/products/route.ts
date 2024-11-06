import { NextResponse } from "next/server";
import { getAllProducts } from "@/lib/backend-query/query";

export async function GET() {
  try {
    const response = await getAllProducts();

    console.log(response);
    return NextResponse.json(response, { status: response.status });
  } catch (error: any) {
    console.log(error.info);
    return NextResponse.json({ error: error.info }, { status: error.status });
  }
}
