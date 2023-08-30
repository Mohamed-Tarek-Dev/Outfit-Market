<template>
  <div class="product_info">
    <p class="para lg">{{ product.desc }}</p>

    <div class="rate">
      <div class="stars">
        <VueRate :length="5" :value="3" :showcount="true" :readonly="true" />
      </div>
      <div class="reviews">({{ product.reviews }}) Reviews</div>
    </div>

    <h3>{{ product.price }} EGP</h3>

    <div class="colors_sizes my-3">
      <div class="colors" v-if="product.colors && product.colors.length > 0">
        <span class="d-block mb-1">Select Color</span>
        <ul>
          <li v-for="color in product.colors" :key="color.id">
            <button
              aria-label="change-color"
              :style="{ background: color.color }"
              :class="{ active: current_color.id == color.id }"
            ></button>
          </li>
        </ul>
      </div>
      <div class="sizes" v-if="product.sizes && product.sizes.length > 0">
        <span class="d-block mb-1">Select Size</span>
        <ul>
          <li v-for="size in product.sizes" :key="size.id">
            <button
              aria-label="change-color"
              :class="{ active: current_size.id == size.id }"
            >
              <span> {{ size.size.toUpperCase() }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="cart">
      <div class="quantity">
        <button @click="desired_quantity--">
          <Icon name="ic:twotone-minus" />
        </button>
        <span class="value">{{ desired_quantity }}</span>
        <button @click="desired_quantity++">
          <Icon name="material-symbols:add" />
        </button>
      </div>

      <BaseButton class="add with_icon lg"
        ><Icon name="circum:shopping-cart" /> Add To Cart</BaseButton
      >
    </div>

    <div class="shipping">
      <h3>Shipping To Egypt</h3>
      <div class="desc">
        <nuxt-img
          src="/icons/shipe.png"
          preset="default"
          width="30"
          height="30"
        />

        <p>
          free express shipping on orders over 2500 egp estimated to be
          delivered on 2022/09/15 - 2022/09/30
        </p>
      </div>
    </div>

    <div class="info">
      <h3>Description</h3>

      <div class="key_values">
        <div class="key_value">
          <span class="key">Quantity</span>
          <span class="value">{{ desired_quantity }}</span>
        </div>
        <div class="key_value" v-if="current_color">
          <span class="key">Color</span>
          <span class="value">{{ current_color.name }}</span>
        </div>
        <div class="key_value">
          <span class="key">Style</span>
          <span class="value">{{ product.style }}</span>
        </div>
        <div class="key_value">
          <span class="key">Pattern Type</span>
          <span class="value">{{ product.pattern_type }}</span>
        </div>
        <div class="key_value">
          <span class="key">Material</span>
          <span class="value">{{ product.material }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["product"]);

const desired_quantity = ref(1);

const current_color = ref(null);
const current_size = ref(props.product?.sizes[1]);
if (props.product.colors) {
  current_color.value = props.product.colors[0];
}
</script>

<style lang="scss" scoped>
.product_info {
  .rate {
    display: flex;
    align-items: center;
    .reviews {
      margin-inline-start: 15px;
      font-size: 15px;
      margin-bottom: -5px;
    }
  }

  .colors_sizes {
    display: flex;
    justify-content: space-between;

    .colors {
      ul {
        display: flex;

        li {
          button {
            margin-inline: 2px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            display: inline-block;
            opacity: 0.4;

            &.active {
              opacity: 1;
            }
          }
        }
      }
    }

    .sizes {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          margin-inline: 6px;
          width: 25px;
          height: 25px;
          border: 1px solid var(--border);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.1s linear;
          border-radius: 7px;

          span {
            display: inline-block;
            font-size: 14px;
          }

          &.active,
          &:hover {
            border-color: var(--app_color);
            background: var(--app_color);
            color: #fff;
          }
        }
      }
    }
  }

  .cart {
    display: flex;
    .quantity {
      background-color: var(--filter_bg);
      display: flex;
      align-items: center;
      margin-inline-end: 15px;
      padding: 10px 15px;
      border-radius: 10px;

      span.value {
        margin-inline: 15px;
      }
      button {
        background-color: var(--main_bg);
        width: 23px;
        height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }
    }

    button.add {
      flex-grow: 1;
    }
  }

  .shipping {
    background: var(--filter_bg);
    margin-block: 20px;
    border-radius: 10px;
    padding: 10px 15px;

    h3 {
      font-weight: 500;
    }

    .desc {
      display: flex;
      align-items: center;

      img {
        margin-inline-end: 10px;
      }

      p {
        font-size: 16px;
      }
    }
  }

  .info {
    background: var(--filter_bg);
    margin-block: 20px;
    border-radius: 10px;
    padding: 15px;

    h3 {
      font-weight: 500;
    }

    .key_values {
      .key_value {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 7px;

        &:first-child {
          border-radius: 8px 8px 0 0;
        }
        &:last-child {
          border-radius: 0 0 8px 8px;
        }

        &:nth-child(even) {
          background: var(--filter_active_bg);
        }
        &:nth-child(odd) {
          background: var(--filter_active_bg-hover);
        }
        .key {
        }
        .value {
        }
      }
    }
  }
}
</style>
