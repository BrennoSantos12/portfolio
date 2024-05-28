<template>
<div class="home-container" id="home-container">
    <div class="titulo-container" >
        <h1 class="titulo">Brenno Santos</h1>
        <h2 class="sub-titulo">Front-End Developer</h2> 
      </div>
      
        <div class="link-container">
          <div class="link1"> <a href="https://github.com/BrennoSantos12"><img src="@/assets/github.png" alt="GitHub" style="height: 4.5rem; width: 4.5rem;"></a></div>
          <div class="link2"><a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img src="@/assets/LinkedIn.png" alt="LinkedIn" style="height: 4rem; width: 4rem;"></a></div>

      </div>
      <div class="marquee">
  <h1>‎ HTML5 - CSS3 - JAVASCRIPT - PYTHON - NODE.JS - VUE.JS -</h1>
</div>
</div>
</template>
<script>

export default {
   name: 'HomeVue',
   mounted() {
    function Marquee(selector, speed) {
  const parentSelector = document.querySelector(selector);
  const clone = parentSelector.innerHTML;
  const firstElement = parentSelector.children[0];
  let i = 0;
  console.log(firstElement);
  parentSelector.insertAdjacentHTML('beforeend', clone);
  parentSelector.insertAdjacentHTML('beforeend', clone);

  setInterval(function () {
    firstElement.style.marginLeft = `-${i}px`;
    if (i > firstElement.clientWidth) {
      i = 0;
    }
    i = i + speed;
  }, 0);
}

window.addEventListener('load', Marquee('.marquee', 0.5))


const container = document.getElementById('home-container');
const translateN = 500;

window.addEventListener('scroll', () => {
   const PosicaoScroll = window.scrollY;
   const AlturaDaPagina = window.innerHeight;
   const AlturaDoDocumento = document.documentElement.scrollHeight;

   const PontoDeInicio = 0;
   const PontoFinal = AlturaDoDocumento - AlturaDaPagina;

   const translateY = Math.min(translateN, Math.max(0, (PosicaoScroll - PontoDeInicio) * (translateN / (PontoFinal - PontoDeInicio))));
   container.style.transform = `translate(0px, ${translateY}px)`;
});

}


   }

</script>
<style>

.home-container {
  width: 100%;
 z-index: 0;
 position: fixed;
}
.marquee {
  overflow: hidden;
  display: flex;
  animation: animacao-top 1.3s ease-in-out;
}

.marquee h1{
  margin-top: 3rem;
  font-size: 5em;
  white-space: nowrap;
  text-transform: uppercase;
  word-spacing: 20px; 
}

#Home {
      height: 100vh;
    background: linear-gradient(to right, rgb(67, 19, 103), rgb(122, 42, 183));
    color: aliceblue;
  
  }
   .titulo-container { 
  display: flex;
  flex-direction: column;
  }
   .titulo {
    font-size: 5rem;
    animation: animacao-left 1s ease-in-out;
   margin: 2rem;
  }
  
   .sub-titulo {
    margin: 2rem;
    animation: animacao-top 1.2s ease-in-out;
  }
   .link-container {
   display: flex;
   align-items: flex-end;
   justify-content: baseline;
   flex-direction: column;
   gap: 40px;
   margin: 2rem;
  }
  
   .link1 {
    animation: animacao-bottom 1.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }
   .link1:hover, .link2:hover {
    transform: scale(0.8);
  }
   .link2 {
    animation: animacao-top 1.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
   }
  @media screen and (max-width: 700px) {
      #Home .titulo {
        font-size: 4rem;
      }
    
      #Home .sub-titulo-container {
        display: flex;
        flex-direction: column;
        
      }
    
      .marquee h1 {
        margin-top: 5rem;
      font-size: 3em;
      }
      #Home .link-container {
        display: flex;
        flex-direction: initial;
        margin: 2rem;
        
      }
      #Home .link2 {
        animation: animacao-right 1.2s ease-in-out;
      }
      #Home .link1 {
        margin-top: 0rem;
        animation: animacao-left 1.2s ease-in-out;
      }
  }

</style>

