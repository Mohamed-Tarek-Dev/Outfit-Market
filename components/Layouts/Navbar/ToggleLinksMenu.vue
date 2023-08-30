<template>
  <div class="toggleMenu" @click="show = !show">
    <Icon name="mdi:format-list-bulleted" />

    <side-menu :show="show" @close="show = false">
      <!-- <Logo /> -->

      <!-- <div class="actions">
        <switch-language></switch-language>

        <base-button v-if="!user.token" link to="/authentication/login">
          login
        </base-button>
      </div> -->
    </side-menu>
  </div>
</template>

<script setup>
const props = defineProps(["links"]);

const show = ref(false);

const user = ref({ token: true });
</script>

<style lang="scss">
.theNav {
  .toggleMenu {
    display: none;

    svg.icon {
      font-size: 25px;
    }
  }
}
</style>
