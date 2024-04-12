<template>

  
  <section id="Home">
   
    <div class="titulo-container">
      <h1 class="titulo">Brenno Santos</h1>
      <h2 class="sub-titulo">Futuro Full-Stack <br>Developer</h2>
    </div>
    <TopMenu/>
   
  </section>
    <section id="Sobre">
     asdadas
    </section>
    <section id="Projetos">
asd
    </section>
    <section id="Contatos">

    </section>

    
</template>
<script >

import TopMenu from '@/components/TopMenu.vue';

   

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
}
body {
  background-color: rgb(67, 19, 103);
  padding: 0;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;

}

@media screen and (max-width: 600px) {
  section {
    height: 200vw;
  }
  #Home {
    min-height: 300vw;
  }
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
  font-size: 3rem;
  transform: translateX(0px);
  animation: titulo 1s ease-in-out;
 
}
#Home .sub-titulo {
  transform: translateY(-40px);
  animation: sub-titulo 1.5s ease-in-out;
}
@keyframes titulo {
  0% {opacity: 0;
    transform: translateX(-150px);}
    50% {opacity: 0; }
    100% {opacity: 1;}
    }
@keyframes sub-titulo {
  0% {opacity: 0;
    transform: translateY(100px);}
    50% {opacity: 0;}
    100% {opacity: 1;}
    }
</style>
