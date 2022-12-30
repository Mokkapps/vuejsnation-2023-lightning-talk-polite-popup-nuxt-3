<template>
  <div
    v-if="visible"
    class="
      fixed
      z-50
      right-0
      bottom-0
      md:right-5 md:bottom-5
      p-4
      rounded-md
      shadow-lg
      bg-gray-300
      shadow-lg
    "
  >
    <span>May I show you something cool?</span>
    <div class="flex gap-4 mt-4">
      <button @click="onClickOk" class="bg-gray-100 p-4 rounded-md">OK</button>
      <button @click="onClickClose" class="bg-gray-100 p-4 rounded-md">
        Nah, thanks
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setClosed, visible } = usePolitePopup();

const onClickOk = async () => {
  setClosed();
  navigateTo('/newsletter');
};

const onClickClose = () => {
  setClosed();
};
</script>
