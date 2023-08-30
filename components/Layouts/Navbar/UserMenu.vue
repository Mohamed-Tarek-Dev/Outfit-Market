<template>
  <div class="user">
    <NuxtLink to="/profile" name="Profile Page">
      <v-tooltip       theme="light"
text="Profile" location="top" aria-label="User Icon">
        <template v-slot:activator="{ props }">
          <Icon v-bind="props" name="solar:user-linear" />
        </template>
      </v-tooltip>
    </NuxtLink>
  </div>
</template>

<script setup>
// import placeholder_image from "@/assets/media/images/avatars/user_placholder.jpg";
// const props = defineProps(["image"]);
</script>

<style lang="scss" scoped>
svg.icon {
  color: var(--main);
}
</style>
