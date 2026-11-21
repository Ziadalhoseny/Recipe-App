<template>
  <header class="border-b border-coral bg-cream">
    <nav
      class="container flex min-h-20 items-center"
      aria-label="Main navigation"
    >
      <BaseBtn :to="{ name: 'index' }" variant="brand">
        <NuxtImg
          width="48"
          format="webp"
          densities="x1"
          src="/icon-green.png"
          alt=""
          class="h-10 w-10"
        />
        <span class="text-2xl font-bold">RecipeGo</span>
      </BaseBtn>
      <ul class="ml-auto flex items-center gap-2 sm:gap-4">
        <li>
          <BaseBtn to="/" variant="nav">Home</BaseBtn>
        </li>
        <li>
          <BaseBtn :to="{ name: 'about' }" variant="nav">About</BaseBtn>
        </li>
        <li>
          <BaseBtn :to="{ name: 'saved-recipes' }" variant="nav">Saved</BaseBtn>
        </li>
      </ul>
    </nav>
    <p
      v-if="storageError"
      class="border-t border-coral/30 bg-coral/10 px-4 py-2 text-center text-sm text-soft-teal"
      role="status"
    >
      {{ storageError }}
    </p>
  </header>
</template>

<script setup>
import BaseBtn from "~/components/UI/BaseBtn.vue";
import { useSavedRecipes } from "~/composables/useSavedRecipes";

const { storageError } = useSavedRecipes();
</script>
