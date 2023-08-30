<template>
  <div class="shop-page">
    <TopFilter @alter_data="category_altered" class="topfilter" />

    <v-row class="products_row">
      <v-col cols="12" md="3" xl="2">
        <AsideFilter class="d-md-block d-none" @alter_data="rest_altered" />
        <BaseButton @click="show = true" class="d-md-none d-block"
          ><Icon name="ic:round-filter-alt-off"
        /></BaseButton>
      </v-col>
      <v-col cols="12" md="9" xl="10">
        <div class="products">
          <Suspense timeout="0">
            <ShopProducts :key="suspenceKey" :filter_data="filter_data" />

            <template #fallback> <SkeltonProduct /> </template>
          </Suspense>
        </div>
      </v-col>
    </v-row>

    <side-menu :show="show" @close="show = false">
      <AsideFilter class="sideMenue" @alter_data="rest_altered" />
    </side-menu>
  </div>
</template>

<script setup>
const show = ref(false);

const filter_data = ref({
  categories_filter: null,
  rest_filters: null,
});

const suspenceKey = ref(0);

const category_altered = async (data) => {
  filter_data.value.categories_filter = data;
  suspenceKey.value++;
};
const rest_altered = async (data) => {
  filter_data.value.rest_filters = data;
  suspenceKey.value++;
};

useSeoMeta({
  title: "Shop",
});
</script>

<style lang="scss" scoped>
.shop-page {
  margin-bottom: 150px;
  .topfilter {
    margin-bottom: 100px;
  }
  .products_row {
    margin-top: 120px;

    @media (max-width: 400px) {
      margin-top: 180px;
    }
  }
}
</style>
