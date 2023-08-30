<template>
  <div class="instagram_section">
    <v-row>
      <v-col class="c_col" cols="12" md="9" data-aos="fade-up-right">
        <div class="images">
          <v-row no-gutters="">
            <v-col
              class="c_col"
              cols="6"
              md="4"
              sm="6"
              v-for="img in images"
              :key="img.id"
            >
              <div class="image">
                <nuxt-img
                  :provider="img.provider ? img.provider : ''"
                  :src="img.url"
                  preset="default"
                  height="30vh"
                  sizes="sm:310 md:400"
                  loading="lazy"
                  alt="insta img"
                />
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        class="align-self-center c_col"
        cols="12"
        md="3"
        data-aos="fade-up-left"
      >
        <h2 class="h_2 mb-0 title">Instagram</h2>
        <p>
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
          quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
          quartz, vex nymphs.
        </p>
        <h3 class="colored text-h4 mt-1">#Outfit_Fashion</h3>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const images = ref([
  {
    id: 1,
    url: "photo-1506629082955-511b1aa562c8",
    provider: "unsplash",
  },
  {
    id: 1,
    url: "photo-1520975954732-35dd22299614",
    provider: "unsplash",
  },
  {
    id: 1,
    url: "photo-1516395971809-de4887d6aa6d",
    provider: "unsplash",
  },
  {
    id: 1,
    url: "/images/collection/3.png",
    provider: null,
  },
  {
    id: 1,
    url: "/images/collection/4.png",
    provider: null,
  },
  {
    id: 1,
    url: "/images/collection/2.png",
    provider: null,
  },
]);
</script>

<style lang="scss" scoped>
.instagram_section {
  .images {
    .image {
      overflow: hidden;
      height: 30vh;
      @media (max-width: 600px) {
        height: 20vh;
      }

      img {
        display: block;
        margin: 0 auto;
        width: 100%;
        height: 100%;

        &:hover {
          transition: transform 0.3s linear;
          transform: scale(1.3);
          cursor: pointer;
        }
      }
    }

    & > .v-row {
      .c_col:first-of-type {
        .image {
          border-radius: 15px 0 0 0;
        }
      }
      .c_col:nth-of-type(3) {
        .image {
          border-radius: 0 15px 0 0;
        }
      }
      .c_col:nth-of-type(4) {
        .image {
          border-radius: 0 0 0 15px;
        }
      }
      .c_col:last-of-type {
        .image {
          border-radius: 0 0 15px 0;
        }
      }

      @media (max-width: 600px) {
        & > .c_col {
          .image {
            border-radius: 0 !important;
          }
        }
      }
    }
  }

  @media (max-width: 960px) {
    & > .v-row {
      .c_col:nth-of-type(2) {
        order: 1;
      }
      .c_col:first-of-type {
        order: 2;
      }
    }
  }
}
</style>
