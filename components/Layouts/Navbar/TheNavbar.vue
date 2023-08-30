<template>
  <UpperNav />
  <nav class="theNav" :class="{ stikyNav: stikyNav, inView: inView }">
    <v-container>
      <div class="leftSide">
        <SwitchLanguage />
        <ChangeTheme class="mx-4" />
        <SearchMenu />
      </div>

      <Logo fixed_src="/images/logo/logo_dark.png" />

      <div class="rightSide">
        <div v-if="user.token">
          <notification-menu :image="user.image" url="/lol"></notification-menu>
        </div>

        <div>
          <UserMenu v-if="user.token" />
        </div>

        <div v-if="!user.token">
          <base-button aria-label="login" link to="/authentication/login"
            >Login</base-button
          >
        </div>

        <Favs />

        <Cart />
      </div>
    </v-container>
  </nav>
  <LowerNav :inView="inView" />
</template>

<script setup>
import { useAuthStore } from "~/stores/auth";
const user = useAuthStore().user;

const stikyNav = ref(false);
const inView = ref(false);

onMounted(() => {
  setTimeout(() => {
    const BODY = document.querySelector("body");
    const NAV_HEIGHT = document.querySelector("nav.theNav").clientHeight;

    window.addEventListener("scroll", () => {
      let documentScrollTop = document.documentElement.scrollTop;

      stikyNav.value = documentScrollTop > 6 * NAV_HEIGHT;
      inView.value = documentScrollTop > 8 * NAV_HEIGHT;

      if (stikyNav.value) {
        BODY.style.paddingTop = NAV_HEIGHT + "px";
      } else {
        BODY.style.paddingTop = 0;
      }
    });
  }, 1000);
});
</script>

<style lang="scss" scoped>
.theNav {
  background: var(--main_bg);
  .v-container {
    position: relative;
    transition: all 0.3s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    .leftSide {
      display: flex;
      align-items: center;
    }

    .rightSide {
      display: flex;
      align-items: center;

      & > div {
        margin: 0 5px;
      }
    }

    @media (max-width: 700px) {
      .language,
      .change_theme,
      .fave,
      .cart,
      .user {
        display: none;
      }
      .toggleMenu {
        display: block;
      }
    }
  }

  transition: all 0.3s ease-in-out;
  &.stikyNav {
    position: fixed;
    top: -100px;
    width: 100%;
    z-index: 999;
    border-bottom: 1.5px solid var(--border);
    box-shadow: 0 0 10px var(--main_shadow);
  }
  &.inView {
    top: 0;
  }
}
</style>
