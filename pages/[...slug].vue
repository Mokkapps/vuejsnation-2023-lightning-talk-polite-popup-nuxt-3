<template>
  <main>
    <ContentDoc />
    <PolitePopupDebugInfo
      v-if="route.path === '/vue' && demoMode === 'polite-popup'"
    />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const { demoMode } = useDemoMode();
const { trigger } = usePolitePopup();

if (route.path === '/vue') {
  trigger();
}
</script>
