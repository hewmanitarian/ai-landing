<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-20 pb-8 md:pt-20">
    <div class="p-24 md:order-1 hidden md:block">
      <img
        class="rounded-full transition-transform transform hover:scale-110"
        src="~/assets/svg/loading1.svg"
        alt="Loading Image"
        loading="eager"
        format="avif"
        width="400"
        height="400"
      />
    </div>


    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold lg:tracking-tight">
        <u>Knowledgeable</u> AI.. easy.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <b><span class="text-primary">Jella</span> <span class="font-bold text-slate-400">AI</span></b> is a powerful no-code framework to help you build AI that can interact with your data and take action.
      </p>
      <!-- <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <LandingLink
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank"
          rel="noopener">
            View Docs
        </LandingLink>
        <LandingLink
          size="lg"
          styleName="outline"
          rel="noopener"
          href="https://github.com/Gr33nW33n/nuxtship-template"
          target="_blank">
            Sign Up
          </LandingLink>
      </div> -->
    </div>
  </main>
</template>

<style scoped>
  img {
    transition: transform 0.3s ease-in-out; /* Adjust the duration and timing function as needed */
    box-shadow: 0 4px 16px rgba(255, 105, 180, 0.6); /* Increased blur radius for a blurrier pink box shadow */
  }
</style>
