<template>
  <div class="favorite-gifs-container">
    <div v-if="!favoriteGifs.length" class="info">
      Here you will have list of your favorite gifs, once u add them
    </div>
    <div class="single-gif-container" v-for="gif in favoriteGifs" :key="gif.id">
      <img class="gif" v-bind:src="gif.image" alt="img" />
      <div class="gif-cover" @click="deleteFromFavorite(gif.id)">
        <fa icon="times" class="heart-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gif } from "../shared";

@Options({
  computed: {
    favoriteGifs() {
      return this.$store.state.favoriteGifs;
    },
  },

  mounted() {
    if (localStorage.favoriteGifs) {
      this.$store.commit(
        "SET_FAVORITE_GIFS",
        JSON.parse(localStorage.favoriteGifs)
      );
    }
  },

  methods: {
    deleteFromFavorite(id: string) {
      this.$store.commit(
        "SET_FAVORITE_GIFS",
        this.favoriteGifs.filter((item: gif) => item.id !== id)
      );
      localStorage.setItem("favoriteGifs", JSON.stringify(this.favoriteGifs));
    },
  },
})
export default class Search extends Vue {}
</script>

<style scoped>
.info {
  font-size: 25px;
  color: white;
  margin-top: 25px;
  display: flex;
  align-items: center;
}

.favorite-gifs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: fixed;
  overflow-y: scroll;
  bottom: 0%;
  height: 220px;
  width: 100%;
  background-color: #393838;
}

::-webkit-scrollbar {
  width: 0;
}

.single-gif-container {
  height: 200px;
  width: 200px;
  position: relative;
  margin: 10px;
  border-radius: 10%;
}

.gif {
  height: 100%;
  width: 100%;
  border-radius: 10%;
}

.gif-cover {
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: rgb(255, 255, 255, 0.3);
  border-radius: 10%;
  top: 0;
  left: 0;
  display: none;
}

.single-gif-container:hover .gif-cover {
  display: unset;
}

.heart-icon {
  cursor: pointer;
  font-size: 25px;
  padding: 10px;
  margin: 10px;
  transition: 0.3s;
}

.heart-icon:hover {
  color: red;
}
</style>