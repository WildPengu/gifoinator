<template>
  <div class="app-container">
    <Search />
    <Gifs />
    <FavoriteGifs />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Search from "./components/Search.vue";
import Gifs from "./components/Gifs.vue";
import FavoriteGifs from "./components/FavoriteGifs.vue";

@Options({
  components: {
    Search,
    Gifs,
    FavoriteGifs,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: rgb(18, 18, 18);
}

.app-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
