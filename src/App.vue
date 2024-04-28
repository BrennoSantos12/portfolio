<template>
<AnimationText/>
  
  <section id="Home">
    <div class="titulo-container">
      <h1 class="titulo">Brenno Santos</h1>
      <div class="menu"><TopMenu/></div>
    </div>
    <div class="sub-titulo-container">
      <h2 class="sub-titulo" >Front-End Developer</h2>
      <div class="link-container">
        <div class="link1"> <a href="https://github.com/BrennoSantos12"><img src="@\assets\github.png" alt="GitHub" style="height: 4.5rem; width: 4.5rem;"></a></div>
        <div class="link2"><a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img src="@\assets\LinkedIn.png" alt="LinkedIn" style="height: 4rem; width: 4rem;"></a></div>
      </div>
    </div>
    
  </section>



    <section id="Sobre">
     <div class="sobre-container">
     <h1 class="sobre-titulo" v-motion-slide-visible-left :delay="300">
      Estudo Análise e Desenvolvimento de Sistemas na FATEC- SENAI e estou
       trilhando meu caminho para me tornar um programador Full-Stack. Busco aventuras e desafios 
       no mundo do Front-End para mostrar minhas habilidades de design e código e explorar todo meu 
       potencial. Confira meu portfólio e vamos criar juntos!</h1>

       <button class="sobre-btn">Saiba mais sobre mim</button>
     </div>

    </section>

    <section id="Projetos">
    
  <ProjetoSection/>

    </section>
    <section id="Contatos">




    </section>
    
    
  </template>
  <script >
 
 
 import TopMenu from './components/TopMenu.vue';
 import AnimationText from './components/AnimationText.vue';
 import ProjetoSection from './components/Projetos.vue';
 

export default {
  name: 'App',
  components: {
    TopMenu,
    AnimationText,
    ProjetoSection,
  },
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
#Home {
  min-height: 50vw;
  margin: 1rem;
  color: aliceblue;
 
}
#Home .titulo-container { 
 display: flex;
 justify-content: space-between;

}
#Home .titulo {
  font-size: 5rem;
  animation: animacao-left 1s ease-in-out;
}
#Home .sub-titulo-container {
  display: flex;
  justify-content: space-between;
  margin-left: 3rem;
}
#Home .sub-titulo {
  animation: animacao-top 1.2s ease-in-out;
}
#Home .link-container {
display: flex;
flex-direction: column;
gap: 3rem;
margin: 1rem;
}

#Home .link1 {
  animation: animacao-bottom 1.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}
#Home .link1:hover {
  transform: scale(0.8);
}
#Home .link2 {
  animation: animacao-top 1.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}
#Home .link2:hover {
  transform: scale(0.8);
}




  #Sobre{
    color: white;
    background-color: rgb(26, 23, 28);
    min-height: 40vw;
    display: flex;
    align-items: center;
  }
#Sobre .sobre-container {
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   gap: 2rem;
}
#Sobre .sobre-titulo {
  font-size: 1rem;
  width: 40%;
  overflow-wrap: break-word;
}
#Sobre .sobre-btn {
  background-color: rgb(51, 51, 51);
  color: aliceblue;
  height: 4rem;
  width: 10rem;
  border-radius: 5px;
  border-style: none;
  box-shadow: 0px 0px 4px rgba(0, 0, 0);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}
#Sobre .sobre-btn:hover {
  background-color: rgb(38, 38, 38);
  color: rgb(145, 72, 167);
  transform: scale(0.9);
}


#Projetos {
  min-height: 100vw;
}


  @media screen and (max-width: 600px) {
    body {
      overflow-x: hidden;
    }
    #Home {
      min-height: 150vw;
    }
    #Home .titulo {
      font-size: 4rem;
    }
  
    #Home .sub-titulo-container {
      display: flex;
      flex-direction: column;
      margin-left: 0;
    }
    #Home .link-container {
      display: flex;
      flex-direction: initial;
    }
    #Home .link2 {
      animation: animacao-left 1.2s ease-in-out;
    }
    #Home .link1 {
      animation: animacao-right 1.2s ease-in-out;
    }
  #Sobre {
    min-height: 100vw;
  }
  #Sobre .sobre-titulo {
    font-size: 0.8rem;
    width: 80%;
    overflow-wrap: break-word;
  }
  



  }

</style>
