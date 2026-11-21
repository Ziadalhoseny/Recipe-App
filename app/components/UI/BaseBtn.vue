<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    v-bind="$attrs"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

defineOptions({
  inheritAttrs: false,
});

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
  "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2",
  {
    "bg-coral px-5 py-3 text-gray-950 shadow-sm hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-60":
      props.variant === "primary",
    "px-2 py-2 text-sm text-coral hover:bg-coral/10":
      props.variant === "nav",
    "gap-2 text-coral hover:bg-coral/10":
      props.variant === "brand",
    "h-10 w-10 p-2 text-coral hover:bg-coral/10":
      props.variant === "icon",
  },
]);
</script>
