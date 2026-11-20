<template>
  <main>
    <section class="container py-16 lg:py-20">
      <p class="mb-3 font-semibold uppercase tracking-[0.16em] text-apple-green">
        Our kitchen
      </p>
      <h1 class="mb-6 text-balance text-4xl font-extrabold text-dire-wolf sm:text-5xl">
        About RecipeGo
      </h1>
      <p class="max-w-screen-lg text-balance text-xl leading-relaxed text-gray-600">
        RecipeGo is a recipe application based on the DummyJSON API, created
        by Ziad Alhoseny with <span class="font-semibold text-apple-green">Nuxt.</span>
      </p>
    </section>
  </main>
</template>

<script setup>
const requestUrl = useRequestURL();

useSeoMeta({
  title: "About RecipeGo",
  description:
    "Learn about RecipeGo, a recipe discovery app built with Nuxt to make finding your next meal easier.",
  ogTitle: "About RecipeGo",
  ogDescription:
    "Meet RecipeGo and discover approachable cooking inspiration.",
  ogUrl: new URL("/about", requestUrl.origin).href,
  ogType: "website",
});
</script>
