<template>
  <div class="bg-primaryColor w-full h-full text-white text-[24px] p-3">
    <div class="flex justify-center pb-2 font-bold">BTJ ACADEMY</div>
    Post Test : Chart
    <ul class="flex flex-col text-[20px] pl-2 font-light">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :class="{
          'bg-baseColor-blue': isActive(link.path),
          'text-primaryColor font-normal ': isActive(link.path),
        }"
        class="hover:bg-baseColor-blue hover:text-primaryColor p-2 rounded-md mb-1"
        >{{ link.label }}</NuxtLink
      >
    </ul>
    Class Project
    <ul class="flex flex-col text-[20px] pl-2 font-light">
      <NuxtLink
        v-for="item in practice"
        :key="item.path"
        :to="item.path"
        :class="{
          'bg-baseColor-blue': isActive(item.path),
          'text-primaryColor font-normal': isActive(item.path),
        }"
        class="hover:bg-baseColor-blue hover:text-primaryColor p-2 rounded-md mb-1"
        >{{ item.label }}</NuxtLink
      >
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { path: "/", label: "Dashboard" },
        { path: "/pulau/pulau", label: "Pulau" },
      ],
      practice: [
        { path: "/anime", label: "Anime" },
        { path: "/chart", label: "Chart Part 1" },
        { path: "/manga", label: "Chart Part 2" },
      ],
    };
  },
  methods: {
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
