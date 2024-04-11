<template>
  <NuxtLink
    :to="`/pokemons/${info?.id}`"
    class="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center text-center cursor-pointer"
  >
    <img class="w-auto h-auto" :src="urlPicture" :alt="name" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ name }}</div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span
        v-for="type in info?.types"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
        >#{{ type?.type.name }}</span
      >
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  info: Record<string, unknown> | null;
}>();

const name = computed(() => {
  if (props.info) {
    return props.info.name.toUpperCase();
  }
  return "";
});

const urlPicture = computed(() => {
  if (props.info) {
    return props.info.sprites.front_default;
  }
  return "";
});
</script>

<style scoped></style>
