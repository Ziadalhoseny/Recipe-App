<template>
  <main class="container flex-1 py-16 lg:py-20">
    <header class="mb-8">
      <p class="mb-2 font-semibold uppercase tracking-[0.16em] text-soft-teal">
        Your collection
      </p>
      <h1 class="text-3xl font-bold text-teal lg:text-4xl">
        Saved recipes
      </h1>
    </header>

    <p
      v-if="!isInitialized"
      class="rounded-xl bg-cream p-8 text-center text-soft-teal"
      role="status"
    >
      Loading your saved recipes…
    </p>

    <template v-else>
      <div
        v-if="savedRecipes.length"
        class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <BaseCard
          v-for="recipe in savedRecipes"
          :key="recipe.id"
          :recipe="recipe"
        />
      </div>

      <section
        v-else
        class="rounded-2xl bg-cream px-6 py-12 text-center sm:px-10"
        aria-labelledby="saved-empty-heading"
      >
        <Icon
          name="mdi:bookmark-outline"
          class="mx-auto mb-4 h-10 w-10 text-coral"
          aria-hidden="true"
        />
        <h2
          id="saved-empty-heading"
          class="mb-3 text-2xl font-bold text-teal"
        >
          No saved recipes yet
        </h2>
        <p class="mx-auto mb-6 max-w-lg text-soft-teal">
          Save recipes you’d like to make later and they’ll be waiting for you
          here.
        </p>
        <BaseBtn :to="{ name: 'index' }" label="Explore recipes" />
      </section>
    </template>
  </main>
</template>

<script setup>
import BaseBtn from "~/components/UI/BaseBtn.vue";
import BaseCard from "~/components/UI/BaseCard.vue";
import { useSavedRecipes } from "~/composables/useSavedRecipes";

const { savedRecipes, isInitialized } = useSavedRecipes();

useSeoMeta({
  title: "Saved recipes",
  description: "Return to the recipes you’ve saved for later on RecipeGo.",
  ogTitle: "Saved recipes",
  ogDescription: "Your personal collection of recipes to cook next.",
  ogType: "website",
});
</script>
