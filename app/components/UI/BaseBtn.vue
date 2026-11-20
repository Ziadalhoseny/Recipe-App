<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  label: {
    type: String,
    default: "",
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: "button",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: "primary",
  },
});

const buttonClasses = computed(() => [
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dodgeroll-gold focus-visible:ring-offset-2",
  {
    "bg-dodgeroll-gold px-5 py-3 text-white shadow-sm hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-60":
      props.variant === "primary",
    "px-2 py-2 text-sm text-dire-wolf hover:text-apple-green":
      props.variant === "nav",
    "gap-2 text-dire-wolf hover:text-apple-green":
      props.variant === "brand",
  },
]);
</script>
