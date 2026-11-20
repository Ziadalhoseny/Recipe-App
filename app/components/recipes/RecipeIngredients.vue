<template>
  <section class="mb-10 rounded-2xl bg-white p-6 shadow-sm sm:p-8">
    <h2 class="mb-5 text-2xl font-bold text-dire-wolf sm:text-3xl">
      Ingredients
    </h2>
    <ul class="grid grid-cols-1 gap-3 text-base sm:grid-cols-2 sm:text-lg">
      <li v-for="(ingredient, index) in ingredients" :key="`${index}-${ingredient}`">
        <label
          class="group flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-amber-50"
        >
          <input
            class="peer sr-only"
            type="checkbox"
            :aria-label="`Mark ${ingredient} as prepared`"
          />
          <span
            aria-hidden="true"
            class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-dodgeroll-gold transition-colors after:h-3 after:w-3 after:scale-0 after:rounded-full after:bg-dodgeroll-gold after:transition-transform peer-checked:after:scale-100 peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-dodgeroll-gold"
          />
          <span class="transition-colors peer-checked:text-gray-500 peer-checked:line-through">
            {{ ingredient }}
          </span>
        </label>
      </li>
    </ul>
  </section>
</template>

<script setup>
defineProps({
  ingredients: {
    type: Array,
    required: true,
  },
});
</script>
