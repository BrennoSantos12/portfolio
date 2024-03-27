<template>

  <section class="skill-section">
    <div class="container">
  <div class="skill-box">
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
<div class="projetos-container">
  <div class="projetos-box">
<div class="projetos1"></div>
<div class="projetos2"></div>
<div class="projetos3"></div>
  </div>
</div>
</div>
</section>
</template>

<script>
export default {
  name: 'ProjetosView',
  components: {
    
  },
  data() {
    return {
   bar: 'bar',
    }
  }
}


</script>

<style>
.skill-section {
  min-height: 100vh;
}
.container {
  display: flex;
  justify-content: space-between;
  margin: 15rem;
}
.skill-box {
  display: flex;
  text-align: center;
  justify-content: center;
}
.skill-text {
  display: flex;
  flex-direction: column;
}
.bar-text {
  font-size: 0.8rem;
}
.bar{
  display: flex;
  justify-content: center;
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
.projetos-container {
  display: flex;
  justify-content: center;
}
.projetos-box {
  display: flex;
  flex-direction: column;
   gap: 10rem;
}
.projetos1 {
  background-color: black;
  height: 350px;
  width: 350px;
}
.projetos2 {
  background-color: black;
  height: 350px;
  width: 350px;
}
.projetos3 {
  background-color: black;
  height: 350px;
  width: 350px;
}
@media screen and (max-width: 700px){
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5rem;
    align-items: center;
    gap: 10rem;
  }
}
</style>
