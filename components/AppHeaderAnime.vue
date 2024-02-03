<template>
  <div
    class="flex items-center bg-blue-700 text-white justify-between py-4 px-3"
  >
    <div class="text-xl">BTJ Anime</div>
    <div class="flex items-center gap-1">
      <NuxtLink to="/anime" class="hover:bg-blue-400 px-2 py-1 rounded-md"
        >Anime</NuxtLink
      >
      <NuxtLink to="/manga" class="hover:bg-blue-400 px-2 py-1 rounded-md"
        >Advance</NuxtLink
      >
      <NuxtLink to="/chart" class="hover:bg-blue-400 px-2 py-1 rounded-md"
        >chart</NuxtLink
      >
      <!-- <slot /> -->
    </div>
  </div>
</template>
