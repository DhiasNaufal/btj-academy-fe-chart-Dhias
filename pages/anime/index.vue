<template>
  <AppContainer title="Anime List">
    <div>konten anime</div>
    <div class="grid grid-cols-5 gap-x-3 gap-y-4 my-4">
      <div class="" v-for="(item, index) in items" :key="index">
        <LazyAnimeCard :anime="item" />
      </div>
    </div>
  </AppContainer>
</template>
<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.fetchAnimeList();
  },
  methods: {
    async fetchAnimeList() {
      const resp = await fetch("https://api.jikan.moe/v4/anime");
      const body = await resp.json();
      console.log("MWAHAWHAHWHAWWA");
      console.log(resp);

      this.items = body.data;
      console.log("nih body", body);
      console.log("item nih", this.items);
    },
  },
};
</script>
