<script lang="ts" setup>
const { setSubscribed } = usePolitePopup();
</script>

<template>
  <div class="flex">
    <input type="text" placeholder="Your email..." />
    <button @click="setSubscribed">Subscribe</button>
  </div>
</template>

<style scoped></style>
