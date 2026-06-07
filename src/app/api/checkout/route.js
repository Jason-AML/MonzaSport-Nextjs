import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getCollectionById } from "@/services/collectionClient";
import { getUser } from "@/services/auth/auth.server";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
export async function POST(request) {
  try {
    const user = await getUser(); 

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { id } = await request.json();
    const vehicle = await getCollectionById(id);

    const baseUrl =
      process.env.NODE_ENV === "production"
        ? `https://${process.env.VERCEL_URL}` 
        : process.env.NEXT_PUBLIC_BASE_URL;

    const session = await stripe.checkout.sessions.create({
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      payment_method_types: ["card"],
      metadata: {
        vehicleId: vehicle.id,
        userId: user.id,
      },
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
  } catch (error) {
    console.error("Error creating Stripe session:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
