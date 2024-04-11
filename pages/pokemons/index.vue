<template>
  <AppHeader @onSearch="findPokemon($event.value)" />

  <div
    ref="containerPokemon"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-10"
  >
    <template v-for="item in storePokemon.pokemonList">
      <AppPokemon :info="item" />
    </template>
  </div>
  <div class="text-center">
    <span
      v-if="!storePokemon.pokemonList.length"
      class="text-2xl font-semibold font-serif"
      >Opss!! Não há dados para mostrar</span
    >
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

const storePokemon = usePokemonStore();
const containerPokemon = ref(null);

onMounted(async () => {
  if (!storePokemon.pokemonList.length) {
    await storePokemon.fetchPokemons();
  }
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  let element = containerPokemon.value;
  if (element.getBoundingClientRect().bottom < window.innerHeight) {
    loadMorePokemons();
  }
};

const findPokemon = async (e: string) => {
  if (e) {
    await storePokemon.fetchPokemon(e.toLowerCase());
    if (storePokemon.pokemonDetails) {
      storePokemon.setResultPokemon(storePokemon.pokemonDetails);
    }
  } else {
    await storePokemon.fetchPokemons();
  }
};

const loadMorePokemons = async () => {
  storePokemon.offset += storePokemon.pokemonList.length;
  await storePokemon.fetchPokemons();
};
</script>

<style scoped></style>
