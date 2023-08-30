<template>
  <div class="fave">
    <v-tooltip
      theme="light"
      text="Favs"
      location="bottom"
      aria-label="Favourite Icon"
    >
      <template v-slot:activator="{ props }">
        <Icon v-bind="props" name="ph:heart"></Icon>
      </template>
    </v-tooltip>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
