<template>
  <div class="homePage">
    <TheHeader class="homeSection" />

    <section class="homeSection">
      <Suspense>
        <Categories class="homeSection" />

        <template #fallback>
          <SkeltonCategories />
        </template>
      </Suspense>
    </section>

    <section class="homeSection">
      <Suspense>
        <FlashSale />

        <template #fallback> <SkeltonProduct /> </template>
      </Suspense>
    </section>

    <section class="homeSection">
      <BigOffers />
    </section>

    <section class="homeSection">
      <Suspense>
        <TopRated />
        <template #fallback> <SkeltonProduct /> </template>
      </Suspense>
    </section>

    <section class="homeSection">
      <Collections />
    </section>

    <section class="homeSection">
      <Instagram />
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: "HomePage",
});
</script>

<style scoped lang="scss">
.homeSection {
  margin-bottom: 100px;
}
</style>
