<script setup lang="ts">
import { onMounted } from "vue"


onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show")
      } else {
        entry.target.classList.remove("show");
      }
    })
  })

  const todosTexto = document.querySelectorAll('.scrollReveal')
  todosTexto.forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="h-[120vh] flex flex-col justify-center pl-20 text-white text-8xl font-oswald font-extrabold ">
    <h1 class="scrollReveal">Eu converto</h1>
    <h1 class="scrollReveal"> o seu </h1>
    <h1 class=" scrollReveal text-amber-400">potêncial</h1>
    <h1 class="scrollReveal ">em arte visual.</h1>
  </div>
</template>

<style>
.scrollReveal {
  opacity: 0;
  transform: translateY(100px);
  transition: opacity 1.5s ease,
    transform 1s ease;
}

.show {
  opacity: 1;
  transform: translateY(0px);
}
</style>
