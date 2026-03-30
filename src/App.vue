<script setup lang="ts">
import Home from "./views/Home.vue";
import Curtain from "./components/Curtain.vue";
import About from "./views/About.vue";
import Projects from "./views/Projects.vue";
import Contact from "./views/Contact.vue";
</script>

<template>
  <header>
    <div>
      <Curtain />
      <Home />
      <div id="sobre"><About /></div>
      <div id="projetos"><Projects /></div>
      <div id="servicos"><Contact /></div>
    </div>
  </header>
</template>
