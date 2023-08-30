<template>
  <div class="categoryItem">
    <div class="image">
      <nuxt-img
        :src="props.cat.img"
        alt="category image"
        preset="default"
        height="100"
        width="70"
        loading="lazy"
      />
    </div>
    <div class="text">
      {{ props.cat.title }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["cat"]);
</script>

<style lang="scss" scoped>
.categoryItem {
  background: var(--cat_bg);
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  border-radius: 10px;
  cursor: pointer;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  &:hover {
    transition: background 0.1s linear;
    background: var(--cat_bg_hover);

    .image {
      img {
        transition: transform 0.2s linear;
        transform: scale(1.2) rotate(20deg);
      }
    }
  }

  .text {
    max-width: 100px;
    padding: 10px 0;
  }
}
</style>
