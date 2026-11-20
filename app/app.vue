<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const requestUrl = useRequestURL();

useHead({
  htmlAttrs: {
    lang: "en",
  },
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} | RecipeGo` : "RecipeGo",
});

useSeoMeta({
  description:
    "Find approachable recipes, helpful cooking instructions, and inspiration for your next meal with RecipeGo.",
  ogSiteName: "RecipeGo",
  ogImage: new URL("/nuxt-course-hero.png", requestUrl.origin).href,
  twitterCard: "summary_large_image",
});
</script>
