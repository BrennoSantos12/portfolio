<template>
  <transition name="fade">
    <div
      v-if="show"
      class="fixed inset-0 z-50 flex items-center justify-center text-white text-5xl sm:text-6xl font-oswald font-extrabold"
    >
      <div
        class="w-1/2 h-full flex items-center justify-end bg-black transition-transform duration-[1000ms]"
        :class="{ '-translate-x-full': curtainOpen }"
      >
        <div class="relative overflow-hidden pr-4">
          <span
            class="block w-full transition-transform duration-700 ease-in-out"
            :class="{ '-translate-y-full': textUp }"
          >
            BRENNO
          </span>
          <span
            class="text-end absolute top-full left-0 right-0 w-full transition-transform duration-700 ease-in-out"
            :class="{ '-translate-y-full': textUp }"
          >
            WEB&nbsp;DEV
          </span>
        </div>
      </div>

      <div
        class="w-1/2 h-full flex items-center justify-start bg-black transition-transform duration-[1000ms]"
        :class="{ 'translate-x-full': curtainOpen }"
      >
        <div class="relative overflow-hidden">
          <span
            class="block w-screen transition-transform duration-700 ease-in-out"
            :class="{ '-translate-y-full': textUp }"
          >
            SANTOS
          </span>
          <span
            class="absolute top-full left-0 right-0 w-full transition-transform duration-700 ease-in-out"
            :class="{ '-translate-y-full': textUp }"
          >
            ELOPER
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const show = ref(true);
const textUp = ref(false);
const curtainOpen = ref(false);

onMounted(() => {
  setTimeout(() => {
    textUp.value = true;
  }, 700);

  setTimeout(() => {
    curtainOpen.value = true;
  }, 2000);

  setTimeout(() => {
    show.value = false;
  }, 4000);
});
</script>
