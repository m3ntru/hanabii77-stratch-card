<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from "vue";
import { createPrime } from "@/model/tool"
import StratchCard from "@/components/StratchCard.vue";
import imageUrl from '@/assets/img/prime-mask.png'
import n from '@/assets/img/sakuramochi.png'
import mrm from '@/assets/img/mrm.png'
import mk from '@/assets/img/mk.png'

const data = ref([]);
const code = ref("777777-077")

const init = () => {
  data.value = createPrime()
  code.value = `777${String(new Date().getTime()).substr(-3, 3)}-${String(Math.floor(Math.random() * 99) + 1).padStart(3, "0")}`
};
const stratchCardRef = ref()
const reset = () => {
  stratchCardRef.value?.reset();
  data.value = createPrime();
  code.value = `777${String(new Date().getTime()).substr(-3, 3)}-${String(Math.floor(Math.random() * 99) + 1).padStart(3, "0")}`
};

onMounted(() => {
  init();
})
onUnmounted(() => {
})

const scratchStart = () => {
  console.log('scratchStart')
}
const scratchEnd = () => {
  console.log('scratchEnd')
}
const scratchAll = () => {
  console.log('scratchAll')
}

const luckPosition = [[58, 29], [149, 29], [238, 29]]
const poolPosition = [[47, 179], [165, 179], [282, 179], [85, 308], [202, 308], [320, 308], [47, 417], [165, 417], [282, 417]]

</script>

<template>
  <div class="w-full flex flex-col items-center justify-center p-8 gap-4">
    <div class="card relative">
      <div class="prize-code absolute">{{ code }}</div>
      <div class="prize-area">
        <StratchCard ref="stratchCardRef" :scratchPercent="80" maskColor="skyblue" fillStyle="red" font="30px 微软雅黑"
          text="" :imageUrl="imageUrl" :radius="0" :scratchRadius="20" @scratchStart="scratchStart"
          @scratchEnd="scratchEnd" @scratchAll="scratchAll">

          <div class="prize relative">
            <div v-for="(item, index) in data.luck" class="prize-item absolute w-24 h-16"
              :style="`top: ${luckPosition[index][0]}px; left: ${luckPosition[index][1]}px;`">
              <div class="w-full flex justify-center text-5xl font-extrabold"> {{ item }}</div>
            </div>
            <div v-for="(item, index) in data.pool"
              class="prize-item absolute flex flex-col items-center justify-center w-24 h-24"
              :style="`top: ${poolPosition[index][0]}px; left: ${poolPosition[index][1]}px;`">
              <div class="w-full flex justify-center text-4xl leading-3 font-extrabold"> {{ item[0] }}</div>
              <div class="w-full flex justify-center text-xl leading-10 font-extrabold"> {{ item[1].toUpperCase() }}
              </div>
            </div>
            <div v-if="data.img ==='n'" class="absolute flex flex-col items-center justify-center w-12 h-12"
              style="width: 72px; top:333px; left: 40px;">
              <img :src="n" />
            </div>
            <div v-if="data.img ==='mk'" class="absolute flex flex-col items-center justify-center w-12 h-12"
              style="width: 100px; top:335px; left: 28px;">
              <img :src="mk" />
            </div>
            <div v-if="data.img ==='mrm'"  class="absolute flex flex-col items-center justify-center w-12 h-12"
              style="width: 100px; top:335px; left: 28px;">
              <img :src="mrm" />
            </div>
          </div>
        </StratchCard>
      </div>

    </div>
    <button @click="reset" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-20">
      換一張
    </button>

  </div>
</template>

<style scoped>
.card {
  width: 900px;
  height: 599px;
  background-image: url('@/assets/img/prime-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: url('@/assets/img/10ntd.png') 32 60,auto;
}

.prize-code {
  width: 140px;
  height: 30px;
  top: 16px;
  left: 740px;
  color: black;
  font-size: 24px;
  font-weight: 700;
  background-color: white;
  user-select: none;
}

.prize-area {
  position: absolute;
  top: 115px;
  left: 354px;
}

.prize {
  width: 524px;
  height: 411px;
  color: #222222;
  background: #cccccc;
  user-select: none;
  background-image: url('@/assets/img/prime-mask-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.prize-item {
  font-family: 'Noto Sans TC';
  font-weight: 900;
  -webkit-text-stroke: 0.5px white;
}
</style>