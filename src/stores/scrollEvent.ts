import { defineStore } from "pinia";
import { ref } from "vue";

export const useScrollStore = defineStore("scrollEvent", () => {
  const scrollY = ref(0);

  let initialized = false;

  const init = () => {
    if (initialized) return;

    const handleScroll = () => {
      scrollY.value = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    initialized = true;
  };

  init();

  return {
    scrollY,
  };
});
