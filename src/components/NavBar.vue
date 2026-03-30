<script setup lang="ts">
import { ref, watch } from "vue";
import { useCurtainStore } from "@/stores/curtain";

const curtainStore = useCurtainStore();
const active = ref(false);
const activeItems = ref([false, false, false]);
const transitionEnabled = ref([true, true, true]);

watch(
  () => curtainStore.curtainFinished,
  (finished) => {
    if (finished) {
      startHomeAnimation();
    }
  },
);

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function startHomeAnimation() {
  setTimeout(() => {
    active.value = true;

    activeItems.value.forEach((_, index) => {
      setTimeout(() => {
        activeItems.value[index] = true;

        setTimeout(() => {
          transitionEnabled.value[index] = false;
        }, 400);
      }, index * 100);
    });
  }, 700);
}
</script>

<template>
  <div class="p-2 flex items-center justify-between">
    <div class="bloco group font-oswald font-bold text-4xl md:text-5xl">
      <h1 class="text-up" :class="[
        transitionEnabled[0] ? 'transition-transform duration-700' : '',
        active ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0',
      ]">
        <span>BRENNO </span>
        <span class="text-amber-400">SANTOS</span>
      </h1>
      <h1 class="text-bt">
        <span class="text-amber-400">BRENNO </span>
        <span>SANTOS</span>
      </h1>
    </div>
    <div class="flex flex-col text-end text-2xl md:text-2xl font-oswald font-bold cursor-pointer pr-4">
      <div class="bloco group" :class="[
        transitionEnabled[0] ? 'transition-transform duration-700' : '',
        activeItems[0]
          ? 'translate-x-0 opacity-100'
          : 'translate-x-40 opacity-0',
      ]" @click="scrollTo('sobre')">
        <span class="text-up"> SOBRE </span>
        <span class="text-bt text-amber-400">SOBRE</span>
      </div>
      <div class="bloco group" :class="[
        transitionEnabled[1] ? 'transition-transform duration-700' : '',
        activeItems[1]
          ? 'translate-x-0 opacity-100'
          : 'translate-x-40 opacity-0',
      ]" @click="scrollTo('projetos')">
        <span class="text-up">PROJETOS</span>
        <span class="text-bt text-amber-400">PROJETOS</span>
      </div>
      <div class="bloco group" :class="[
        transitionEnabled[2] ? 'transition-transform duration-700' : '',
        activeItems[2]
          ? 'translate-x-0 opacity-100'
          : 'translate-x-40 opacity-0',
      ]" @click="scrollTo('servicos')">
        <span class="text-up">MEUS SERVIÇOS</span>
        <span class="text-bt text-amber-400">MEUS SERVIÇOS</span>
      </div>
    </div>
  </div>
</template>
