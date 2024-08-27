<template>
  <div class="mt-24 relative">

    <div class="">
      <img
        class="background1 absolute inset-0 z-0 hidden sm:block"
        src="~/assets/svg/background1.svg"
        alt="Background Image 1"
        loading="eager"
        format="avif"
      />
    </div>

    <div class="relative z-2" style="padding-top: 280px;">
      <h2 class="text-center text-slate-400 lg:text-white">Integrate with any LLM</h2>
      <div
        class="flex gap-8 md:gap-20 text-slate-400 lg:text-white items-center justify-center mt-10 flex-wrap relative z-2"
      >
        <Icon class="h-8 md:h-14" name="simple-icons:openai" size="48" />
        <Icon class="h-8 md:h-14" name="simple-icons:anthropic" size="48" />
        <Icon class="h-8 md:h-14" name="simple-icons:meta" size="48" />
        <Icon class="h-8 md:h-12" name="simple-icons:google" size="48" />
        <Icon class="h-8 md:h-12" name="simple-icons:perplexity" size="48" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background1 {
    width: 100vw;
    object-fit: contain;
    position: absolute;
    z-index: 0;
    top: 0;
  }
  .w-screen {
    width: 200vw;
  }
  .h-auto {
    height: auto;
  }

</style>
