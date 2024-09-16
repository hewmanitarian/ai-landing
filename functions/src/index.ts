import * as functions from 'firebase-functions';
const { defineString } = require('firebase-functions/params');
import * as admin from 'firebase-admin';
import Stripe from 'stripe';

admin.initializeApp();

const stripeSecretKey = defineString('STRIPE_SECRET_KEY');
const siteUrl = defineString('SITE_URL');

if (!stripeSecretKey || !siteUrl) {
  throw new Error('Missing required environment variables');
}

const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2024-06-20',
});

export const createCheckoutSession = functions.https.onCall(async (request: functions.https.CallableRequest<any>) => {
  // Optional: Check if the user is authenticated
  if (!request.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'User must be logged in to checkout.');
  }

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1PyfUg2M5r7kzI92juYuwTM5', // Replace with your actual price ID
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${siteUrl}/success`,
      cancel_url: `${siteUrl}/cancel`,
    });

    return { sessionId: session.id };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new functions.https.HttpsError('internal', 'Unable to create checkout session');
  }
});