<script setup>
const menuitems = [
  {
    title: "About",
    path: "/",
  },
  // {
  //   title: "Pricing",
  //   path: "/pricing",
  // },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Waitlist",
    path: "/waitlist",
  },
];

const open = ref(false);
</script>

<template>
  <LandingContainer class="sticky-top">
    <header class="flex flex-col lg:flex-row justify-between items-center my-5">
      <div class="flex w-full lg:w-auto items-center justify-between">

        <div class="bg-white bg-opacity-50 backdrop-blur mt-3 rounded-2xl border p-2">
          <a href="/"
            ><span class="font-bold text-primary">Koala</span
            ><span class="font-bold text-slate-400">&nbsp;Health</span>
          </a>
        </div>

        <div class="block lg:hidden bg-white bg-opacity-50 backdrop-blur mt-3 rounded-2xl border p-2">
          <button @click="open = !open" class="text-gray-800 pr-1 pl-0.5">
            <svg
              fill="currentColor"
              class="w-4 h-4"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path
                v-show="open"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>
              <path
                v-show="!open"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <nav
        class="w-full lg:w-auto mt-3 lg:flex lg:mt-3 bg-white bg-opacity-50 backdrop-blur mt-3 rounded-2xl border"
        :class="{ block: open, hidden: !open }"
      >
      <ul class="flex flex-col lg:flex-row lg:gap-3">
          <li v-for="item of menuitems" class="text-center">
            <a
              :href="item.path"
              class="flex justify-center items-center lg:px-3 py-2 text-gray-600 hover:text-gray-900"
              >
              {{ item.title }}
            </a>
          </li>
        </ul>
        <!-- <div class="lg:hidden flex items-center mt-3 gap-4">
          <LandingLink href="#" styleName="muted" block size="md"
            >Log in</LandingLink
          >
          <LandingLink href="#" size="md" block>Sign up</LandingLink>
        </div> -->
      </nav>

      <div>
        <!-- <div class="hidden lg:flex items-center gap-4">
          <a href="#">Log in</a>
          <LandingLink href="#" size="md">Sign up</LandingLink>
        </div> -->
      </div>

    </header>
  </LandingContainer>
</template>

<style scoped>
  .sticky-top {
    position: sticky;
    top: 0;
    z-index: 1000; /* Optional: Ensures the element stays on top of other content */
  }
</style>