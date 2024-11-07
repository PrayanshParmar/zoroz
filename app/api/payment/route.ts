import { NextResponse } from "next/server";
import { mockPayment } from "@/lib/backend-query/query";

export async function POST() {
  try {
    const response = await mockPayment();

    if (response === "success") {
      return NextResponse.json({ message: "success" }, { status: 200 });
    } else return NextResponse.json({ message: "failure" }, { status: 402 });
  } catch (error: any) {
    console.log(error.info);
    return NextResponse.json({ error: error.info }, { status: error.status });
  }
}
