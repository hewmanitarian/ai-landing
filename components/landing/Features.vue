<script setup>
const features = [
  {
    title: "Consolidation",
    description:
      "Easily collect and link all of your data, no matter where it is.",
    img: "consolidation"
  },
  {
    title: "Categorization",
    description:
      "Intelligent categorization of your data enables different, specialized AI's from the same data.",
    img: "categorization"
  },
  {
    title: "Indexing",
    description:
      "Automatic indexed databases enable lightning fast RAG queries.",
    img: "indexdb"
  },
  {
    title: "Vectorization",
    description:
      "Create multiple vector databases to create fine tuned models based on your data.",
    img: "vectordb"
  },
  {
    title: "Agent Workflows",
    description:
      "Create multiple agents that can interact with your data and take action.",
    img: "agents"
  },
  {
    title: "LLM Agnostic",
    description:
      "Use any LLM, or run mulitple to acheive improved accuracy.",
    img: "llm"
  },
];

  function getImageUrl(image) {
    return `features/${image}.png`;
  }
</script>

<template>
  <div class="mt-16 md:mt-0">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">
      AI, for everyone.
    </h2>
    <p class="text-lg mt-4 text-slate-600">
      Confused as to how to get started with creating your own advanced AI?
      <br/>
      <b><span class="text-primary">Jella</span> <span class="font-bold text-slate-400">AI</span></b> makes it easy.
    </p>
  </div>

  <div class="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
    <div v-for="item of features" class="flex gap-4 items-start">
      <div class="mt-1 bg-grey rounded-full p-2 w-20 h-20 shrink-0">
        <img :src="getImageUrl(item.img)" />
      </div>
      <div>
        <h3 class="font-semibold text-lg">{{ item.title }}</h3>
        <p class="text-slate-500 mt-2 leading-relaxed">
          {{ item.description }}
        </p>
      </div>
    </div>
  </div>
</template>
