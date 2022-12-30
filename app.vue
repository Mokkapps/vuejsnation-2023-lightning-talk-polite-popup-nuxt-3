<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <PolitePopup />
    </NuxtLayout>
  </div>
</template>

<style>
body {
  background-color: rgb(249 250 251);
  font-family: "Noto Sans", sans-serif;
  @apply p-8;
}

.active {
  @apply font-bold;
  @apply no-underline;
  @apply text-black;
}
</style>
