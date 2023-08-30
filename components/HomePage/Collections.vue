<template>
  <div class="collections" data-aos="zoom-in">
    <div class="overlay">
      <div>
        <h2>
          Fall 2022 <br />
          Collection
        </h2>
        <p>The Astest Fashion For Everyone</p>
        <base-button class="md" aria-label="shop now">Shop Now</base-button>
      </div>
    </div>

    <div class="image">
      <nuxt-img
        preset="default"
        height="60vh"
        width="500"
        loading="lazy"
        src="/images/collection/1.png"
        alt="collection of clothes"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.collections {
  position: relative;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  height: 60vh;

  .overlay {
    justify-content: flex-start;
    padding-inline-start: 3em;

    @media (max-width: 500px) {
      padding-inline-start: 0;
      justify-content: center;
    }

    & > div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h2 {
        font-size: 4.5rem;
      }

      p {
        font-size: 1.2rem;
        margin-block: 5px;
      }

      button,
      p {
        align-self: flex-end;
      }
    }
  }

  .image {
    img {
      height: 60vh;
      width: 100%;
      display: block;
    }
  }
}
</style>
