import { defineStore } from "pinia";
import { ref } from "vue";

export const useCurtainStore = defineStore("curtain", () => {
  const curtainFinished = ref(false);

  const setCurtainFinished = () => {
    curtainFinished.value = true;
  };

  return {
    curtainFinished,
    setCurtainFinished,
  };
});
