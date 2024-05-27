<template>
    <div class="sobre-container" id="vivo2">
      <h1>SOBRE MIM</h1>
        <h1 class="sobre-titulo" >
         Estudo Análise e Desenvolvimento de Sistemas na FATEC- SENAI e estou
          trilhando meu caminho para me tornar um programador com skills em <span class="span">Front-End</span> e <span class="span">Back-end</span>.
           Busco aventuras e desafios 
          no mundo do <span class="span">Front-End</span> para mostrar minhas habilidades de design e código e explorar todo meu 
          potencial. <br> Possuo habilidades em: <span class="span">HTML5, CSS3, javascript, Python, Node.js e Vue.js.</span>
          Confira meu portfólio e vamos trabalhar juntos!</h1>
   
          <a class="button" href="../files/CV- Brenno Santos.pdf">Baixe o meu Currículo</a>
        </div>

</template>

<style>

#Sobre{
  z-index: 1;
  position: relative;
    color: white;
    background-color: rgb(26, 23, 28);
    height: 40vw;
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
  color: aliceblue;
}
.span {
  color: yellow;
}
.button {
  text-decoration: none;
  --color: #6300a9;
  padding: 1em 1.6em;
  background-color: transparent;
  border-radius: 0.3em;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: 0.5s;
  font-weight: 400;
  font-size: 17px;
  border: 1px solid;
  text-transform: uppercase;
  color: var(--color);
  z-index: 1;
 }
 
  .button::after {

  content: '';
  display: block;
  width: 50px;
  height: 50px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--color);
  transition: 1.1s ease;
 }

 .button::after {
  left: calc(40% + 1em);
  top: calc(200% + 1em);
 }
 
 .button:hover::before, .button:hover::after {
  height: 410px;
  width: 410px;
 }
 
 .button:hover {
  color: rgb(74, 2, 74);
  filter: brightness(0.9);
 }

 @media screen and (max-width: 900px) {
       
  #Sobre {
    height: 70vh;
  }
  #Sobre .sobre-titulo {
    font-size: 0.8rem;
    width: 80%;
    overflow-wrap: break-word;
  }
 }

</style>

<script>
export default {
    name: 'SobreVue',
   mounted() {
    
    const vivo2 = document.getElementById("vivo2");
    
   
    const translateN = 500;
    window.onscroll = () => {
      const PosicaoScroll = window.scrollY;
   const AlturaDaPagina = window.innerHeight;
   const PontoDeInicio = 0;
   const PontoFinal = AlturaDaPagina / 2;

   if (PosicaoScroll + AlturaDaPagina / 2 >= PontoDeInicio) {
       const translateY = Math.min(translateN, Math.max(0, (PosicaoScroll - PontoDeInicio) * (translateN / (PontoFinal - PontoDeInicio))));
       vivo2.style.transform = `translate(0px, ${translateY}px);`;
   }
  }
    }
  }




    
</script>