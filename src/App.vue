<template>
<AnimationText/>

  <section id="Home">
    
    <HomeVue/><TopMenu/>

  </section>



    <section id="Sobre">
    
     <SobreVue/>

    </section>

    <section id="Projetos">
    
  <ProjetoSection/>

    </section>
    <section id="Contatos">




    </section>
    
    
  </template>
  <script >
 
 
 import TopMenu from './components/TopMenu.vue';
 import HomeVue from './components/Home.vue';
 import SobreVue from './components/Sobre.vue';
 import AnimationText from './components/AnimationText.vue';
 import ProjetoSection from './components/Projetos.vue';
 

export default {
  name: 'App',
  components: {
    TopMenu,
    AnimationText,
    ProjetoSection,
    HomeVue,
    SobreVue,
  }
}
</script>
<style>

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}
body {
  background: linear-gradient(to right, rgb(67, 19, 103), rgb(122, 42, 183));
  padding: 0;
  margin: 0;
  font-family: "Bebas Neue", sans-serif;
  font-weight: 400;
  font-style: normal;
}
::-webkit-scrollbar {
  width: 0px;
}






#Contatos {
  min-height: 40vw;
  background-color: rgb(31, 31, 31);
}

  @media screen and (max-width: 600px) {
    body {
      overflow-x: hidden;
    }
  }

</style>
