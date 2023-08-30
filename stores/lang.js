export const useLangStore = defineStore("lang", () => {
  const nuxtApp = useNuxtApp();

  const current_lang = ref(null);
  const default_lang = ref(useRuntimeConfig().public.LOCALE);

  const handleLang = () => {
    let lang = current_lang.value;
    if (!lang) {
      lang = default_lang.value;
      current_lang.value = default_lang.value;
    }

    useRuntimeConfig().public.LOCALE = lang;
    nuxtApp.$encryptStorage.setItem("blank_App_Lang", lang);
    document.documentElement["lang"] = lang;
    nuxtApp.$i18n.global.locale.value = lang;
    nuxtApp.$vuetify.locale.current.value = lang;

    if (lang == "ar") {
      document.querySelector("body").classList.add("rtl");
      document.querySelector("body").classList.remove("ltr");
    } else if (lang == "en") {
      document.querySelector("body").classList.add("ltr");
      document.querySelector("body").classList.remove("rtl");
    }
  };

  const switchLang = () => {
    if (current_lang.value == "ar") {
      nuxtApp.$encryptStorage.setItem("blank_App_Lang", "en");
      current_lang.value = "en";
    } else if (current_lang.value == "en") {
      nuxtApp.$encryptStorage.setItem("blank_App_Lang", "ar");
      current_lang.value = "ar";
    }

    handleLang();
  };

  return { current_lang, default_lang, handleLang, switchLang };
});
