<template>
  <main class="flex items-center justify-center text-center">
    <!-- <div class="md:order-0 md:block">
      <img
        class="rounded-full transition-transform transform hoverrotate"
        src="~/assets/svg/hero1.svg"
        alt="Loading Image"
        loading="eager"
        format="avif"
        width="1000"
        height="1000"
      />
    </div> -->

    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h1 class="text-5xl lg:text-6xl xl:text-6xl font-bold">
        Koala
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        <b><span class="text-primary">Accessible</span> <span class="font-bold text-slate-400">Healthcare</span></b> for the 21st Century
      </p>
      <p>Coming Soon</p>
    </div>
  </main>
</template>

<style scoped>
  /* Ensure the parent container takes the full height of the viewport */
  html, body, #app, main {
    height: 100%;
    margin: 0;
  }

  img {
    transition: transform 0.3s ease-in-out; /* Adjust the duration and timing function as needed */
  }

  .hoverrotate:hover {
    transform: scale(1.20) rotate(10deg);
  }
</style>