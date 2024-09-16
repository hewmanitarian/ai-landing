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
        <br/>
        <br/>
        Click the button below to <b><span class="text-primary">sign up!</span></b>
      </p>
      <br/>
      <button
        @click="redirectToSubscription"
        class="w-full md:w-auto px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-400 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Subscribe 💳 
      </button>
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


