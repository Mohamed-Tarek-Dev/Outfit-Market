import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";

// const myCustomTheme = {
//   colors: {
//     primary: "#0ff",
//   },
// };

import { useThemeStore } from "~/stores/theme";

export default defineNuxtPlugin((nuxtApp) => {
  const theme_store = useThemeStore();

  const vuetify = createVuetify({
    theme: {
      defaultTheme: theme_store.default_theme,
      themes: {
        // myCustomTheme,
        dark: {
          colors: {
            primary: "#339989",
          },
        },
        light: {
          colors: {
            primary: "#339989",
          },
        },
      },
    },
    srr: true,
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
  });

  nuxtApp.vueApp.use(vuetify);

  return {
    provide: {
      vuetify,
    },
  };
});
