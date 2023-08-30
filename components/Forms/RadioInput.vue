<template>
  <v-radio-group @change="updateValue($event)" :value="value">
    <label>{{ label }}</label>
    <v-radio
      v-for="radio in items"
      class="radio"
      :key="radio.id"
      :label="radio.name"
      :value="radio.value"
    ></v-radio>
  </v-radio-group>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: false,
  },
  items: {
    required: true,
    type: Array,
  },
  label: {
    required: false,
    default: "Choose Prefrence",
    type: String,
  },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};
</script>

<style lang="scss" scoped>
label {
  font-weight: bold;
  font-size: 17px;
  margin-inline-start: 10px;
  margin-bottom: 5px;
  color: var(--app_color);
}
</style>
