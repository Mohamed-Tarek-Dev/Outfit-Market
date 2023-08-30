<template>
  <div class="flash-sale">
    <div class="view-all-row">
      <h2>Top Rated</h2>
      <nuxt-link to="/shop" class="end">
        <span class="viewAll">View All</span>
        <Icon name="zondicons:cheveron-right" />
      </nuxt-link>
    </div>
    <v-row>
      <v-col
        cols="6"
        lg="3"
        md="4"
        sm="6"
        v-for="product in products"
        :key="product.id"
        ><ProductItem :product="product"
      /></v-col>
    </v-row>
  </div>
</template>

<script setup>
const API = useApis();
const { data: products } = await API.GetProducts("topRated");
</script>

<style lang="scss" scoped>
.view-all-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 500px) {
    flex-direction: column;

    h2 {
      align-self: flex-start;
    }
    .end {
      align-self: flex-end;
    }
  }

  .end {
    display: flex;
    align-items: center;
    font-weight: bold;
    span.viewAll {
      font-weight: normal;
    }

    .time {
      display: flex;
      margin-inline-start: 15px;

      span {
        display: inline-block;
        width: 30px;
        height: 30px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 5px;
        margin-inline: 5px;
      }
    }
  }
}

body.rtl {
  .view-all-row {
    svg.icon {
      transform: rotate(180deg) !important;
    }
  }
}
</style>
