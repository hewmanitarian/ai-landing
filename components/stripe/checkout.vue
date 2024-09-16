<template>
  <div>
    <button @click="handleCheckout" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Checkout
    </button>
  </div>
</template>

<script setup>
import { loadStripe } from '@stripe/stripe-js';
import { useRuntimeConfig } from '#app';

const config = useRuntimeConfig();
const stripePromise = loadStripe(config.public.stripePublicKey);

const handleCheckout = async () => {
  try { 
    const stripe = await stripePromise;
    
    // Make a call to your backend to create a Checkout Session
    // const StripeCheckoutURL = 'http://127.0.0.1:5001/getkoalaai/us-central1/helloWorld';
    // const StripeCheckoutURL = 'http://127.0.0.1:5001/getkoalaai/us-central1/createCheckoutSession';
    // const response = await fetch( StripeCheckoutURL, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     // Add any necessary data for your checkout session
    //   }),
    // });

    // const session = await response.json();

    // Redirect to Stripe Checkout
    // const result = await stripe.redirectToCheckout({
    //   sessionId: session.id,
    // });
    const result = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: 'price_1PyfUg2M5r7kzI92juYuwTM5',
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `https://getkoala.ai/success`,
      cancel_url: `https://getkoala.ai/cancel`,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  } catch (error) {
    console.error('Error in checkout:', error);
  }
};
</script>
