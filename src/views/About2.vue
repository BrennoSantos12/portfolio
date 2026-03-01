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

  const todosTexto = document.querySelectorAll('.scrollReveal2')
  todosTexto.forEach(el => observer.observe(el))
})
</script>

<template>
  <div class="h-[100vh] flex flex-col justify-center items-center text-white text-8xl font-oswald font-extrabold">
    <h1 class="scrollReveal2">Web dev</h1>
    <h1 class="scrollReveal2"> o seu </h1>
    <h1 class=" scrollReveal2 text-amber-400">potêncial</h1>
    <h1 class="scrollReveal2">em arte visual.</h1>
  </div>
</template>

<style>
.scrollReveal2 {
  opacity: 0;
  transform: translateX(-100px);
  transition: opacity 1.5s ease,
    transform 1s ease;
}

.show {
  opacity: 1;
  transform: translateY(0px);
}
</style>
