<script setup lang="ts">
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="relative h-screen w-screen text-white overflow-hidden">
    <div class="relative z-20 flex flex-col justify-between h-screen">
      <NavBar />
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
