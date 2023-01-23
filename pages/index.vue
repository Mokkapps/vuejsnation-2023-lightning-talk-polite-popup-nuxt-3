<script setup lang="ts">
const { demoMode } = useDemoMode();

const showCookieBanner = ref(false)
const showNewsletterDialog = ref(false)
const showSlideInBox = ref(false)

const onCloseCookieBanner = () => {
  showCookieBanner.value = false
  showNewsletterDialog.value = true
}

const onCloseSlideInBox = () => {
  showSlideInBox.value = false
}

onMounted(() => {
  if (demoMode.value === 'impolite-popup') {
    navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .finally(() => {
      showCookieBanner.value = true
      showSlideInBox.value = true
    });
  }
})
</script>

<template>
  <h1>Polite Popup Demo</h1>
  <DemoModeRadio />
  <Transition name="slide-fade">
    <div
      v-if="showSlideInBox"
      class="fixed max-h-sm w-full z-50 left-0 top-0 p-4 rounded-md bg-gray-700 text-white shadow-lg"
    >
      <div class="flex justify-center gap-4 mb-2">
        <span @click="onCloseSlideInBox" class="absolute top-4 right-20 cursor-pointer">&#x2715</span>
        <img src="https://source.unsplash.com/pgTUIohxAs8" width="100" height="100"/>
        <span>Get suggestions for improving your content, targeting, and marketing automations to help you increase revenue.</span>
      </div>
    </div>
  </Transition>
  <div v-if="showCookieBanner"
    class="cookie-box absolute bg-black text-white p-4 rounded-md shadow-lg top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  >
    <span @click="onCloseCookieBanner" class="absolute top-1 right-2 cursor-pointer">&#x2715</span>
    <span
      >To make this page work, we log user data. By using this page, you agree
      to our Privacy Policy, including cookie policy.</span
    >
  </div>
  <Dialog :show="showNewsletterDialog">
    <form method="dialog">
      <h2>Vue Newsletter</h2>
      <NewsletterSubscription/>
    </form></Dialog
  >
</template>

<style scoped></style>
