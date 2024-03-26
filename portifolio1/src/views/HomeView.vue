<template>
  <HelloWorld/>

  <!-- HOME -->
  <section class="home-top">
  <div class="home">
    <div class="home-box">
  <h1>Olá, eu me chamo <span>Brenno</span><br>sou Front-End developer.</h1>
  <p class="textinho">Atualmente estou estudando Analise e Desenvolvimento De Sistemas na <br> FATEC SENAI, 
    almejo no futuro me tornar um programador full-stack. Nesse<br> momento busco aventuras  no mundo do Front-End onde 
    possa mostrar minhas<br> habilidades de design e código.</p>
  </div>
<div class="skill-text">
  <h1>Skills</h1>
  <div class="bar-text">
  <h1 class="html">html 60%</h1>
  <div :class="bar" style="background-image: linear-gradient(to right, rgb(111, 0, 111) 60%, rgb(118, 84, 118) 10%);"></div>
  <br>
  <h1 class="css">css 40%</h1>
  <div :class="bar" style="background-image: linear-gradient(to right, rgb(111, 0, 111) 40%, rgb(118, 84, 118) 10%);"></div>
  <br>
 <h1 class="js">javascript 30%</h1>
  <div :class="bar" style="background-image: linear-gradient(to right, rgb(111, 0, 111) 30%, rgb(118, 84, 118) 10%);"></div>
  <br>
  <h1 class="nd">node 20%</h1>
  <div :class="bar" style="background-image: linear-gradient(to right, rgb(111, 0, 111) 20%, rgb(118, 84, 118) 10%);"></div>
  <br>
  <h1 class="vue">vue 20%</h1>
  <div :class="bar" style="background-image: linear-gradient(to right, rgb(111, 0, 111) 20%, rgb(118, 84, 118) 10%);"></div>
</div>
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
.home-top{
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
.skill-text {
  display: flex;
  flex-direction: column;
}
.bar-text {
  font-size: 1rem;
}
.bar{
  display: flex;
  width: 15rem;
  height: 10px;
  border-radius: 10px;
}
.html {
  word-spacing: 8rem;
}
.css {
  word-spacing: 8.8rem;
}
.js {
  word-spacing: 4.4rem;
}
.nd {
  word-spacing: 7.8rem;
}
.vue {
  word-spacing: 8.8rem;
}
@media screen and (max-width: 1047px) {
  .home {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
  }
  .bar{
  display: flex;
  width: 10rem;
  height: 10px;
  border-radius: 10px;
}
.bar-text {
  font-size: 0.7rem;
}
.html {
  word-spacing: 5rem;
}
.css {
  word-spacing: 5.5rem;
}
.js {
  word-spacing: 2.4rem;
}
.nd {
  word-spacing: 5rem;
}
.vue {
  word-spacing: 5.5rem;
}
}

</style>
