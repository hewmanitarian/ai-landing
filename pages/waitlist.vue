<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Waitlist</template>
      <template v-slot:desc><b><span class="text-primary">Koala</span> <span class="font-bold text-slate-400">Health</span></b> is coming soon.</template>
    </LandingSectionhead>

    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-16">
      <div>
        <h2 class="font-medium text-2xl text-gray-800">
          The Koala Waitlist
        </h2>
        <p class="text-lg leading-relaxed text-slate-500 mt-3">
          Join here for consideration to be invited to use Koala when it is released to early access.
        </p>
        <div class="mt-5">
          <div class="flex items-center mt-2 space-x-2 text-gray-600">
            <Icon class="text-gray-400 w-4 h-4" name="uil:building" />
            <span>Made in <b>Detroit, MI 🇺🇸</b></span>
          </div>
        </div>
      </div>
      <div>
        <LandingContactform />
      </div>
    </div>
  </LandingContainer>
</template>
