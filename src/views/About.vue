<script setup lang="ts">
import { onMounted } from "vue"

const techs = ["Vue 3", "Pinia", "Axios", "FastAPI", "PostgreSQL", "Docker", "Git", "NestJS", "Python", "Tailscale", "Linux"]

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show")
      }
    })
  })

  document.querySelectorAll(".scrollReveal2").forEach((el) => observer.observe(el))
})
</script>

<template>
  <div class="min-h-[150vh] flex flex-col justify-center text-white font-oswald gap-8 px-8 md:px-16">
    <h1 class="scrollReveal2 text-6xl md:text-8xl font-extrabold">
      Sobre <span class="text-amber-400">mim</span>
    </h1>

    <p class="scrollReveal2 text-3xl md:text-6xl w-full md:w-[80%] leading-tight">
      Desenvolvedor Frontend Júnior na <span class="text-amber-400">MineralNet</span>, onde construo
      interfaces e integro APIs FastAPI para um sistema de gestão geológica.
      <span class="text-amber-400"> Formado </span> em Análise e Desenvolvimento de Sistemas <span
        class="text-amber-400">(ADS)</span> na UniSenai e
      buscando crescer em times que entregam
      produtos de qualidade.
    </p>

    <div class="scrollReveal2 flex flex-wrap gap-4 mt-4">
      <span v-for="tech in techs" :key="tech"
        class="border border-amber-400 text-amber-400 text-2xl font-bold px-4 py-1">
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<style>
.scrollReveal2 {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.5s ease, transform 1s ease;
}

.show {
  opacity: 1;
  transform: translateY(0px);
}
</style>
