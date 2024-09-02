<template>
  <AnimationText />
  <TopMenu />
  <section id="Home">

    <HomeVue />

  </section>



  <section id="Sobre">

    <SobreVue />

  </section>

  <section id="Projetos">

    <ProjetoSection />

  </section>
  <section id="Contatos">

    <ContatosVue />

  </section>


</template>
<script>


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
:root {
  --primary-color: linear-gradient(to right, rgb(67, 19, 103), rgb(122, 42, 183));
  --secundary-color: rgb(26, 23, 28);
  --letra-color: aliceblue;
  --secundary-letter-color: aliceblue;
  --projeto-color: rgba(72, 8, 82, 1);
  --projeto-hover-color: rgb(92, 26, 142);
  --button-sobre-color: #6300a9;
  --button-contato-color: aliceblue;
  --button-contato-2-color: #6300a9;
  --form-name-color: #6300a9;
  --form-email-color: #6300a9;
  --form-msg-color: #6300a9;
  --form-btn-color: #6300a9;
  --form-btn-letter-color: rgb(74, 2, 74);
}

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
