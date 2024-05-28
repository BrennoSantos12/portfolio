<template>
<AnimationText/>
<TopMenu/>
  <section id="Home">
    
    <HomeVue/>

  </section>



    <section id="Sobre">
    
     <SobreVue/>

    </section>

    <section id="Projetos">
    
  <ProjetoSection/>

    </section>
    <section id="Contatos">

      <ContatosVue/>

    </section>
    
    
  </template>
  <script >
 
 
 import TopMenu from './components/TopMenu.vue';
 import HomeVue from './components/Home.vue';
 import SobreVue from './components/Sobre.vue';
 import AnimationText from './components/AnimationText.vue';
 import ProjetoSection from './components/Projetos.vue';
 import ContatosVue from './components/Contatos.vue';


export default {
  name: 'App',
  components: {
    TopMenu,
    AnimationText,
    ProjetoSection,
    HomeVue,
    SobreVue,
    ContatosVue,
  }
}
</script>
<style>

html {
  font-family: "Bebas Neue", sans-serif;
    font-weight: 400;
    font-style: normal;
  scroll-behavior: smooth;
  overflow-x: hidden;
  
}
body {
  background-color: rgb(29, 29, 29);
}
 
::-webkit-scrollbar {
  width: 0px;
}
* {
  margin: 0;
  padding: 0;
}

</style>
