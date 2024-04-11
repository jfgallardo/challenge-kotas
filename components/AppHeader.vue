<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1 items-center">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Pokemons</span>
          <img
            class="h-auto w-36"
            src="https://static.vecteezy.com/system/resources/thumbnails/027/127/571/small/pokemon-logo-pokemon-icon-transparent-free-png.png"
            alt=""
          />
        </a>
      </div>

      <div class="flex items-center justify-end">
        <input
          @keyup.enter="find"
          v-model="search"
          type="text"
          placeholder="Pesquisar Pokémon"
          class="border border-gray-300 rounded-full py-2 px-4 lg:px-9 mr-2 lg:mb-0 focus:outline-none focus:border-blue-500"
        />
        <button
          @click="find"
          class="bg-blue-500 hover:bg-blue-600 rounded-full text-white font-bold py-2 px-4 lg:px-9 focus:outline-none"
        >
          Buscar
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const emit = defineEmits(["onSearch"]);

const search = ref("");

watch(search, (value) => {
  if (!value) {
    emit("onSearch", search);
  }
});

const find = () => {
  emit("onSearch", search);
};
</script>

<style scoped></style>
