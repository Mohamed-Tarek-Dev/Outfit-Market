<template>
  <div class="aboutPage">
    <h1>About</h1>
    <v-row>
      <v-col cols="12" sm="4" v-for="img in images" :key="img.id">
        <div class="card">
          <ImgLoader :src="img.urls.raw" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "About Us",
});

const accessKey = "DipFcjz0k9Li_TEv14iakBPzd-Pd26fZ90Ag1w_9gvc";
const count = 1;
const url = `https://api.unsplash.com/photos/random?count=${count}&client_id=${accessKey}`;
const { data: images } = await useFetch(url);
</script>

<style lang="scss" scoped></style>
