import axios from "axios";
import pokemonAPI from "~/api/pokemonAPI";

export const usePokemonStore = defineStore("pokemonStore", {
  state: () => {
    return {
      pokemonList: <any[]>[],
      pokemonDetails: null,
      loading: false,
      offset: 0,
    };
  },
  getters: {
    urlPicture: (state) =>
      state.pokemonDetails ? state.pokemonDetails.sprites?.front_default : "",
    namePokemon: (state) =>
      state.pokemonDetails ? state.pokemonDetails.name.toUpperCase() : "",
  },
  actions: {
    async fetchPokemons(limit = 24) {
      try {
        this.loading = true;
        const response = await pokemonAPI.get(
          `?limit=${limit}&offset=${this.offset}`
        );

        const promises = response.data.results.map(async (pokemon: any) => {
          const resp = await axios.get(pokemon.url);
          return resp.data;
        });

        const arrayPokemons = await Promise.all(promises);
        this.pokemonList.push(...arrayPokemons);
        this.loading = false;
      } catch (error) {}
    },
    async fetchPokemon(id: number | string) {
      try {
        this.loading = true;
        const response = await pokemonAPI.get(`/${id}`);
        this.pokemonDetails = response.data;
      } catch (error) {
        this.pokemonDetails = null;
        this.pokemonList = [];
      } finally {
        this.loading = false;
        this.offset = 0;
      }
    },
    setResultPokemon(item: any) {
      this.pokemonList = [];
      this.pokemonList.push(item);
    },
  },
});
