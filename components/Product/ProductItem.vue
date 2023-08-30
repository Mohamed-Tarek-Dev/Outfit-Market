<template>
  <div class="productItem mb-3" v-if="product">
    <nuxt-link :to="`/product/${product.id}`">
      <div class="image">
        <template v-if="product.colors && product.colors.length > 0">
          <template v-for="image in product.colors" :key="image.id">
            <ImgLoader
              :class="{ notActive: image.url !== currentImage.url }"
              :src="image.url"
              :alt="'product image - ' + product.desc"
              :provider="image.provider ? image.provider : ''"
              preset="default"
              height="350"
              sizes="sm:45vw md:30vw"
            />
          </template>
        </template>

        <template v-else>
          <ImgLoader
            :provider="product.provider ? product.provider : ''"
            :alt="'product image - ' + product.desc"
            :src="currentImage.url"
            preset="default"
            height="350"
            sizes="sm:45vw md:30vw"
          />
        </template>

        <div class="flash" v-if="product.flash">
          <nuxt-img
            preset="default"
            loading="lazy"
            src="/icons/flash.svg"
            alt="flash icon"
            width="15"
            height="22"
          />
          <h5>{{ product.percentageOfFlash }}%</h5>
        </div>

        <div
          @click="makeFavorite"
          class="isFavorite"
          :class="{ active: product.isFavorite }"
        >
          <Icon name="material-symbols:favorite-rounded" />
        </div>
      </div>
    </nuxt-link>
    <div class="text">
      <p class="para mt-1">{{ product.desc }}</p>
      <div class="price" :class="{ topRated: product.topRated }">
        <h4>EGP {{ product.price }}</h4>
        <span class="discount" v-if="product.discount"
          >EGP {{ product.actulaPrice }}</span
        >
        <span class="topRated" v-if="product.topRated">Top Rated</span>
      </div>
    </div>
    <div class="sellPercentage mt-1" v-if="product.flash">
      <v-progress-linear
        aria-label="amount of selled products"
        v-model="product.percentageOfSelling"
        color="#FAD73B"
        height="13"
      >
        <template v-slot:default="{ value }">
          <h5>{{ Math.ceil(value) }}% sold</h5>
        </template>
      </v-progress-linear>
      <Icon name="circum:shopping-cart" />
    </div>
    <ul class="colors" v-if="product.colors && product.colors.length > 0">
      <li v-for="image in product.colors" :key="image.id">
        <button
          v-on="{
            mouseover: () => changeColor(image.id),
            click: () => changeColor(image.id),
          }"
          aria-label="change-color"
          :style="{ background: image.color }"
          :class="{ active: currentImage.url == image.url }"
        ></button>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);

const currentImage = ref(props.product.main_image);

const makeFavorite = () => {};

const changeColor = (id) => {
  currentImage.value = props?.product?.colors?.find((item) => {
    return item.id == id;
  });
};
</script>

<style lang="scss" scoped>
.productItem {
  position: relative;
  cursor: pointer;

  .image {
    position: relative;
    overflow: hidden;
  }

  .text {
    .price {
      display: flex;
      align-items: center;

      &.topRated {
        justify-content: space-between;
      }

      h4 {
        font-weight: 500;
        margin-inline-end: 20px;
      }

      span.discount {
        font-size: 14px;
        text-decoration: line-through;
        color: var(--para);
        font-weight: 500;
      }
      span.topRated {
        font-size: 14px;
        display: inline-block;
        background: #00151412;
        color: #7c899f;
        border-radius: 2px;
        font-size: 10px;
        padding: 1px 5px;
      }
    }
  }

  ul.colors {
    display: flex;
    margin-top: 8px;

    li {
      button {
        margin-inline: 2px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: inline-block;
        opacity: 0.4;

        &.active {
          opacity: 1;
        }
      }
    }
  }

  .sellPercentage {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .v-progress-linear {
      left: 45% !important;
      width: 90%;
      .v-progress-linear__content {
        h5 {
          font-size: 12px;
        }
      }
    }
  }

  // Fixed Section
  .flash {
    position: absolute;
    top: 0;
    left: 0;
    background: #fad73b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 10px 0 0 0;

    h5 {
      color: black;
      font-size: 13px;
    }
  }

  .isFavorite {
    position: absolute;
    bottom: 15px;
    right: 15px;
    background: #ffffffa1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;

    &:hover,
    &.active {
      svg.icon {
        color: #ed0000;
      }
    }

    svg.icon {
      margin-top: 2px;
      font-size: 34px;
      color: #464646;
    }
  }
}
</style>
