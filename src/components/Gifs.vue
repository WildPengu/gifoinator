<template>
  <div class="gifs-container">
    <div class="single-gif-container" v-for="gif in gifs" :key="gif.id">
      <img class="gif" v-bind:src="gif.image" alt="img" />
      <div class="gif-cover" @click="addToFavorite(gif)">
        <fa icon="heart" class="heart-icon" />
      </div>
    </div>
  </div>
  <div class="validation-info">{{ information }}</div>
  <Loader v-if="isLoading" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { gif } from "../shared";
import Loader from "./Loader.vue";

@Options({
  components: {
    Loader,
  },

  computed: {
    gifs() {
      return this.$store.state.gifs;
    },
    favoriteGifs() {
      return this.$store.state.favoriteGifs;
    },
    isLoading() {
      return this.$store.state.isLoading;
    },
    information() {
      return this.$store.state.information;
    },
  },

  created() {
    window.addEventListener("scroll", this.loadImagesOnScroll);
  },

  unmounted() {
    window.removeEventListener("scroll", this.loadImagesOnScroll);
  },

  methods: {
    addToFavorite(gif: gif) {
      const index = this.favoriteGifs.findIndex(
        (item: gif) => item.id == gif.id
      );
      if (index === -1) {
        this.$store.commit("ADD_FAVORITE_GIF", gif);
        localStorage.setItem("favoriteGifs", JSON.stringify(this.favoriteGifs));
      }
    },

    loadImagesOnScroll() {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        this.$store.commit("UPDATE_OFFSET");
        this.$store.dispatch("getGifs");
      }
    },
  },
})
export default class Search extends Vue {}
</script>

<style scoped>
.gifs-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.single-gif-container {
  height: 300px;
  width: 300px;
  position: relative;
  margin: 10px;
  border-radius: 10%;
}

.validation-info {
  color: white;
  font-size: 24px;
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
