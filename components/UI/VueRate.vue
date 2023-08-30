<template>
  <rate />
</template>

<script setup></script>

<style lang="scss">
.Rate {
  display: flex;
  align-items: center;

  .Rate__star {
    padding: 0 !important;

    .icon {
      width: 13px;
      height: 13px;
      margin: 0 2px !important;
    }
  }
  .Rate__view {
    font-size: 13px;
    margin-top: 3px;
    margin-inline-start: 7px;

    .count {
      padding: 0;
      font-weight: bold;
    }
  }
}
</style>
