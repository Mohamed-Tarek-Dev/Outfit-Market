export default defineNuxtConfig({
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    // async (options, nuxt) => {
    //   nuxt.hooks.hook("vite:extendConfig", (config) =>
    //     config.plugins.push(vuetify())
    //   );
    // },
  ],

  image: {
    unsplash: {
      baseURL: "https://images.unsplash.com/",
    },

    cloudinary: {
      baseURL: "https://res.cloudinary.com/<your-cloud-name>/image/upload/",
    },

    presets: {
      default: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "60",
        },
      },
    },
  },

  build: {
    transpile: ["vuetify", "@googlemaps/js-api-loader"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  runtimeConfig: {
    public: {
      LOCALE: "en",
      FALLBACK_LOCALE: "en",
      GOOGLE_MAPS_API_KEY: "AIzaSyC2MTR_vRbsbQQRPt5f5ZLCvvaKOpzkzlA",
      API_BASE_URL: process.env.API_BASE_URL,
    },
  },

  css: [
    "~/assets/scss/main.scss",
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
  ],

  app: {
    layoutTransition: { name: "slide-left", mode: "out-in" },
    pageTransition: { name: "fadeIn", mode: "out-in" },
  },

  components: [{ path: "~/components", pathPrefix: false }],

  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
    ],
  },

  // devtools: {
  //   enabled: true,
  // },
});
