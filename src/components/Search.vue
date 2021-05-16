<template>
  <form v-on:submit="searchGifs" class="search-container">
    <input
      v-model="searchValue"
      class="search"
      type="text"
      placeholder="Search gif"
    />
    <button class="button">
      <fa icon="search" class="icon" />
    </button>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      searchValue: "",
    };
  },

  methods: {
    searchGifs(e: Event) {
      e.preventDefault();
      this.$store.commit("SET_SEARCH_VALUE", this.searchValue);
      this.$store.dispatch("getGifs");
    },
  },
})
export default class Search extends Vue {}
</script>

<style scoped>
.search-container {
  display: flex;
  padding: 40px 0;
  width: 100%;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 9;
}

.search {
  width: 20%;
  padding: 14px 20px;
  border: none;
}

input:focus {
  outline: none;
}

.icon {
  color: white;
  font-size: 20px;
}

.button {
  padding: 14px 20px;
  background-color: #3c99dc;
  border: none;
  cursor: pointer;
}
</style>
