<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-20 pb-8 md:pt-20">
    <div class="md:order-0 md:block">
      <img
        class="rounded-full transition-transform transform hoverrotate"
        src="~/assets/svg/hero1.svg"
        alt="Loading Image"
        loading="eager"
        format="avif"
        width="1000"
        height="1000"
      />
    </div>


    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold lg:tracking-tight">
        <u>Appointments</u> on autopilot.
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <b><span class="text-primary">Koala</span> <span class="font-bold text-slate-400">Health</span></b> is a new way to manage your health appointment scheduling.
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
  }

  .hoverrotate:hover {
    transform: scale(1.20) rotate(10deg);
  }
</style>
