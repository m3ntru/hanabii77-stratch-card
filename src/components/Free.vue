<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineEmits } from "vue";
import { createFree } from "@/model/tool"
import StratchCard from "@/components/StratchCard.vue";
import imageUrl from '@/assets/img/free-mask.png'
import door from '@/assets/img/powered.png'

const data = ref([]);
const code = ref("777777-077")
const powered = ref(false)

const init = () => {
  data.value = createFree()
  code.value = `777${String(new Date().getTime()).substr(-3, 3)}-${String(Math.floor(Math.random() * 99) + 1).padStart(3, "0")}`
};
; const stratchCardRef = ref()
const reset = () => {
  stratchCardRef.value?.reset();
  data.value = createFree();
  code.value = `777${String(new Date().getTime()).substr(-3, 3)}-${String(Math.floor(Math.random() * 99) + 1).padStart(3, "0")}`
  powered.value = false;
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

</script>

<template>
  <div class="w-full flex flex-col items-center justify-center p-8 gap-4">
    <div class="card relative">
      <div class="prize-code absolute">{{ code }}</div>
      <div class="prize-area">
        <StratchCard ref="stratchCardRef" :scratchPercent="80" maskColor="skyblue" fillStyle="red" font="30px 微软雅黑"
          text="" :imageUrl="imageUrl" :radius="0" :scratchRadius="20" @scratchStart="scratchStart"
          @scratchEnd="scratchEnd" @scratchAll="scratchAll">

          <div class="prize">
            <div class="prize-item flex items-center justify-between w-full h-full" v-for="item in data">
              <div class="w-24 flex justify-center text-4xl font-extrabold"> {{ item[0] }}</div>
              <div class="w-16 flex justify-center text-4xl font-extrabold"> {{ item[1] }}</div>
              <div class="w-16 flex justify-center text-3xl font-extrabold"> {{ item[2].toUpperCase() }}</div>
            </div>
          </div>
        </StratchCard>
      </div>
      <div @click="powered = !powered" class="powered absolute">Powered by M3ntru</div>
      <div v-if="powered" class="powered-img absolute"><img :src="door" /></div>
    </div>
    <button @click="reset" class="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-20">
      換一張
    </button>

  </div>
</template>

<style scoped>
.card {
  width: 750px;
  height: 558px;
  background-image: url('@/assets/img/free-bg.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: url('@/assets/img/10ntd.png') 32 60, auto;
}

.prize-code {
  width: 179px;
  height: 39px;
  top: 18px;
  left: 547px;
  color: black;
  font-size: 32px;
  font-weight: 700;
  background-color: white;
  user-select: none;
}

.powered {
  text-align: right;
  width: 140px;
  height: 15px;
  bottom: 2px;
  right: 1px;
  color: rgb(77, 77, 77, 0.4);
  font-size: 12px;
  font-weight: 700;
  user-select: none;
}

.powered-img {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.prize-area {
  position: absolute;
  top: 129px;
  left: 28px;
}

.prize {
  width: 411px;
  height: 406px;
  display: flex;
  padding: 39px 5px 0px 87px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #222222;
  background: #cccccc;
  user-select: none;
  background-image: url('@/assets/img/free-mask-bg.png');
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