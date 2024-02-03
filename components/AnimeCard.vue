<template>
  <div class="flex flex-col justify-center items-center">
    <NuxtImg
      :alt="anime.title"
      :src="anime.images.webp.image_url"
      width="240px"
      height="400px"
    ></NuxtImg>
    <div class="text-sm">
      {{ anime.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anime: {
      type: Object,
      required: true,
    },
  },
};
</script>
