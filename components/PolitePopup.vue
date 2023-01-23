<template>
  <div
    v-if="visible"
    class="
      fixed
      z-50
      left-0
      bottom-0
      md:left-5 md:bottom-5
      p-4
      rounded-xl
      shadow-2xl
      bg-white
    "
  >
    <span class="text-xl"
      >Hey, I've been cooking up something cool. Want to get a peek?</span
    >
    <div class="flex gap-4 mt-4">
      <button
        @click="onClickOk"
        class="
          text-lg
          font-bold
          border-0
          bg-transparent
          hover:bg-gray-100
          rounded-md
          p-4
          text-black
          cursor-pointer
        "
      >
        Yeah, sure
      </button>
      <button
        @click="onClickClose"
        class="
          text-lg
          border-0
          bg-transparent
          hover:bg-gray-100
          rounded-md
          p-4
          text-gray-600
          cursor-pointer
        "
      >
        No, thanks
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
