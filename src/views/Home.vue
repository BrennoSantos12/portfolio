<script setup lang="ts">
import { watch, ref, onMounted, onUnmounted } from "vue";
import NavBar from "@/components/NavBar.vue";
import { useCurtainStore } from "@/stores/curtain";
import { storeToRefs } from "pinia"
import { useScrollStore } from "@/stores/scrollEvent"

const scroll = useScrollStore()
const { scrollY } = storeToRefs(scroll)

const curtainStore = useCurtainStore();
const active = ref(false);
const fullText = "o poder da sua marca.";
const typedText = ref("");
const bottom = ref(false);


watch(
  () => curtainStore.curtainFinished,
  (finished) => {
    if (finished) {
      startHomeAnimation();
    }
  },
);
function startHomeAnimation() {
  setTimeout(() => {
    active.value = true;
    startTyping();
  }, 500);
}

function startTyping() {
  let index = 0;
  const speed = 40;

  const interval = setInterval(() => {
    typedText.value += fullText[index];
    index++;

    if (index === fullText.length) {
      clearInterval(interval);
      setTimeout(() => {
        bottom.value = true;
      });
    }
  }, speed);
}


</script>

<template>
  <div class="h-[120vh] w-screen bg-[#341539] text-white overflow-hidden">
    <div class="flex flex-col justify-between h-screen pb-8">
      <NavBar />
      <p class="absolute left-0 top-1/2 translate-x-2 -translate-y-10 rotate-90 origin-left text-[8px] text-white">
        @2025 TODOS OS DIREITOS RESERVADOS
      </p>
      <div class="relative flex flex-col items-center justify-center text-center">
        <h1
          class="font-oswald font-extrabold text-gray-100/20 text-[19rem] tracking-tight transition-opacity duration-700"
          :class="active ? 'opacity-100' : 'opacity-0'" :style="{
            transform: `translateY(${scrollY * 0.5}px)`,
            letterSpacing: `${scrollY * 0.1}px`,
          }">
          EXIBA
        </h1>

        <h2 class="absolute top-1/1 transform text-9xl font-dond transition-translate duration-1000">
          {{ typedText }}
        </h2>
      </div>

      <div class="flex justify-end items-center pr-4 text-6xl -translate-y-2">
        <div class="bloco group" :style="{ transform: `translateX(${scrollY * 0.4}px)` }">
          <span class="text-up font-oswald font-extrabold text-white" :class="bottom ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            ">
            WEB DEVELOPER
          </span>
          <span class="font-oswald font-extrabold text-amber-400 text-bt">
            WEB DEVELOPER
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
