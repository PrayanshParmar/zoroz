import { NextResponse } from "next/server";
import { getCategoryList } from "@/lib/backend-query/query";

export async function GET() {
  try {
    const response = await getCategoryList();
    console.log(response);
    return NextResponse.json(response, { status: response.status });
  } catch (error: any) {
    console.log(error.info);
    return NextResponse.json({ error: error.info }, { status: error.status });
  }
}
