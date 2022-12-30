<template>
  <main class="flex flex-col gap-8">
    <NuxtLink to="/">Back home</NuxtLink>
    <button @click="setSubscribed">Subscribe</button>
  </main>
</template>

<script setup lang="ts">
const { setSubscribed } = usePolitePopup();
</script>
