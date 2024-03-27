<template>
  <HelloWorld/>

  <!-- HOME -->
  <section class="home-section">
  <div class="home">
    <div class="home-box">
  <h1>Olá, eu me chamo <span>Brenno</span><br>e sou Front-End developer.</h1>
  <p class="textinho">Atualmente estou estudando Analise e Desenvolvimento De Sistemas na <br> FATEC SENAI, 
    almejo no futuro me tornar um programador full-stack. Nesse<br> momento busco aventuras  no mundo do Front-End onde 
    possa mostrar minhas<br> habilidades de design e código.</p>
  </div>
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
   bar: 'bar',
    }
  }
}
</script>
<style>
.home-section{
  min-height: 100vh;
}
.home {
  margin: 5rem;
  display: flex;
  justify-content: space-around;
  font-size: 1.5rem;
  gap: 10px;
 
}
.home-box {
 display: flex;
 flex-direction: column;
}
.textinho {
  font-size: 1rem;
}
span {
  color: blueviolet;
}

@media screen and (max-width: 1047px) {
  .home {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }
.bar-text {
  font-size: 0.7rem;
}
}
.github {
  background-color: rgb(2, 2, 2);
  height: 4rem;
  width: 4rem;
}
</style>
