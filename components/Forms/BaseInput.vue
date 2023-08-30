<template>
  <!-- =========== Text && Number && Email =========== -->
  <v-text-field
    v-if="
      type == 'text' || type == 'tel' || type == 'email' || type == 'number'
    "
    aria-label="forget to set it :D"
    name="forget to set it :D"
    v-bind:="$attrs"
    class="custom_input"
    :type="type"
    :class="[type]"
    :rules="allRules"
    :clearable="clearable"
    @click:clear="clearValue"
    @input="updateValue"
    :value="modelValue"
  >
    <template v-slot:append-inner>
      <slot name="appendInner"></slot>
    </template>
  </v-text-field>

  <!-- =========== Textarea =========== -->
  <v-textarea
    v-else-if="type == 'textarea'"
    v-bind:="$attrs"
    class="custom_input"
    :class="[type]"
    :rules="allRules"
    @input="updateValue"
    :value="modelValue"
    :clearable="clearable"
    @click:clear="clearValue"
    filled
  >
    <slot />
  </v-textarea>

  <!-- =========== Password =========== -->
  <v-text-field
    v-else-if="type == 'password'"
    v-bind:="$attrs"
    class="custom_input"
    :class="[type]"
    :rules="allRules"
    @input="updateValue"
    :value="modelValue"
    :clearable="clearable"
    :type="showPass ? 'text' : 'password'"
    :append-inner-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append-inner="showPass = !showPass"
    @click:clear="clearValue"
  >
    <slot />
  </v-text-field>

  <div class="wrong input type" v-else></div>
</template>

<script setup>
defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    required: true,
  },
  rules: {
    required: false,
    type: Array,
    default: () => [],
  },
  clearable: {
    required: false,
    default: true,
    type: Boolean,
  },
  type: {
    required: true,
    default: "text",
    type: String,
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
  // label: {
  //   required: false,
  //   default: "",
  //   type: String,
  // },
});

const emits = defineEmits(["update:modelValue"]);
const updateValue = (e) => {
  emits("update:modelValue", e.target.value);
};

const allRules = computed(() => {
  if (!props.required) {
    return [];
  }
  let default_rules = [
    (val) => {
      if (!val) {
        return "This field is required";
      } else {
        return true;
      }
    },
  ];

  return [...props.rules, ...default_rules];
});

const showPass = ref(false);

const clearValue = (e) => {
  emits("update:modelValue", null);
};
</script>

<style lang="scss">
.custom_input {
  .v-input {
    .v-input__control {
      .v-field {
        .v-field__overlay {
        }

        .v-field__loader {
        }
        .v-field__field {
          label {
          }

          input {
          }
        }

        .v-field__clearable {
        }

        .v-field__outline {
          .v-field__outline__start {
          }
          .v-field__outline__end {
          }
        }
      }
    }

    .v-input__details {
      .v-messages {
      }
    }
  }
}
</style>
