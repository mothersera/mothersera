import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "disabled",
    message: "Stripe test endpoint disabled. Razorpay will be used later.",
  });
}
