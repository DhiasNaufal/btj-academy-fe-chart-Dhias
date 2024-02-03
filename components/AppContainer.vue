<template>
  <div class="my-3 px-4">
    <div class="flex justify-between items-center">
      <div class="text-[24px]">{{ title }}</div>
      <input
        class="border rounded-md py-1 px-1"
        type="text"
        placeholder="Search..."
      />
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Page Title",
    },
  },
};
</script>
