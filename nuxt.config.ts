// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  ssr: true,

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    domains: ["https://cdn.myanimelist.net"],
  },
  app: {
    head: {
      title: "BTJ Academy",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          name: "description",
        },
      ],
    },
  },

  modules: [
    "@nuxt/image",
    [
      "nuxt-highcharts",
      {
        /* module options */
      },
    ],
  ],
});
