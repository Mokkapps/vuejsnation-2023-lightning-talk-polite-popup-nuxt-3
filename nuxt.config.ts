// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
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
