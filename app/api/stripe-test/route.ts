import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function GET() {
  const balance = await stripe.balance.retrieve();
  return Response.json(balance);
}
