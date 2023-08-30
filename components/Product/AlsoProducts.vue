<template>
  <div class="alsoProducts">
    <h2 class="h_2 mb-2">Customers Also viewed</h2>
    <v-row>
      <v-col cols="6" md="3" v-for="product in products" :key="product.id">
        <ProductItem :product="product" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const { data: products } = await useApis().GetProducts();
</script>

<style lang="scss" scoped></style>
