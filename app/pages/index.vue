<template>
  <main>
    <section class="overflow-hidden bg-amber-50">
      <div
        class="container flex flex-col items-center gap-10 py-16 lg:flex-row lg:py-24"
      >
        <div class="order-2 flex-1 text-center lg:order-1 lg:text-left">
          <p
            class="mb-4 font-semibold uppercase tracking-[0.18em] text-apple-green"
          >
            A little inspiration for your table
          </p>
          <h1
            class="mb-6 text-balance text-4xl font-extrabold leading-tight text-dire-wolf lg:text-6xl"
          >
            Make something delicious today.
          </h1>
          <p
            class="mb-8 text-balance text-lg leading-relaxed text-gray-600 lg:text-xl"
          >
            Discover approachable recipes and find your new favorite way to
            cook.
          </p>
          <BaseBtn to="#popular-recipes" label="Browse recipes" />
        </div>
        <div class="order-1 flex-1 lg:order-2">
          <NuxtImg
            densities="x1"
            sizes="xs:100vw sm:667px"
            format="webp"
            src="/nuxt-course-hero.png"
            alt="A colorful breakfast plate with avocado, egg, greens, and toast"
            class="mx-auto w-full max-w-xl drop-shadow-xl"
          />
        </div>
      </div>
    </section>
    <section id="popular-recipes" class="container py-16 lg:py-20">
      <div class="mb-8">
        <p
          class="mb-2 font-semibold uppercase tracking-[0.16em] text-apple-green"
        >
          Find your next favorite
        </p>
        <h2 class="mb-3 text-3xl font-bold text-dire-wolf lg:text-4xl">
          Popular recipes
        </h2>
        <p class="text-lg text-gray-600">
          Tried-and-loved ideas to bring something special to your table.
        </p>
      </div>
      <div
        v-if="error"
        class="rounded-xl border border-red-200 bg-red-50 p-5 text-red-800"
        role="alert"
      >
        We couldn’t load the recipes right now. Please try again later.
      </div>
      <div
        v-else-if="pending"
        class="rounded-xl bg-gray-50 p-8 text-center text-gray-600"
        role="status"
      >
        Loading recipes…
      </div>
      <div
        v-else-if="recipes.length"
        class="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-3"
      >
        <BaseCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
      </div>
      <p v-else class="rounded-xl bg-gray-50 p-8 text-center text-gray-600">
        No recipes are available at the moment.
      </p>
    </section>
  </main>
</template>

<script setup>
import { computed } from "vue";
import BaseCard from "~/components/UI/BaseCard.vue";
import BaseBtn from "~/components/UI/BaseBtn.vue";

const { data, error, pending } = await useFetch(
  "https://dummyjson.com/recipes",
);
const recipes = computed(() => data.value?.recipes ?? []);
const requestUrl = useRequestURL();

useSeoMeta({
  title: "Easy recipes for every kitchen",
  description:
    "Discover approachable recipes, helpful cooking instructions, and inspiration for your next meal with RecipeGo.",
  ogTitle: "Easy recipes for every kitchen",
  ogDescription:
    "Discover approachable recipes and find your new favorite way to cook.",
  ogImage: new URL("/nuxt-course-hero.png", requestUrl.origin).href,
  ogUrl: new URL("/", requestUrl.origin).href,
  ogType: "website",
});
</script>
