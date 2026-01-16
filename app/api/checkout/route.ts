import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "gbp",
            product_data: {
              name: "Baby Growth Premium",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/baby-growth?premium=success",
      cancel_url: "http://localhost:3000/baby-growth?premium=cancel",
    });

    return Response.redirect(session.url!, 303);
  } catch (err) {
    console.error("STRIPE CHECKOUT ERROR 👉", err);
    return new Response("Stripe checkout failed", { status: 500 });
  }
}
