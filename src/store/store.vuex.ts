import { createStore } from 'vuex';
import { gif } from "../shared";

export const store = createStore({
  state: {
    gifs: [] as Array<gif>,
    favoriteGifs: [] as Array<gif>,
    searchValue: "",
    isLoading: false,
    information: "",
    offset: 0,
    limit: 20,
  },

  mutations: {
    SET_GIFS(state, gifs) {
      const truncatedGifs = gifs.map((item: any) => ({
        id: item.id,
        image: item.images.downsized.url,
      }))
      state.gifs = state.gifs.concat(truncatedGifs);
    },

    SET_FAVORITE_GIFS(state, gifs) {
      state.favoriteGifs = gifs;
    },

    ADD_FAVORITE_GIF(state, gif) {
      state.favoriteGifs.push(gif);
    },

    SET_SEARCH_VALUE(state, value) {
      state.searchValue = value;
      state.gifs = [];
      state.offset = 0;
      state.information = "";
    },

    UPDATE_OFFSET(state) {
      state.offset += state.limit;
    }
  },

  actions: {
    async getGifs({ commit }) {
      const { searchValue, offset, limit } = this.state;
      if (searchValue !== "") {
        this.state.isLoading = true;
        try {
          const response = await fetch("http://api.giphy.com/v1/gifs/search?api_key=HqAvKVtqkWGQusQ4RQzCOoRoaMsDjG3O&q=" + searchValue + "&offset=" + offset + "&limit=" + limit);
          const { data } = await response.json();
          if (!data.length) {
            this.state.information = "Value is invalid"
          }
          commit('SET_GIFS', data);
          this.state.isLoading = false;
        } catch (error) {
          alert("Something went wrong, please try again later.");
        }
      }
    }
  }

})
