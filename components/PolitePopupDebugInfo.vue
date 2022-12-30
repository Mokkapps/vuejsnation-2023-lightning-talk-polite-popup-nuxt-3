<template>
  <div
    class="fixed z-50 left-0 bottom-0 p-4 rounded-md shadow-lg bg-slate-400 shadow-lg"
  >
    <div class="flex gap-4">
      <div>
        <input
          type="checkbox"
          disabled
          v-model="debugInfo.readTimeElapsed"
          name="readTimeElapsed"
        />
        <label for="readTimeElapsed">Read time elapsed</label>
      </div>
      <div>
        <input
          type="checkbox"
          disabled
          v-model="debugInfo.scrolledContent"
          name="scrolledContent"
        />
        <label for="scrolledContent">Content scrolled</label>
      </div>
      <span>{{ debugInfo.amountScrolledInPercentage }}% scrolled</span>
      {{ debugInfo.storedData }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { debugInfo } = usePolitePopup();
</script>
