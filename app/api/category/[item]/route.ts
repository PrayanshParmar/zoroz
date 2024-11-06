import { NextResponse } from "next/server";
import { getProductByCategory } from "@/lib/backend-query/query";

export async function GET(
  request: Request,
  { params }: { params: { item: string } }
) {
  try {
    const item = params.item;
    console.log("item", item);
    const response = await getProductByCategory(item);
    console.log(response);
    return NextResponse.json(response, { status: response.status });
  } catch (error: any) {
    console.log(error.info);
    return NextResponse.json({ error: error.info }, { status: error.status });
  }
}
