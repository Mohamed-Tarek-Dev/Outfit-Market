<template>
  <v-row v-if="products && products.length > 0">
    <v-col v-for="product in products" :key="product.id" cols="6" md="3">
      <ProductItem :product="product" />
    </v-col>
  </v-row>

  <Empty v-else />
</template>

<script setup>
const props = defineProps(["filter_data"]);

const API = useApis();
const { data: products } = await API.GetProducts(props.filter_data);

// watch(
//   props.filter_data,
//   async (newVal) => {
//     console.log(newVal);
//     const { data } = await API.GetProducts(newVal);
//     products.value = data.value;
//   },
//   { deep: true }
// );
</script>

<style lang="scss" scoped></style>
