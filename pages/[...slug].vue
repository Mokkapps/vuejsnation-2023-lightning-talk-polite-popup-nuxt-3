<template>
  <main>
    <ContentDoc />
    <PolitePopupDebugInfo />
  </main>
</template>

<script setup lang="ts">
const route = useRoute();

const { trigger } = usePolitePopup();

if (route.path === "/vue") {
  trigger();
}
</script>
