<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="relative h-screen w-screen text-white overflow-hidden">
    <div class="relative z-20 flex flex-col justify-between h-screen pb-8">
      <!-- aqui -->
      <NavBar />
      <p
        class="absolute left-0 top-1/2 translate-x-2 -translate-y-5 rotate-90 origin-left text-[8px] text-white"
      >
        @2025 TODOS OS DIREITOS RESERVADOS
      </p>
      <div
        class="relative flex flex-col items-center justify-center text-center"
      >
        <h1
          class="font-oswald font-extrabold text-gray-100/20 text-[19rem] tracking-tight z-0"
        >
          EXIBA
        </h1>

        <h2 class="absolute top-1/1 transform text-9xl font-dond z-10">
          o poder da sua marca.
        </h2>
      </div>

      <div class="flex justify-end pr-2 text-6xl -translate-y-2">
        <div class="bloco group">
          <span class="text-up font-oswald font-extrabold text-white">
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
