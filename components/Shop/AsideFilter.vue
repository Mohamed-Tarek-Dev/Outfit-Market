<template>
  <aside class="asideFilters">
    <h4 class="sort_head">Sort By</h4>
    <ul class="checks">
      <li v-for="check in checks" :key="check.id">
        <v-checkbox
          v-model="filter.checkboxes"
          :label="check.title"
          :value="check.title"
          color="primary"
          hide-details=""
        ></v-checkbox>
      </li>
    </ul>

    <hr />

    <h4 class="sort_head">Color</h4>
    <ul class="colors">
      <li
        :class="{ active: filter.color.id == color.id }"
        @click="filter.color = color"
        v-for="color in colors"
        :key="color.id"
        :style="{ background: color.value }"
      ></li>
    </ul>

    <hr />

    <h4 class="sort_head mb-10">Price Range (EGP)</h4>
    <v-range-slider
      :max="2000"
      :step="10"
      :min="50"
      color="primary"
      thumb-label="always"
      v-model="filter.rangePrice"
    ></v-range-slider>

    <v-tooltip
      theme="light"
      text="Reset Filter"
      location="bottom"
      aria-label="Reset Filter"
    >
      <template v-slot:activator="{ props }">
        <div
          :class="[useHelpers().dir()]"
          class="reset_btn"
          v-bind="props"
          @click="reset_filter"
        >
          <Icon name="material-symbols:format-color-reset" />
        </div>
      </template>
    </v-tooltip>
  </aside>
</template>

<script setup>
const emits = defineEmits(["alter_data"]);

const reset_filter = () => {
  filter.value = {
    checkboxes: [],
    rangePrice: [500, 1400],
    color: "",
  };
};

const filter = ref({
  checkboxes: [],
  rangePrice: [500, 1400],
  color: "",
});

const checks = ref([
  {
    id: 1,
    title: "Sleeveless",
  },
  {
    id: 1,
    title: "Half Sleeve",
  },
  {
    id: 1,
    title: "Cap Sleeve",
  },
  {
    id: 1,
    title: "Short Sleeve",
  },
  {
    id: 1,
    title: "Long Sleeve",
  },
  {
    id: 1,
    title: "Extra Long Sleeve",
  },
]);

const colors = ref([
  {
    id: 1,
    value: "#3578BC",
  },
  {
    id: 2,
    value: "#D22425",
  },
  {
    id: 3,
    value: "#FF8EBA",
  },
  {
    id: 4,
    value: "#A85430",
  },
  {
    id: 5,
    value: "#001514",
  },
  {
    id: 6,
    value: "#DCA957",
  },
  {
    id: 7,
    value: "#398352",
  },
  {
    id: 8,
    value: "#AB65D5",
  },
  {
    id: 9,
    value: "#FECD4D",
  },
  {
    id: 10,
    value: "#FFFFFF",
  },
  {
    id: 11,
    value: "#B4B4B4",
  },
  {
    id: 12,
    value: "#FF7D4C",
  },
]);

watch(
  filter,
  () => {
    emits("alter_data", filter.value);
  },
  { deep: true }
);
</script>

<style lang="scss">
.asideFilters {
  background: var(--filter_active_bg);
  border-radius: 10px;
  padding: 15px 15px 15px 5px;
  position: relative;

  &.sideMenue {
    border-radius: 0;
    background: unset;

    .reset_btn {
      right: 50% !important;

      top: 10px;
      svg.icon {
        font-size: 25px;
      }
    }
  }

  h4 {
    font-weight: 500;
    font-size: 18px;
    padding-inline-start: 10px;
  }

  hr {
    display: block;
    margin: 20px auto;
    width: 70%;
  }

  ul.checks {
    .v-checkbox {
      .v-selection-control {
        min-height: unset;
        label.v-label {
          opacity: 1 !important;
        }
      }
    }
  }

  ul.colors {
    display: flex;
    flex-wrap: wrap;
    padding-inline-start: 10px;

    li {
      cursor: pointer;
      margin-block: 10px;
      margin-inline-end: 10px;
      width: 23px;
      height: 23px;
      border-radius: 2px;

      &.active {
        border: 5px solid var(--main_bg);
      }
    }
  }

  .reset_btn {
    position: absolute;
    top: 0;

    &.ltr {
      right: 5px;
    }
    &.rtl {
      left: 5px;
    }

    svg.icon {
      color: crimson;
    }
  }

  .v-slider-thumb__label {
    div {
      color: #fff !important;
    }
  }
}
</style>
