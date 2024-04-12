<template>

  
  <section id="Home">
   
    <div class="titulo-container">
      <h1 class="titulo" v-motion-slide-left :delay="300">Brenno Santos</h1>
      <h2 class="sub-titulo" v-motion-slide-right :delay="200">Futuro Full-Stack <br>Developer</h2>
    </div>
    <TopMenu/>
   
  </section>
    <section id="Sobre">
     <div class="sobre-container">
     <h1 class="sobre-titulo" v-motion-slide-visible-left :delay="300">Estudo Análise e Desenvolvimento de Sistemas na FATEC- SENAI e estou
       trilhando meu caminho para me tornar um programador Full-Stack. Busco aventuras e desafios 
       no mundo do Front-End para mostrar minhas habilidades de design e código e explorar todo meu 
       potencial. Confira meu portfólio e vamos criar juntos!</h1>
       <button class="sobre-btn">Saiba mais sobre mim</button>
     </div>
    
    </section>

    <section id="Projetos">
asd
    </section>
    <section id="Contatos">

    </section>

    
</template>
<script >


import TopMenu from './components/TopMenu.vue';
   

export default {
  name: 'App',
  components: {
    TopMenu,
  },
}
</script>
<style>
html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
body {
  background-color: rgb(67, 19, 103);
  padding: 0;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
#Home {
  min-height: 50vw;
  color: aliceblue;
  background-color: rgb(67, 19, 103);
}
#Home .titulo-container { 
 display: flex;
 flex-direction: column;
 margin: 3rem;
}
#Home .titulo {
  font-size: 5rem;
  
 
}
@media screen and (max-width: 600px) {
 
  #Home .titulo-container { 
    margin: 2rem;
   font-size: 1rem;
   }
   #Home .titulo {
    font-size: 3rem;
  }
  #Home {
    min-height: 200vw;
  }
  #Sobre{
    min-height: 200vw;
  }
  body {
    overflow-x: hidden;
  }
}

  #Sobre{
    background-color: rgb(157, 157, 157);
    height: 100vw;
  }
  #Sobre .sobre-container {
    display: flex;
    flex-direction: column;
    margin: 4rem;
  }
  #Sobre .sobre-titulo {
    display: flex;
    margin-top: 12rem;
    width: 60%;
    font-size: 1.2rem;
  }
  #Sobre .sobre-btn {
    width: 12rem;
    height: 4rem;
    color: aliceblue;
    background-color: rgb(47, 47, 47);
    margin: 4rem;
    box-shadow: 0px 0px 10px;
    border-radius: 0.4rem;
  }
</style>
