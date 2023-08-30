<template>
  <AppLoader v-show="useGlobalStore().AppInitLoading" />
  <div>
    <NuxtLayout>
      <PageLoader v-show="useGlobalStore().pageLoading" />
      <NuxtPage :key="useHelpers().lang()" />
      <NuxtLoadingIndicator />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useGlobalStore } from "@/stores/global";

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Outfit` : "Outfit";
  },
  meta: [
    {
      name: "description",
      content:
        "Get offers on popular products on Outfit. Browse and discover thousands of brands. Read customer reviews and find top sellers. discounted rates. Wide variety of products. Fast delivery. One-click payment. Track the shipment.",
    },
    {
      name: "author",
      content: "Omar Momen",
    },
    {
      name: "keywords",
      content: "SALE, BYE, CLOTHES, DISCOUNT",
    },
  ],
});

// Handling App
const nuxtApp = useNuxtApp();
nuxtApp.hook("app:suspense:resolve", async () => {
  useGlobalStore().AppInitLoading = false;
});
</script>
