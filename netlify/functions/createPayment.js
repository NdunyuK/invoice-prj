import axios from 'axios';

export const handler = async (event, context) => {
  console.log("received initialization request")
  console.log("Raw event.body:", event.body);
  const { email, amount } = JSON.parse(event.body);

  try {
    const res = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amount * 100, // in kobo
        callback_url: 'https://shutterinvoice.com/generate', ///payment-success
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );
    // console.log("response from initialize", res)
    return {
      statusCode: 200,
      body: JSON.stringify(res.data.data),
    };
  } catch (err) {
    console.log("errro calling paystack", err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
