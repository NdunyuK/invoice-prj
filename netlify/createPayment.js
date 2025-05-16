const axios = require('axios');

exports.handler = async (event, context) => {
  const { email, amount } = JSON.parse(event.body);

  try {
    const res = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: amount * 100, // in kobo
        callback_url: 'https://yourdomain.com/payment-success',
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(res.data.data),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
