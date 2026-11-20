<template>
  <main
    class="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center"
  >
    <h1 class="mb-2 text-7xl font-extrabold text-dire-wolf sm:text-8xl">
      {{ error.statusCode }}
    </h1>
    <p class="mb-8 text-xl text-gray-600 sm:text-2xl">
      {{ error.statusMessage || "Something went wrong." }}
    </p>
    <BaseBtn :to="{ name: 'index' }" label="Go home" />
  </main>
</template>

<script setup>
import BaseBtn from "~/components/UI/BaseBtn.vue";

defineProps({
  error: {
    type: Object,
    required: true,
  },
});
</script>
