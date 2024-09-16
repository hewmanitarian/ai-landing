<template>
  <main class="flex items-center justify-center">
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold">
        Early Access
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        You've been invited to <b><span class="text-primary">Koala</span> <span class="font-bold text-slate-400">Health</span></b> Early Access, an exclusive group of 100 users to test the platform before it's released to the public.
      </p>
      <br/>
      <button
        @click="redirectToSubscription"
        class="w-full md:w-auto px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Subscribe 💳 
      </button>
      <br/>
      <br/>

      <h2 class="text-xl mt-4 text-slate-600 max-w-xl">
        <b>What to Expect</b>
      </h2>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        As part of this closed beta, you will have unique access to help us build and define this product and service.
      </p>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        Once you complete your registration, you will be:
      </p>

      <ol class="text-md text-slate-600 max-w-xl list-none pl-6 mt-2 space-y-2">
        <li>👤&nbsp;&nbsp;Onboarded by your <b><span class="text-primary">proactive</span></b> health care representative</li>
        <li>💬&nbsp;&nbsp;Choose your preferred communication channels</li>
        <li>📅&nbsp;&nbsp;Receive a schedule of suggested appointments through 2025</li>
        <li>✅&nbsp;&nbsp;Begin scheduling/rescheduling appointments</li>
      </ol>

      <p class="text-lg mt-6 text-slate-600 max-w-xl">
        We look forward to putting your health on auto-pilot!
      </p>
      <br/>
      <p class="text-right"><b><span class="text-primary">Koala</span></b>&nbsp;🌿</p>
      <br/>
      <br/>
    </div>
  </main>
</template>

<script setup lang="ts">
  const config = useRuntimeConfig()

  const stripeBeta100Link = String(config.public.stripeBeta100Link);

  const redirectToSubscription = () => {
    window.location.href = stripeBeta100Link;
  };
</script>

<style scoped>
  /* Ensure the parent container takes the full height of the viewport */
  html, body, #app, main {
    height: 100%;
    margin: 0;
  }
</style>


