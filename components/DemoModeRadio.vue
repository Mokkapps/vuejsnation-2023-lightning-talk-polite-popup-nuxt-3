<script lang="ts" setup>
import { DemoMode } from '~/composables/useDemoMode';

const { demoMode, updateMode } = useDemoMode();

const inputModel = computed({
  get() {
    return demoMode.value;
  },
  set(newValue: DemoMode) {
    updateMode(newValue);
  },
});
</script>

<template>
  <div>
    <input type="radio" id="one" value="impolite-popup" v-model="inputModel" />
    <label for="one">Mode 1</label>

    <input type="radio" id="two" value="polite-popup" v-model="inputModel" />
    <label for="two">Mode 2</label>
  </div>
</template>

<style scoped></style>
