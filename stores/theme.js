export const useThemeStore = defineStore("theme", () => {
  const nuxtApp = useNuxtApp();

  const current_theme = ref(null);
  const default_theme = ref("dark");

  function handleTheme() {
    let theme = current_theme.value;
    if (!theme) {
      theme = default_theme.value;
      current_theme.value = default_theme.value;
    }

    nuxtApp.$encryptStorage.setItem("blank_App_Theme", theme);
    nuxtApp.$vuetify.theme.global.name.value = theme;

    if (theme == "light") {
      document.querySelector("html").classList.remove("darkTheme");
      document.querySelector("html").classList.add("lightTheme");
    } else if (theme == "dark") {
      document.querySelector("html").classList.remove("lightTheme");
      document.querySelector("html").classList.add("darkTheme");
    }
  }

  function changeTheme() {
    if (current_theme.value == "light") {
      nuxtApp.$encryptStorage.setItem("blank_App_Theme", "dark");
      current_theme.value = "dark";
    } else if (current_theme.value == "dark") {
      nuxtApp.$encryptStorage.setItem("blank_App_Theme", "light");
      current_theme.value = "light";
    }

    handleTheme();
  }

  return {
    current_theme,
    default_theme,
    handleTheme,
    changeTheme,
  };
});
