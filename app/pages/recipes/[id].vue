<template>
  <main class="container max-w-screen-lg py-12 sm:py-16">
    <p
      v-if="pending"
      class="rounded-xl bg-cream p-8 text-center text-soft-teal"
      role="status"
    >
      Loading recipe…
    </p>
    <p
      v-else-if="error"
      class="rounded-xl border border-coral/30 bg-coral/10 p-5 text-soft-teal"
      role="alert"
    >
      We couldn’t load this recipe right now. Please try again later.
    </p>
    <article v-else-if="recipe" class="overflow-hidden">
      <header class="mb-7">
        <p
          class="mb-3 font-semibold uppercase tracking-[0.16em] text-soft-teal"
        >
          {{ recipe.cuisine }} recipe
        </p>
        <h1 class="mb-5 text-4xl font-extrabold text-teal sm:text-5xl">
          {{ recipe.name }}
        </h1>
        <div
          class="flex flex-wrap gap-x-6 gap-y-3 text-sm text-teal/75 sm:text-base"
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
              ><span class="sr-only">Rating and reviews: </span
              >{{ recipe.rating }} ({{ recipe.reviewCount }} reviews)</span
            >
          </div>
        </div>
      </header>

      <NuxtImg
        :src="recipe.image"
        densities="x1"
        sizes="xs:100vw sm:100vw md:100vw lg:100vw"
        class="mb-10 max-h-[500px] w-full rounded-2xl object-cover shadow-sm"
        :alt="recipe.name"
      />

      <RecipeIngredients :ingredients="recipe.ingredients" />
      <RecipeInstructions :instructions="recipe.instructions" />
    </article>
    <p
      v-else-if="!recipe"
      class="rounded-xl bg-cream p-8 text-center text-soft-teal"
      role="status"
    >
      This recipe could not be found.
    </p>
  </main>
</template>

<script setup>
import { computed } from "vue";
import RecipeIngredients from "~/components/recipes/RecipeIngredients.vue";
import RecipeInstructions from "~/components/recipes/RecipeInstructions.vue";

const route = useRoute();
const recipeId = computed(() => String(route.params.id));
const {
  data: recipe,
  error,
  pending,
} = await useFetch(() => `https://dummyjson.com/recipes/${recipeId.value}`);

if (error.value) {
  throw createError({
    statusCode: error.value.statusCode || 500,
    statusMessage: error.value.statusMessage || "Unable to load recipe",
  });
}

if (!recipe.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Recipe not found",
  });
}

const requestUrl = useRequestURL();
const pageTitle = computed(() => recipe.value?.name || "Recipe");
const pageDescription = computed(() =>
  recipe.value
    ? `Learn how to make ${recipe.value.name} with this easy RecipeGo recipe.`
    : "Explore recipes and cooking inspiration from RecipeGo.",
);
const pageUrl = computed(
  () => new URL(`/recipes/${recipeId.value}`, requestUrl.origin).href,
);

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogImage: computed(() => recipe.value?.image || ""),
  ogUrl: pageUrl,
  ogType: "article",
});
</script>
