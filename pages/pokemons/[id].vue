<template>
  <div class="relative">
    <button
      @click="$router.back"
      class="absolute top-0 right-0 mt-4 mr-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  </div>

  <div class="mx-auto my-12 lg:p-20">
    <div
      class="px-4 sm:px-0 flex flex-col sm:flex-row items-center justify-center"
    >
      <div class="text-center sm:text-left mb-4 sm:mb-0">
        <h3 class="text-base font-semibold leading-7 text-gray-900">
          {{ storePokemon.namePokemon }}
        </h3>
        <p class="mt-1 max-w-sm sm:max-w-2xl text-sm leading-6 text-gray-500">
          Detalhe e efeitos.
        </p>
      </div>
      <img
        class="w-auto h-auto"
        :src="storePokemon.urlPicture"
        alt="Imagen de Pokémon"
      />
    </div>

    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div
          class="px-4 py-6 flex flex-col lg:flex-row items-center justify-start"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 mb-2 lg:mb-0 lg:mr-4"
          >
            Efeitos
          </dt>
          <div class="flex flex-wrap mt-4 lg:mt-0 items-center justify-center">
            <template v-if="storePokemon.pokemonDetails">
              <dd
                v-for="abilitie in storePokemon.pokemonDetails.abilities"
                class="mt-1 mr-2 mb-2"
              >
                <span
                  class="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >{{ abilitie.ability.name }}</span
                >
              </dd>
            </template>
          </div>
        </div>
      </dl>

      <dl class="divide-y divide-gray-100">
        <div
          class="px-4 py-6 flex flex-col lg:flex-row items-center justify-start"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 mb-2 lg:mb-0 lg:mr-4"
          >
            Itens retidos
          </dt>
          <div class="flex flex-wrap mt-4 lg:mt-0 items-center justify-center">
            <template v-if="storePokemon.pokemonDetails">
              <dd
                v-for="held in storePokemon.pokemonDetails.held_items"
                class="mt-1 mr-2 mb-2"
              >
                <span
                  class="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                  >{{ held.item.name }}</span
                >
              </dd>
              <span
                v-if="!storePokemon.pokemonDetails.held_items.length"
                class="mt-1 text-sm text-gray-700"
                >Sem dados</span
              >
            </template>
          </div>
        </div>
      </dl>

      <dl class="divide-y divide-gray-100">
        <div
          class="px-4 py-6 flex flex-col lg:flex-row items-center justify-start"
        >
          <dt
            class="text-sm font-medium leading-6 text-gray-900 mb-2 lg:mb-0 lg:mr-4"
          >
            Estatísticas
          </dt>
          <div class="flex flex-wrap mt-4 lg:mt-0 items-center justify-center">
            <template v-if="storePokemon.pokemonDetails">
              <dd
                v-for="stats in storePokemon.pokemonDetails.stats"
                class="mt-1 mr-2 mb-2"
              >
                <span
                  class="bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {{ stats.stat.name }}: {{ stats.base_stat }}
                </span>
              </dd>
            </template>
          </div>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const storePokemon = usePokemonStore();

onMounted(() => {
  if (route.params.id) {
    storePokemon.fetchPokemon(+route.params.id);
  }
});
</script>

<style scoped></style>
