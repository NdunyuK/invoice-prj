// netlify/functions/verifyPayment.js
import axios from 'axios';

export const handler = async (event) => {
  console.log("verifying on the backend")
  const reference = event.queryStringParameters.reference;

  try {
    const res = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });
    // console.log("respones to transaction/verify", res)

    const paymentStatus = res.data.data.status;

    return {
      statusCode: 200,
      body: JSON.stringify({ verified: paymentStatus === 'success' }),
    };
  } catch (err) {
    console.log("error to transaction/verify", err)

    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
