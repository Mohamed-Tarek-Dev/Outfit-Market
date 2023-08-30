<template>
  <div class="topFilter">
    <div class="main_categories">
      <ul class="categories">
        <li
          @click="changeMainCat(cat)"
          :class="{ active: currentCat.id == cat.id }"
          v-for="cat in categories"
          :key="cat.id"
        >
          {{ cat.title }}
          <div class="sub_categories">
            <ul class="categories">
              <li
                @click.stop="changeSubCat(sub_cat)"
                :class="{ active: currentSubCat.id == sub_cat.id }"
                v-for="sub_cat in cat.sub_cats"
                :key="sub_cat.id"
              >
                {{ sub_cat.title }}
              </li>
            </ul>
          </div>
        </li>
      </ul>

      <v-from
        class="d-md-block d-none search"
        @submit.prevent
        autocomplete="on"
      >
        <SearchInput
          v-model="search"
          name="search"
          hide-details
          single-line
          type="search"
          label="Search..."
          :rounded="false"
          append-inner-icon=""
        >
          <template #appendInner>
            <BaseButton aria-label="SUBSCRIBE" class="inputButton"
              ><Icon name="ph:magnifying-glass-bold"
            /></BaseButton>
          </template>
        </SearchInput>
      </v-from>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(["alter_data"]);

const API = useApis();
const { data: categories } = await API.GetTopFilters();

const search = ref(null);

const currentCat = ref(categories.value[0]);
const currentSubCat = ref(currentCat.value.sub_cats[0]);

const changeMainCat = (main_cat) => {
  currentCat.value = main_cat;
  currentSubCat.value = currentCat.value.sub_cats[0];
};

const changeSubCat = (sub_cat) => {
  currentSubCat.value = sub_cat;
};

watch([currentCat, currentSubCat, search], () => {
  emits("alter_data", {
    catId: currentCat.value.id,
    subCatId: currentSubCat.value.id,
    searchKeyword: search.value,
  });
});
</script>

<style lang="scss">
.topFilter {
  .main_categories {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--filter_bg);
    position: relative;

    ul.categories {
      display: flex;
      height: 100%;
      flex-wrap: wrap;

      li {
        display: block;
        height: 100%;
        padding: 10px 15px;
        transition: all 0.2s linear;

        &.active {
          background: var(--filter_active_bg);
          cursor: pointer;
        }
        &:hover {
          background: var(--filter_active_bg-hover);
          cursor: pointer;
        }
      }
    }

    .search {
      flex-grow: 1;
      max-width: 35vw;

      .v-field {
        padding-inline-end: 0 !important;
        box-shadow: 0 0 10px var(--shadow) !important;
        border: 1px solid var(--border) !important;
      }

      .inputButton {
        height: 100%;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .sub_categories {
      background: var(--filter_active_bg);
      position: absolute;
      top: 100%;
      width: 100%;
      left: 0;
      opacity: 0;
      visibility: hidden;
      transition: all 0.2s linear;

      &.active {
        opacity: 1;
        visibility: visible;
      }

      ul.categories {
        li {
          &.active,
          &:hover {
            background: var(--filter_active_bg-hover);
          }
        }
      }
    }

    & > ul.categories {
      li {
        &.active {
          & > .sub_categories {
            opacity: 1;
            visibility: visible;
          }
        }
      }
    }
  }
}
</style>
