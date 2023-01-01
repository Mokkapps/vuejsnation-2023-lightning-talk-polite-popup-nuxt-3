// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  css: ["@/assets/tailwind.scss"],
  content: {
    highlight: {
      theme: "github-light",
    },
  },
  router: {
    // https://router.vuejs.org/api/interfaces/routeroptions.html
    options: {
      linkActiveClass: "active",
    },
  },
});
