import { useAuthStore } from "@/stores/auth";
import { useLangStore } from "@/stores/lang";

export const useMyFetch = (url, options) => {
  const AUTH_STORE = useAuthStore();
  const LANG_STORE = useLangStore();

  const app = useRuntimeConfig();

  const myOptions = ref({
    ...options,
    headers: {
      ...(options ? options.headers : {}),
      "accept-language": LANG_STORE.current_lang,
      ...(AUTH_STORE.user.token
        ? { authorization: AUTH_STORE.user.token }
        : {}),
    },
    baseURL: app.public.API_BASE_URL,
    onRequest({ request, options }) {
      // Set the request headers
    },
    onRequestError({ request, options, error }) {
      // Handle the request errors
      if (
        error.response.status == "401" &&
        error.response.config.url != "login" &&
        error.response.config.url != "logout"
      ) {
        AUTH_STORE.logOut();
      }
    },
    onResponse({ request, response, options }) {
      // Process the response data
    },
    onResponseError({ request, response, options }) {
      // Handle the response errors
    },
  });

  return useFetch(url, myOptions.value);
};
