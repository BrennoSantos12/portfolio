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
}

</style>
