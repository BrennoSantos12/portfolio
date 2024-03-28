<template>
  <HelloWorld/>
  <div class="home">
    <div class="home-box">
  <h1>Olá, eu me chamo <span>Brenno</span><br>e sou Front-End developer.</h1>
  <p class="textinho">Atualmente estou estudando Analise e Desenvolvimento De Sistemas na <br> FATEC SENAI, 
    almejo no futuro me tornar um programador full-stack. Nesse<br> momento busco aventuras  no mundo do Front-End onde 
    possa mostrar minhas<br> habilidades de design e código.</p>
  </div>
</div>
<div class="contatos">
     <a href="https://wa.me/qr/3ENVUNXU7SGCH1" alt="whatsapp link" :class="botao">WhatsApp</a>
     <a href="https://www.linkedin.com/in/brenno-santos-692752290/" alt="linkedin link" :class="botao">Linkedin</a>
     <a href="https://github.com/BrennoSantos12" alt="github link" :class="botao">GitHub</a>
   </div>

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
.home-section{
  min-height: 100vh;
}

.home {
  margin: 5rem;
  display: flex;
 justify-content: center;
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
  box-shadow:0px 0px 10px rgb(0, 0, 0) ;
  height: 4rem;
  width: 9rem;
  border-radius: 10px;
  transition: transform 0.3s ease;
}
.botao:hover {
  text-shadow: 0px 0px 10px rgb(174, 174, 245);
  transform: scale(0.8);
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
.contatos {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
.botao {
  height: 4rem;
  width: 15rem;
}
}
</style>
