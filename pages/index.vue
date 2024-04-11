<script setup lang="ts">
/* const route = useRoute(); */
</script>

<template>
  <div class="bg-white">
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20"
          >
            Pesquisa de um Pokémon específico por ID ou Nome
            <NuxtLink class="font-semibold text-indigo-600" to="/pokemons"
              ><span class="absolute inset-0" aria-hidden="true"></span>
              Entrar<span aria-hidden="true">&rarr;</span></NuxtLink
            >
          </div>
        </div>
        <div class="text-center">
          <h1
            class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
          >
            Pokémons
          </h1>
          <ul class="mt-6 text-lg leading-8 text-gray-600">
            Bem-vindo ao nosso localizador de Pokémon! Aqui você pode encontrar
            informações detalhadas sobre seus Pokémon favoritos.
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
