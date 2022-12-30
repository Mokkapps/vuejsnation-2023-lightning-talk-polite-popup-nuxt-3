<template>
  <main>
    <ContentDoc />
    <PolitePopupDebugInfo/>
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const { trigger, debugOptions } = usePolitePopup();

if (route.path === '/vue') {
  trigger();
}
</script>
