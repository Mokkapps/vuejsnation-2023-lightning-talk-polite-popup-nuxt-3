<template>
  <div class="mx-auto max-w-2xl flex flex-col gap-4">
    <nav class="flex gap-4">
      <NuxtLink to="/" class="link">Home</NuxtLink>
      <NuxtLink to="/react" class="link">React</NuxtLink>
      <NuxtLink to="/vue" class="link">Vue</NuxtLink>
    </nav>
    <div class="bg-[#E2DED0] p-4 rounded-md shadow-md">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply text-[#E2DED0];
  @apply no-underline;
}
</style>
