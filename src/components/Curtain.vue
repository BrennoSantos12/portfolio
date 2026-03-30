<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useCurtainStore } from "@/stores/curtain";

const curtainStore = useCurtainStore();

const show = ref(true);
const currentIndex = ref(0);
const curtainOpen = ref(false);

const words = [
  { left: "FRONTEND \u200BD", right: "EVELOPER" },
  { left: "BACKEND \u200BD", right: "EVELOPER" },
  { left: "FREELA", right: "NCER" },
  { left: "FULL\u200BST", right: "ACK" },
  { left: "PROBLEM \u200B", right: "SOLVER" },
  { left: "BRENNO \u200B", right: "SANTOS" },
];

let wordInterval: number;
let curtainTimer: number;
let hideTimer: number;

onMounted(() => {
  wordInterval = setInterval(() => {
    if (currentIndex.value < words.length - 1) {
      currentIndex.value++;
    } else {
      clearInterval(wordInterval);
    }
  }, 400);
  curtainTimer = setTimeout(
    () => {
      curtainOpen.value = true;
      curtainStore.setCurtainFinished();
    },
    words.length * 600 + wordInterval,
  );

  hideTimer = setTimeout(() => {
    show.value = false;
  }, words.length * 700);
});

onUnmounted(() => {
  clearInterval(wordInterval);
  clearTimeout(curtainTimer);
  clearTimeout(hideTimer);
});

const getTransform = (index: number) => {
  if (index <= currentIndex.value) {
    return `translateY(-${(currentIndex.value - index) * 100}%)`;
  }
  return "translateY(100%)";
};
</script>

<template>
  <div v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center text-white md:text-8xl text-4xl font-oswald font-extrabold">
    <div
      class="w-screen h-full flex items-center justify-end bg-black transition-transform duration-[700ms] overflow-hidden"
      :class="{ '-translate-x-full': curtainOpen }">
      <div class="relative w-full overflow-hidden h-[1em] flex items-center">
        <span v-for="(word, index) in words" :key="`left-${index}`"
          class="absolute text-right w-full transition-transform duration-500 ease-in-out" :style="{
            transform: getTransform(index),
          }">
          {{ word.left }}
        </span>
      </div>
    </div>

    <div
      class="w-screen h-full flex items-center justify-start bg-black transition-transform duration-[700ms] overflow-hidden"
      :class="{ 'translate-x-full': curtainOpen }">
      <div class="relative w-full overflow-hidden h-[1em] flex items-center">
        <span v-for="(word, index) in words" :key="`right-${index}`"
          class="absolute w-full transition-transform duration-500 ease-in-out" :style="{
            transform: getTransform(index),
          }">
          {{ word.right }}
        </span>
      </div>
    </div>
  </div>
</template>
