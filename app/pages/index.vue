<template>
  <main>
    <section class="overflow-hidden bg-cream">
      <div
        class="container flex flex-col items-center gap-10 pt-8 pb-12 lg:flex-row lg:pt-12 lg:pb-16"
      >
        <div class="order-2 flex-1 text-center lg:order-1 lg:text-left">
          <p
            class="mb-4 font-semibold uppercase tracking-[0.18em] text-soft-teal"
          >
            <span
              aria-hidden="true"
              class="mr-3 inline-block h-1.5 w-10 rounded-full bg-coral align-middle"
            />
            A little inspiration for your table
          </p>
          <h1
            class="mb-6 text-balance text-4xl font-extrabold leading-tight text-teal lg:text-6xl"
          >
            Make something delicious today.
          </h1>
          <p
            class="mb-8 text-balance text-lg leading-relaxed text-soft-teal lg:text-xl"
          >
            Discover approachable recipes and find your new favorite way to
            cook.
          </p>
          <BaseBtn
            to="#popular-recipes"
            label="Browse recipes"
            class="border-2 border-coral"
          />
        </div>
        <div class="order-1 flex-1 lg:order-2">
          <NuxtImg
            densities="x1"
            sizes="xs:100vw sm:667px"
            format="webp"
            src="/W.png"
            alt=""
            class="mx-auto w-full max-w-xl drop-shadow-xl lg:translate-y-14"
          />
        </div>
      </div>
    </section>
    <section id="popular-recipes" class="container py-16 lg:py-20">
      <div class="mb-8">
        <p
          class="mb-2 font-semibold uppercase tracking-[0.16em] text-soft-teal"
        >
          Find your next favorite
        </p>
        <h2 class="mb-3 text-3xl font-bold text-teal lg:text-4xl">
          Popular recipes
        </h2>
        <p class="text-lg text-soft-teal">
          Tried-and-loved ideas to bring something special to your table.
        </p>
      </div>
      <div
        v-if="error"
        class="rounded-xl border border-coral/30 bg-coral/10 p-5 text-soft-teal"
        role="alert"
      >
        We couldn’t load the recipes right now. Please try again later.
      </div>
      <div
        v-else-if="pending"
        class="rounded-xl bg-cream p-8 text-center text-soft-teal"
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
      <p v-else class="rounded-xl bg-cream p-8 text-center text-soft-teal">
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
