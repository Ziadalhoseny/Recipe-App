<template>
  <div class="flex min-h-screen flex-col bg-white text-dire-wolf">
    <TheHeader />
    <slot />
  </div>
</template>

<script setup>
import TheHeader from "~/components/layouts/TheHeader.vue";
</script>
