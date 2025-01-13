export async function GET() {
  try {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.CHARGILY_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: '{"amount":1000,"currency":"dzd","success_url":"https://your-cool-website.com/payments/success"}',
    };

    const response = await fetch(
      "https://pay.chargily.net/test/api/v2/checkouts",
      options
    );

    const data = await response.json();

    console.log("this is the checkout url yess");
    console.log(data?.checkout_url);

    return Response.json({ data });
  } catch (err) {
    console.log(err);
  }
}
