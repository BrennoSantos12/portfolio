<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
import { ref } from "vue";

const x = ref(0);
const y = ref(0);

function onMousemove(e: any) {
  x.value = e.clientX;
  y.value = e.clientY;
}

// TESTE PARA VER SE O GIT TA FUNCIONANDO
</script>

<template>
  <div
    @mousemove="onMousemove"
    class="relative h-screen w-screen text-white overflow-hidden"
  >
    <div
      class="pointer-events-none absolute z-10 w-96 h-96 rounded-full blur-2xl transition-transform duration-75 ease-linear"
      :style="{
        transform: `translate(${x - 200}px, ${y - 200}px)`,
        background:
          'radial-gradient(circle, rgba(139,92,246,0.2) 0%, rgba(139,92,246,0) 70%)',
      }"
    />

    <div class="relative z-20 flex flex-col justify-between h-screen">
      <NavBar />
      <div
        class="relative flex flex-col items-center justify-center text-center"
      >
        <h1
          class="font-oswald font-extrabold text-gray-100/20 text-[15rem] tracking-tight z-0"
        >
          EXIBA
        </h1>

        <h2
          class="absolute top-1/2 transform text-5xl font-vollkorn font-light z-10 tracking-[0.2em]"
        >
          O PODER DA SUA MARCA.
        </h2>
      </div>

      <div class="p-6">
        <div class="bg-white h-[1px] w-full" />
        <div class="p-6 flex text-center items-center justify-between">
          <div class="bloco group">
            <span class="text-up font-oswald font-extrabold text-white">
              WEB DEVELOPER
            </span>
            <span class="font-oswald font-extrabold text-purple-500 text-bt">
              WEB DEVELOPER
            </span>
          </div>

          <p class="text-[14px] font-vollkorn">
            Faço paginas responsivas e chamativas <br />
            para a sua marca.
          </p>

          <p class="text-[8px]">@2025 TODOS OS DIREITOS RESERVADOS</p>
        </div>
      </div>
    </div>
  </div>
</template>
