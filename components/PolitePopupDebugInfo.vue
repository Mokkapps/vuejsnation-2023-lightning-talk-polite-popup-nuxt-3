<template>
  <div
    class="
      w-36
      fixed
      flex flex-col
      gap-4
      z-50
      right-5
      top-10
      p-4
      rounded-md
      bg-[#10172A]
      text-white
      shadow-lg
    "
  >
    <span class="text-xl font-bold">Polite Popup</span>

    <div
      v-if="debugInfo.storedData.seenCount !== 0"
      class="flex flex-col gap-2"
    >
      <span v-if="debugInfo.storedData.status === 'subscribed'" class="text-xl"
        >You are subscribed, popup is not shown anymore.</span
      >
      <span v-else class="text-xl"
        >Since you've already seen the popup, no more will appear for
        today.</span
      >
      <button @click="resetLocalStorage" class="text-xl">Reset Demo</button>
    </div>
    <div v-else class="flex flex-col gap-4">
      <progress
        :value="readTimeCounterInSec"
        :max="config.timeoutInMs / 1000"
        :data-label="`${readTimeCounterInSec}s on page`"
      ></progress>
      <progress
        :value="debugInfo.amountScrolledInPercentage"
        :max="config.contentScrollThresholdInPercentage"
        :data-label="`${debugInfo.amountScrolledInPercentage}% scrolled`"
      ></progress>
    </div>
  </div>
</template>

<script setup lang="ts">
import { text } from 'stream/consumers';

const { debugInfo, config, resetLocalStorage } = usePolitePopup();

const { counter: readTimeCounterInSec, pause } = useInterval(1000, {
  controls: true,
});
</script>

<style scoped>
progress {
  position: relative;
  text-align: center;
  height: 2em;
  width: 100%;
  border: none;
}
progress::-webkit-progress-bar {
  background-color: white;
}
progress::-webkit-progress-value {
  background-color: #62cf2a !important;
}
progress:before {
  content: attr(data-label);
  font-size: 1.2em;
  color: black;
  vertical-align: 0;

  /*Position text over the progress bar */
  position: absolute;
  top: 2;
  left: 0;
  right: 0;
}
</style>
