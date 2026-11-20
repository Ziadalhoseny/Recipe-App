<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-lg"
  >
    <NuxtImg
      :src="recipe.image"
      sizes="xs:100vw sm:50vw lg:400px"
      format="webp"
      densities="x1"
      class="aspect-[4/3] w-full object-cover"
      :alt="recipe.name"
    />
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <h3 class="mb-4 text-xl font-bold text-dire-wolf lg:text-2xl">
        {{ recipe.name }}
      </h3>
      <div
        class="mb-5 mt-auto flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-600"
      >
        <div class="flex items-center gap-2">
          <Icon
            name="mdi:clock-time-eight-outline"
            class="text-dodgeroll-gold"
            aria-hidden="true"
          />
          <span
            ><span class="sr-only">Cook time: </span
            >{{ recipe.cookTimeMinutes }} min</span
          >
        </div>
        <div class="flex items-center gap-2">
          <Icon
            name="mdi:fire"
            class="text-dodgeroll-gold"
            aria-hidden="true"
          />
          <span
            ><span class="sr-only">Calories per serving: </span
            >{{ recipe.caloriesPerServing }} cal</span
          >
        </div>
        <div class="flex items-center gap-2">
          <Icon
            name="mdi:star"
            class="text-dodgeroll-gold"
            aria-hidden="true"
          />
          <span
            ><span class="sr-only">Rating: </span>{{ recipe.rating }} ({{
              recipe.reviewCount
            }})</span
          >
        </div>
      </div>
      <BaseBtn :to="`/recipes/${recipe.id}`" :label="`View ${recipe.name}`" />
    </div>
  </article>
</template>

<script setup>
import BaseBtn from "./BaseBtn.vue";

defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});
</script>
