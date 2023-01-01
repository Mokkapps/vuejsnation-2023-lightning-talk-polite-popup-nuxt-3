<script lang="ts" setup>
const props = defineProps<{ show: boolean }>();

const dialog = ref(null);

watch(
  () => props.show,
  (newShow) => {
    if (newShow) {
      dialog.value?.showModal();
    } else {
      dialog.value?.hideModal();
    }
  }
);
</script>

<template>
  <dialog ref="dialog">
    <slot />
  </dialog>
</template>

<style scoped></style>
