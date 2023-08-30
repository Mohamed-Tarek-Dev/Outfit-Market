import { useLangStore } from "./lang";

export const useAuthStore = defineStore("auth", () => {
  const nuxtApp = useNuxtApp();

  const user = ref({
    id: null,
    name: null,
    token: null,
    usertype: null,
    image: null,
    phone: null,
  });

  const verify_code = ref(null);
  const email = ref(null);

  const setStorage = (loginData) => {
    nuxtApp.$encryptStorage.setItem("blank_App_User_Id", loginData?.id || null);
    user.value.id = loginData?.id || null;

    nuxtApp.$encryptStorage.setItem(
      "blank_App_User_Name",
      loginData?.token || null
    );
    user.value.token = loginData?.token || null;

    nuxtApp.$encryptStorage.setItem(
      "blank_App_Token",
      loginData?.token || null
    );
    user.value.token = loginData?.token || null;

    nuxtApp.$encryptStorage.setItem(
      "blank_App_User_Type",
      loginData?.userType || null
    );
    user.value.userType = loginData?.userType || null;

    nuxtApp.$encryptStorage.setItem(
      "blank_App_userImg",
      loginData?.image || null
    );
    user.value.image = loginData?.image || null;

    nuxtApp.$encryptStorage.setItem(
      "blank_App_userPhone",
      loginData?.phone || null
    );
    user.value.phone = loginData?.phone || null;
  };

  const clearStorage = () => {
    nuxtApp.$encryptStorage.removeItem("blank_App_User_Id");
    user.value.id = null;

    nuxtApp.$encryptStorage.removeItem("blank_App_User_Name");
    user.value.name = null;

    nuxtApp.$encryptStorage.removeItem("blank_App_Token");
    user.value.token = null;

    nuxtApp.$encryptStorage.removeItem("blank_App_User_Type");
    user.value.usertype = null;

    nuxtApp.$encryptStorage.removeItem("blank_App_userImg");
    user.value.image = null;

    nuxtApp.$encryptStorage.removeItem("blank_App_userPhone");
    user.value.phone = null;
  };

  const logOut = () => {
    // let langStore = useLangStore();
    // useFetch({
    //   method: "post",
    //   url: "logout",
    // })
    //   .then(() => {
    //     nuxtApp.$iziToast.success({
    //       message:
    //         langStore.current_lang == "en"
    //           ? "Logout Successed"
    //           : "تم تسجيل الخروج بنجاح",
    //       position: "topCenter",
    //     });

    clearStorage();

    setTimeout(() => {
      navigateTo("/");
      // location.reload();
    }, 500);
    // })
    // .catch((err) => {
    //   nuxtApp.$iziToast.error({
    //     message: err.response.data.message,
    //   });
    // });
  };

  const logIn = (loginData) => {
    let langStore = useLangStore();

    setStorage(loginData);

    nuxtApp.$iziToast.success({
      message:
        langStore.current_lang == "en" ? "Welcome to App" : "App مرحبا بك في",
      position: "topCenter",
    });

    setTimeout(() => {
      navigateTo("/");
      // location.reload();
    }, 500);
  };

  return { user, verify_code, email, logOut, logIn };
});
