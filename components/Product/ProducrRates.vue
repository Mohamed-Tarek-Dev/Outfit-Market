<template>
  <div class="reviews my-15">
    <h2 class="h_2 mb-2">Customer Reviews</h2>

    <ul class="rates">
      <v-row>
        <v-col class="mb-4" cols="12" md="12" v-for="rate in rates" :key="rate.id">
          <li>
            <ProductRate :rate="rate" />
          </li>
        </v-col>
      </v-row>
    </ul>

    <v-pagination
      class="mt-7"
      v-model="page"
      :length="ratePageLength"
      rounded="circle"
    ></v-pagination>
  </div>
</template>

<script setup>
const RATES = [
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 1",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 1",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 1",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 1",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 2",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 2",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 2",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 2",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
  {
    id: 1,
    user: {
      id: 545,
      img: "/images/avatars/user_placholder.jpg",
      name: "Mohamed Tarek 2",
    },
    body: "The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture The pattern very goode but fabric not good. It's fix for me, the color is not bright as the picture",
    rate: 4,
  },
];
const fakeApiCallToGetRatesPaginated = (page) => {
  if (page == 1) return RATES.slice(0, 4);
  else if (page == 2) return RATES.slice(4);
};
const page = ref(1);
const ratePerPage = 4;
const ratePageLength = Math.floor(RATES.length / ratePerPage);
const rates = ref(fakeApiCallToGetRatesPaginated(page.value));
watch(page, (newVal) => {
  rates.value = fakeApiCallToGetRatesPaginated(newVal);
});
</script>

<style lang="scss" scoped>
.rates {
  border-radius: 10px;
  padding: 20px;
  max-height: 80vh;
  overflow-y: scroll;
  border: 1px solid var(--border);
  box-shadow: 0 0 10px var(--main_shadow);
}
</style>
