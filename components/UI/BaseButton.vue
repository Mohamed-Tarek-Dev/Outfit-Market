<template>
  <button
    class="base_button"
    v-if="!props.to"
    aria-label="forget to set it"
    v-bind:="$attrs"
    :class="{
      disabled: props.disabled || props.loading,
      loading: props.loading,
    }"
  >
    <span v-if="props.loading" class="btn_loader"></span>
    <slot></slot>
  </button>

  <NuxtLink
    class="base_button"
    aria-label="forget to set it"
    v-bind:="$attrs"
    v-else
    :to="props.to"
    name="Profile Page"
  >
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: false,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
});
</script>

<style lang="scss">
@keyframes rotation {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

body {
  button.base_button,
  a.base_button {
    position: relative;
    text-decoration: none;
    padding: 0.1em 0.7em;
    font-size: 18px;
    display: inline-block;
    border-radius: 5px;
    color: #fff !important;
    font-weight: bold;
    background: #339989;
    transition: all 0.2s linear;
    font-family: inherit;
    cursor: pointer;
    margin-inlin &.loading {
      padding: 0.1em 1.9em;
    }

    .btn_loader {
      position: absolute;
      left: 10px;
      top: 27%;
      width: 20px;
      height: 20px;
      padding: 2px;
      border: 3px dotted var(--main);
      border-style: solid solid dotted dotted;
      border-radius: 50%;
      transition: all 0.6s ease-in-out;
      display: inline-block;
      animation: rotation 1.5s linear infinite;
    }

    &.md {
      padding: 0.2em 0.9em;

      &.loading {
        padding: 0.2em 1.9em;
      }
    }

    &.lg {
      padding: 0.4em 2em;
    }

    &.with_icon {
      display: flex;
      justify-content: center;
      align-items: center;

      svg.icon {
        margin-inline: 5px !important;
      }
    }

    &.disabled {
      pointer-events: none;
      color: #fff;
      border-color: gray;
      background: gray;
    }

    &.block_center {
      display: block;
      margin: 20px auto;
      width: fit-content;
    }

    &.flat {
      border: none;
      border-radius: 0;
    }

    &:hover,
    &:active {
      background-color: var(--app_color_hover);
    }
  }
}
</style>
