import Stripe from "stripe";
import { headers } from "next/headers";
import { prisma } from "@/lib/prisma";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();

  // Next.js App Router headers are async
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return new Response("Missing Stripe signature", { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch {
    return new Response("Webhook signature verification failed", {
      status: 400,
    });
  }

  // ✅ PAYMENT SUCCESS
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_email;

    if (email) {
      await prisma.user.upsert({
        where: { email },
        update: { premium: true },
        create: {
          email,
          premium: true,
        },
      });

      console.log("✅ PREMIUM UNLOCKED FOR:", email);
    }
  }

  return new Response("OK", { status: 200 });
}
