// netlify/functions/verifyPayment.js
const axios = require('axios');

exports.handler = async (event) => {
  const reference = event.queryStringParameters.reference;

  try {
    const res = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    const paymentStatus = res.data.data.status;

    return {
      statusCode: 200,
      body: JSON.stringify({ verified: paymentStatus === 'success' }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
