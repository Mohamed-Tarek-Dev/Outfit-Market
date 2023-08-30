<template>
  <span class="search">
    <v-tooltip
      theme="light"
      text="Search"
      location="top"
      aria-label="Search Icon"
    >
      <template v-slot:activator="{ props }">
        <Icon v-bind="props" @click="show = !show" name="ic:outline-search" />
      </template>
    </v-tooltip>

    <search-model
      :show="show"
      :closeIcon="false"
      @close="show = false"
    ></search-model>
  </span>
</template>

<script setup>
const props = defineProps(["url"]);
const show = ref(false);
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: center;
}
</style>
