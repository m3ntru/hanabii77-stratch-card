<script setup>
import { ref, onMounted } from "vue";
import Free from "@/components/Free.vue";
import Prime from "@/components/Prime.vue";
import { printRate } from "@/model/tool"
const type = ref("")
const count = ref(1)

const setType = (value) => {
  type.value = value;
}

onMounted(() => {
  console.log("2024/01/11");
  printRate()
})
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
  <Free v-if="type == 'free'" @next="() => count++"></Free>
  <Prime v-if="type == 'prime'" @next="() => count++"></Prime>
  <div class="w-full flex justify-center items-center pt-2 gap-4">
    <button @click="() => count = 1" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-28">
      歸1
    </button>
    <div class="px-4 text-white font-bold text-xl">{{ count }}</div>
    <button @click="() => count++" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-28">
      +1
    </button>
  </div>
</template>

<style scoped></style>
