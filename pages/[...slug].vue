<template>
  <main>
    <ContentDoc />
    <PolitePopupDebugInfo v-if="route.path === '/vue'" />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const { trigger } = usePolitePopup();

if (route.path === "/vue") {
  trigger();
}
</script>
