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
  @apply bg-[#4E4F50];
  font-family: 'Noto Sans', sans-serif;
  @apply p-8;
}

.active {
  @apply font-bold;
  @apply no-underline;
  @apply text-black;
}
</style>
