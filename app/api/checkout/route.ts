import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      status: "disabled",
      message:
        "Checkout is not enabled yet. Razorpay will be integrated later.",
    },
    { status: 200 }
  );
}
