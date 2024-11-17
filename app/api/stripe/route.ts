import prisma from "@/app/lib/db";
import { Cart } from "@/app/lib/interfaces";
import { redis } from "@/app/lib/redis";
import { stripe } from "@/app/lib/stripe";
import { headers } from "next/headers";

export async function POST(req: Request) {
  const body = await req.text();

  const signature = headers().get("Stripe-Signature") as string;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_SECRET_WEBHOOK as string
    );
  } catch (error: unknown) {
    console.log("error", error);
    return new Response("Webhook Error", { status: 400 });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;

      console.log(session.metadata);
      const cart = (await redis.get(`cart-${session.metadata?.userId}`)) as
        | Cart
        | null
        | undefined;

      console.log(cart);

      const orderProducts = cart?.items.map((i) => {
        return { product: { connect: { id: i.id } } };
      });

      await prisma.order.update({
        where: {
          id: session.metadata?.orderId as string,
        },
        data: {
          amount: session.amount_total as number,
          status: session.status as string,
          userId: session.metadata?.userId,
          products: {
            create: orderProducts,
          },
        },
      });

      await redis.del(`cart-${session.metadata?.userId}`);
      break;
    }
    default: {
      console.log("unhandled event");
    }
  }

  return new Response(null, { status: 200 });
}