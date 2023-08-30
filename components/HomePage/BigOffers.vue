<template>
  <div class="bigOffers">
    <div class="overlayed_section" data-aos="fade-right">
      <div class="overlay">
        <div>
          <h2>Get Jeweled</h2>
          <NuxtLink to="/">show your jewelry now</NuxtLink>
        </div>
      </div>

      <div class="image">
        <nuxt-img
          alt="homepage offers section Get Jeweled image"
          src="photo-1589565962595-ea7a59e78f88"
          provider="unsplash"
          preset="default"
          width="300"
          height="350"
          loading="lazy"
        />
      </div>
    </div>
    <div class="overlayed_section" data-aos="fade-left">
      <div class="overlay">
        <div>
          <h2>End Of Summer</h2>
          <NuxtLink to="/">show from here</NuxtLink>
        </div>
      </div>

      <div class="image">
        <nuxt-img
          alt="homepage offers section End Of Summer image"
          src="photo-1473496169904-658ba7c44d8a"
          sizes="sm:350 md:700"
          provider="unsplash"
          preset="default"
          width="300"
          height="350"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.bigOffers {
  display: flex;

  .overlayed_section {
    position: relative;
    flex-grow: 1;
    justify-content: center;
    margin-inline: 5px;
    border-radius: 15px;
    overflow: hidden;
    margin-block: 20px;
    height: 60vh;

    .overlay {
      align-items: flex-end;
      padding-bottom: 2em;
      text-align: center;

      h2 {
        font-size: 3.5rem;
        letter-spacing: 2px;
        font-weight: 500;
      }

      a {
        font-size: 1.5rem;
        text-decoration: underline;
        color: #fff;
        letter-spacing: 1px;
        font-weight: 400;
      }
    }

    .image {
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 1280px) {
    flex-wrap: wrap;
    .overlayed_section {
      height: 40vh;
    }
  }
}
</style>
