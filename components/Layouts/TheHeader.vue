<template>
  <header class="header">
    <section class="text" data-aos="fade-right">
      <span class="top font-italic text-h6">Outfit Presents</span>
      <h1>
        offering <span class="small">a</span> <br />
        <span class="big">new way</span> <span class="small">to</span> shop
        <br />
        <span class="small">the</span> world's finest <br />
        clothes!
      </h1>
      <nuxt-link to="/shop"
        ><span>Shop Now</span>
        <nuxt-img
          src="/icons/arrow-right.svg"
          alt="arrow right"
          preset="default"
          width="32"
          height="24"
      /></nuxt-link>
    </section>

    <section class="image" data-aos="fade-left">
      <nuxt-img
        preset="default"
        src="/images/bg/head.png"
        alt="Head section image"
        width="500"
        height="600"
      />
    </section>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
header.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .text {
    font-family: "DM Serif Display", sans-serif;
    flex-grow: 1;

    h1 {
      font-size: 70px;

      letter-spacing: 5px;
      line-height: 1.4;
      text-transform: uppercase;

      span.big {
        color: var(--app_color);
      }
      span.small {
        font-size: 0.5em;
        text-transform: lowercase;
      }
    }

    @media (max-width: 720px) {
      text-align: center;

      h1 {
        font-size: 60px;
      }
    }

    @media (max-width: 550px) {
      h1 {
        font-size: 50px;
      }
    }

    a {
      font-family: "koho", sans-serif;
      color: var(--app_color);
      font-weight: 300;
      font-size: 2rem;
      text-align: end;
      display: block;
      font-style: italic;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-inline-end: 25px;

      span {
        margin-inline-end: 10px;
      }

      img {
        margin-top: 13px;
        animation: arrowRight 0.9s ease-in-out infinite alternate;
      }
    }

    @keyframes arrowRight {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(13px);
      }
    }

    @keyframes arrowLeft {
      0% {
        transform: translateX(0) rotate(180deg);
      }
      100% {
        transform: translateX(-13px) rotate(180deg);
      }
    }
  }

  .image {
    @media (max-width: 1280px) {
      display: none;
    }
  }
}

body.rtl {
  header.header {
    .text {
      img {
        animation: arrowLeft 0.9s ease-in-out infinite alternate;
      }
    }
  }
}
</style>
