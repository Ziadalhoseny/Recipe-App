<template>
  <section class="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <h2 class="mb-5 text-2xl font-bold text-teal sm:text-3xl">
      Instructions
    </h2>
    <ol class="flex flex-col gap-5 text-base sm:text-lg">
      <li
        v-for="(instruction, index) in instructions"
        :key="`${index}-${instruction}`"
        class="flex items-start gap-4"
      >
        <span
          class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-sm font-bold text-cream"
        >
          {{ index + 1 }}
        </span>
        <span class="flex-1 leading-relaxed">{{ instruction }}</span>
      </li>
    </ol>
  </section>
</template>

<script setup>
defineProps({
  instructions: {
    type: Array,
    required: true,
  },
});
</script>
