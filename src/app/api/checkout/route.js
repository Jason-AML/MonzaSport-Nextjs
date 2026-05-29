import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getCollectionById } from "@/services/collectionClient";
const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export async function POST(request) {
  const { id } = await request.json();
  const vehicle = await getCollectionById(id);
  const session = await stripe.checkout.sessions.create({
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            
            name: vehicle.nombre_vehiculo,
          },
          unit_amount: vehicle.precio * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
  });

  return NextResponse.json(session);
}
