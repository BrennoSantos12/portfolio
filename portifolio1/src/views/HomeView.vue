<template>
  <HelloWorld/>

  <!-- HOME -->
  <section class="home-top">
  <div class="home">
  <h1>Olá, eu me chamo <span>Brenno</span><br>sou Front-End developer.</h1>
  <p class="textinho">Atualmente estou estudando Analise e Desenvolvimento De Sistemas na FATEC SENAI, almejo no futuro me tornar um programador full-stack. Nesse momento busco aventuras no mundo do Front-End onde possa mostrar minhas habilidades de design e código</p>
</div>
</section>
<section class="home-skills">

<div class="skill-text">
<h1>Skills</h1>
</div>

</section>

<!-- fim HOME -->

</template>

<script >

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
   
    }
  }
}
</script>
<style>
.home-top{
  min-height: 61vh;

}
.home {
  margin: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1rem;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.textinho {
  font-size: 1rem;
}
span {
  color: blueviolet;
}
@media screen and (min-width: 700px) {
  .home {
    font-size: 0.5rem;
  }
}
.home-skills {
  min-height: 100vh; 
  background-color: #0f0f10;
}
.skill-text {
  display: flex;
  justify-content: center;
}
</style>
