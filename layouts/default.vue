<template>
  <!-- <AppHeaderAnime /> -->
  <div class="grid grid-rows-1 grid-cols-12 h-screen">
    <div class="col-span-2 bg-gray-100 rounded shadow">
      <AppSideBarNav />
    </div>
    <div class="col-span-10 overflow-y-auto">
      <slot />
    </div>
  </div>
</template>
