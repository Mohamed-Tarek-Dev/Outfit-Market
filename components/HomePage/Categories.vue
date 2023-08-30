<template>
  <div class="categories">
    <h2 class="h_2 title text-center">Shop by Category</h2>
    <v-row>
      <v-col cols="6" md="4" sm="6" v-for="cat in categories" :key="cat.id"
        ><CategoryItem :cat="cat"
      /></v-col>
    </v-row>
  </div>
</template>

<script setup>
const API = useApis();
const { data: categories } = await API.GetHomeCategories();
</script>

<style lang="scss" scoped></style>
