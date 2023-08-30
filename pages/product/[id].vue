<template>
  <div class="product_details">
    <v-row v-if="product">
      <v-col cols="12" md="7">
        <ProductSlider :slides="slides" />
      </v-col>
      <v-col cols="12" md="5">
        <ProductInfo :product="product" />
      </v-col>
    </v-row>

    <ProducrRates />

    <Suspense>
      <AlsoProducts />
      <template #fallback> <SkeltonProduct /> </template>
    </Suspense>
  </div>
</template>

<script setup>
const route = useRoute();
const id = route.params.id;
const { data: product } = await useApis().GetProduct(id);

const slides = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    provider: "unsplash",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    provider: "unsplash",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    provider: "unsplash",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542058186993-286fdce0b580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    provider: "unsplash",
  },
];
</script>

<style lang="scss" scoped>
.product_details {
  margin-bottom: 120px;
  margin-top: 50px;
}
</style>
