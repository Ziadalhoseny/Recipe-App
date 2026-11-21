<template>
  <article
    class="flex h-full flex-col overflow-hidden rounded-2xl border border-teal/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
  >
    <div class="relative">
      <NuxtImg
        :src="recipe.image"
        sizes="xs:100vw sm:50vw lg:400px"
        format="webp"
        densities="x1"
        class="aspect-[4/3] w-full object-cover"
        :alt="recipe.name"
      />
      <BaseBtn
        variant="icon"
        class="absolute right-4 top-4 rounded-full bg-white/95 shadow-md"
        :aria-label="
          isRecipeSaved
            ? `Remove ${recipe.name} from saved recipes`
            : `Save ${recipe.name}`
        "
        :aria-pressed="isRecipeSaved"
        :title="isRecipeSaved ? 'Remove from saved recipes' : 'Save recipe'"
        @click="toggleSaved(recipe)"
      >
        <Icon
          :name="isRecipeSaved ? 'mdi:bookmark' : 'mdi:bookmark-outline'"
          class="h-6 w-6"
          aria-hidden="true"
        />
      </BaseBtn>
    </div>
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <h3 class="mb-4 text-xl font-bold text-teal lg:text-2xl">
        {{ recipe.name }}
      </h3>
      <div
        class="mb-5 mt-auto flex flex-wrap gap-x-6 gap-y-3 text-sm text-teal/75"
      >
        <div class="flex items-center gap-2">
          <Icon
            name="mdi:clock-time-eight-outline"
            class="text-coral"
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
            class="text-coral"
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
            class="text-coral"
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
import { computed } from "vue";
import BaseBtn from "./BaseBtn.vue";
import { useSavedRecipes } from "~/composables/useSavedRecipes";

const props = defineProps({
  recipe: {
    type: Object,
    required: true,
  },
});

const { isSaved, toggleSaved } = useSavedRecipes();
const isRecipeSaved = computed(() => isSaved(props.recipe.id));
</script>
