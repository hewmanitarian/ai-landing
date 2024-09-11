<script setup>
definePageMeta({
  layout: "landing",
});

const TeamImg1 = "serg.jpg";
const TeamImg2 = "hew.jpg";

const team = [
  {
    name: "Serg R.",
    title: "Operations",
    avatar: {
      src: TeamImg1
    },
  },
  {
    name: "Hew H.",
    title: "Technology",
    avatar: {
      src: TeamImg2
    },
  }
];
</script>

<template>
  <LandingContainer>
    <LandingSectionhead>
      <template v-slot:title>Team</template>
      <template v-slot:desc>&nbsp;</template>
    </LandingSectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        Enabling creativity through accessible AI
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        <b>AI should be accessible to everyone.</b>
        <br/>
        Our mission is to make tools that are so intuitive anyone can create powerful AI systems without needing advanced technical knowledge.
      </p>
    </div>
    <div class="grid md:grid-cols-2 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <img
            :src="item.avatar.src"
            format="avif"
            alt="Team"
            height="180"
            width="180"
            class="object-cover rounded-full transition group-hover:-translate-y-1 group-hover:shadow-xl m-auto"
          />

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ item.name }}</h2>
          <h3 class="text-sm text-slate-500">{{ item.title }}</h3>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>

    <div class="">
      <img
        class="background2 z-0 hidden sm:block"
        src="~/assets/svg/background2.svg"
        alt="Background Image 1"
        loading="eager"
        format="avif"
      />
    </div>
  </LandingContainer>
</template>

<style scoped>
  .background2 {
    width: 100vw;
    object-fit: contain;
    margin-top: -360px;
  }

</style>
