import * as functions from 'firebase-functions';
const { defineString } = require('firebase-functions/params');
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

admin.initializeApp();

const stripeSecretKey = defineString('STRIPE_SECRET_KEY');
const stripePriceId = defineString('STRIPE_PRICE_ID');
const siteUrl = defineString('SITE_URL');

if (!stripeSecretKey || !siteUrl) {
  throw new Error('Missing required environment variables');
}

const stripe = new Stripe(stripeSecretKey);

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

export const createCheckoutSession = functions.https.onRequest(async (request, response) => {
  console.log('Creating checkout session');
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: stripePriceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
    });

    console.log('Checkout session created:', session.id);
    response.send({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new functions.https.HttpsError('internal', 'Unable to create checkout session');
  }
});