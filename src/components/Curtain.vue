<template>
  <transition
    name="fade"
    class="text-white text-9xl font-oswald font-extrabold"
  >
    <div v-if="show" class="fixed inset-0 z-50 flex items-center">
      <div
        class="w-1/2 h-full items-center flex justify-end bg-black transition-transform duration-[1000ms]"
        :class="{ '-translate-x-full': revealed }"
      >
        <h1 class="pr-2">BRENNO</h1>
      </div>

      <div
        class="w-1/2 h-full bg-black flex items-center transition-transform duration-[1000ms]"
        :class="{ 'translate-x-full': revealed }"
      >
        <h1 class="pl-2">SANTOS</h1>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const show = ref(true);
const revealed = ref(false);

onMounted(() => {
  setTimeout(() => {
    revealed.value = true;
  }, 1000);

  setTimeout(() => {
    show.value = false;
  }, 2300);
});
</script>
