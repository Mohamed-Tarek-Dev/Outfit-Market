<template>
  <v-row class="product_slider">
    <v-col cols="12" md="2">
      <ul class="bullets">
        <li
          v-on="{
            mouseover: () => changeIndex(index),
            click: () => changeIndex(index),
          }"
          :class="{ active: current_slide_index == index }"
          v-for="(slide, index) in slides"
          :key="slide.id"
        >
          <nuxt-img
            :provider="slide.provider ? slide.provider : ''"
            :src="slide.url"
            preset="default"
            :alt="'product slide image - ' + slide.title"
            height="100"
            width="100"
          />
        </li>
      </ul>
    </v-col>

    <v-col cols="12" md="10">
      <Swiper @swiper="onSwiper">
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div class="slide">
            <vue-image-zoomer
              :regular="slide.url"
              :alt="'product slide image - ' + slide.title"
              height="500"
              width="500"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </v-col>
  </v-row>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { VueImageZoomer } from "vue-image-zoomer";
import "vue-image-zoomer/dist/style.css";

const props = defineProps(["slides"]);

const my_swiper = ref(null);

const current_slide_index = ref(0);

const onSwiper = (swiper) => {
  my_swiper.value = swiper;
};
const changeIndex = (index) => {
  my_swiper.value.slideTo(index);
  current_slide_index.value = index;
};
</script>

<style lang="scss">
.product_slider {
  ul.bullets {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    li {
      height: 100px;
      width: 100px;
      margin-bottom: 10px;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;

      &.active {
        border: 5px solid var(--app_color);
      }

      img {
        max-width: 100%;
        max-height: 100%;
      }
    }

    @media (max-width: 960px) {
      flex-direction: row;

      li {
        margin-block: 0;
        margin-inline-end: 10px;
      }
    }
  }

  .swiper {
    .swiper-wrapper {
      .swiper-slide {
        .slide {
          height: 80vh;
          overflow: hidden;
          border-radius: 10px;
          // display: flex;
          // justify-content: center;

          .vh--outer {
            // width: 100% !important;
            // height: 100% !important;
            .vh--holder {
              // width: 100% !important;
              // height: 100% !important;
              picture {
                // width: 100% !important;
                // height: 100% !important;
                img {
                  // width: 100% !important;
                  // height: 100% !important;
                  object-fit: contain;
                }
              }
            }
          }
        }
      }

      .swiper-pagination {
      }
    }
  }
}
</style>
