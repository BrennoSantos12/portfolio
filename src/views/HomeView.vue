<template>
  <HelloWorld/>
 
  <div class="home">
    <div class="home-box">
  <h1 class="home-h1">Olá, eu me chamo <span>Brenno</span><br> e sou Front-End developer.</h1>
  <p class="home-p">Estudo Análise e Desenvolvimento de Sistemas na FATEC- SENAI e estou trilhando meu caminho
     para me tornar um programador Full-Stack. Busco aventuras e desafios no mundo do Front-End para mostrar
      minhas habilidades de design 
    e código e explorar todo meu potencial.
Confira meu portfólio e vamos criar juntos! 
</p>

  </div>
  <section class="linguagens-position">
  <div class="linguagens-decoration">
  <h1 class="linguagens-text">Algumas tecnologias que eu utilizo.</h1>
  <div class="linguagens-box">
    <img src="../assets/html_icon.png" alt="html" class="img-linguagens">
    <img src="../assets/css_icon.png" alt="css" class="img-linguagens">
    <img src="../assets/javascript_icon.png" alt="javascript" class="img-linguagens">
    <img src="../assets/node_icon.png" alt="node.js" class="img-linguagens">
    <img src="../assets/vue_icon.png" alt="vue.js" class="img-linguagens">
  </div>
</div>
</section>
</div>
    
<div class="contatos">
      <a href="../files/CV- Brenno Santos.pdf" alt="download curriculo" download :class="botao">Currículo</a> 
     <a href="https://www.linkedin.com/in/brenno-santos-692752290/" alt="linkedin link" :class="botao">LinkedIn</a>
     <a href="https://github.com/BrennoSantos12" alt="github link" :class="botao">GitHub</a>
   </div>
  
  <h4 class="create">@Create by Brenno Santos</h4>
</template>

<script >

import HelloWorld from '@/components/HelloWorld.vue';


export default {
  name: 'HomeView',
  components: {
    HelloWorld,
   
  },
  data() {
    return {
      botao: 'botao',
    }
}
}
</script>
<style>

.home {
  margin: 4.5rem;
  display: flex;
  flex-direction: column;
 justify-content: center;
  font-size: 1rem;
  gap: 10px;
}
.home-box {
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 margin: 3rem;
}

.home-p {
  font-size: 1rem;
  letter-spacing: 0.1rem;
}
span {
  color: blueviolet;
}
.linguagens-decoration {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
}
.linguagens-text {
  display: flex;
  justify-content: center;
  margin: 3rem;
  color: blueviolet;
  
}
.linguagens-box {
display: flex;
justify-content: center;
gap: 2rem;
}
.img-linguagens {
  display: flex;
  align-self: center;
  height: 70px;
  width: 70px;
}
.linguagens-position {
 margin-bottom: 4rem;
}
.contatos {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 5rem;
}
.botao {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: aliceblue;
  background-color: rgb(61, 21, 83);
  box-shadow:0px 2px 4px rgb(0, 0, 0) ;
  height: 4rem;
  width: 9rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.botao:hover {
  text-shadow: 0px 0px 6px rgb(174, 174, 245);
  transform: scale(0.8);
}
@media screen and (max-width: 1047px) {
  .home {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .home-h1 {
    font-size: 2rem;
    width: 200%;
  }
  .home-p {
    width: 200%; 
    font-size: 0.7rem;
  }
.linguagens-position {
    display: flex;
    justify-content: center;
  }
  .linguagens-text {
    display: flex;
    align-self: center;
    font-size: 1.1rem;
    width: 100%;
  }
  .img-linguagens {
    display: flex;
    align-self: center;
    justify-content: center;
    height: 40px;
    width: 35px;
  }
.bar-text {
  font-size: 0.7rem;
}
.contatos {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.botao {
  height: 3rem;
  width: 10rem;
}
.create {
  display: flex;
 
}
}
.create {
  display: flex;
  justify-content: center;
  margin: 1.8rem;
  font-size: 0.6rem;
}
</style>
