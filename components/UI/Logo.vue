<template>
  <NuxtLink class="logo" to="/" name="Home Page">
    <nuxt-img
      v-bind="$attrs"
      preset="default"
      :src="fixed_src ? fixed_src : logo"
      alt="App Logo"
      height="30"
      width="110"
  /></NuxtLink>
</template>

<script setup>
const props = defineProps(["fixed_src"]);

const logo = computed(() => {
  if (useHelpers().theme() == "light") {
    return "/images/logo/logo_light.png";
  } else {
    return "/images/logo/logo_dark.png";
  }
});
</script>

<style lang="scss" scoped>
a {
  display: block;

  img {
    display: block;
  }
}
</style>
