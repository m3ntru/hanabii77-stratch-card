<script setup>
import { ref } from "vue";
import Free from "@/components/Free.vue";
import Prime from "@/components/Prime.vue";
const type = ref("")

const setType = (value) => {
  type.value = value;
}
</script>

<template>
  <div class="w-full flex justify-center gap-4">
    <button @click="() => setType('free')"
      class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded w-28">
      歡樂大集合
    </button>
    <button @click="() => setType('prime')"
      class="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded w-28">
      花火喜迎春
    </button>
  </div>
  <Free v-if="type == 'free'"></Free>
  <Prime v-if="type == 'prime'"></Prime>
</template>

<style scoped></style>
