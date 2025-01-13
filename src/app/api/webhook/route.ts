import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("signature");

    // If there's no signature, return 400
    if (!signature) {
      return NextResponse.json(
        { error: "No signature provided" },
        { status: 400 }
      );
    }

    // Get the raw payload
    const payload = await req.text();

    // Calculate the signature
    const computedSignature = crypto
      .createHmac("sha256", process.env.CHARGILY_SECRET_KEY!)
      .update(payload)
      .digest("hex");

    // If signatures don't match, return 403
    if (computedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 403 });
    }

    // Parse the JSON payload
    const event = JSON.parse(payload);

    // Handle different event types
    switch (event.type) {
      case "checkout.paid":
        const checkout = event.data;
        // Handle successful payment
        // Add your business logic here
        console.log("Payment successful:", checkout);
        break;

      case "checkout.failed":
        const failedCheckout = event.data;
        // Handle failed payment
        // Add your business logic here
        console.log("Payment failed:", failedCheckout);
        break;

      default:
        console.log("Unhandled event type:", event.type);
    }

    return NextResponse.json({ received: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
