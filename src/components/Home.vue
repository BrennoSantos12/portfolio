<template>
  <div class="home-container" id="home-container">
    <div class="titulo-container">
      <h1 class="titulo">Brenno Santos</h1>
      <h2 class="sub-titulo">Front-End Developer</h2>
      <div class="bloco">
        <div class="corOriginal" @click="voltar()"></div>
        <div @click="alterarCor(0, 0); alterarCor(1, 1);
        alterarCor(2, 2); alterarCor(3, 0);
        alterarCor(4, 3); alterarCor(5, 1);
        alterarCor(6, 1); alterarCor(7, 5);
        alterarCor(8, 5); alterarCor(9, 5);
        alterarCor(10, 5); alterarCor(11, 5);
        alterarCor(12, 2)" class="corRosa"></div>
      </div>
    </div>

    <div class="link-container">
      <div class="link1"> <a href="https://github.com/BrennoSantos12"><img src="@/assets/github.png" alt="GitHub"
            style="height: 4.5rem; width: 4.5rem;"></a></div>
      <div class="link2"><a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img src="@/assets/LinkedIn.png"
            alt="LinkedIn" style="height: 4rem; width: 4rem;"></a></div>

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
      const AlturaDaPagina = window.innerHeight / 10;
      const AlturaDoDocumento = document.documentElement.scrollHeight;

      const PontoDeInicio = 0;
      const PontoFinal = AlturaDoDocumento - AlturaDaPagina;

      const translateY = Math.min(translateN, Math.max(0, (PosicaoScroll - PontoDeInicio) * (translateN / (PontoFinal - PontoDeInicio))));
      container.style.transform = `translate(0px, ${translateY}px)`;


    })


  },

  data() {
    return {

      variaveis: [
     /* 0 */      '--primary-color',
     /* 1 */      '--letra-color',
     /* 2 */      '--secundary-color',
     /* 3 */      '--projeto-color',
     /* 4 */      '--projeto-hover-color',
     /* 5 */      '--button-sobre-color',
     /* 6 */      '--button-contato-color',
     /* 7 */      '--button-contato-2-color',
     /* 8 */      '--form-name-color',
     /* 9 */      '--form-email-color',
     /* 10 */     '--form-msg-color',
     /* 11 */     '--form-btn-color',
     /* 12 */     '--form-btn-letter-color'
      ],

      cores: [
     /* 0 */   'linear-gradient(90deg, rgba(47,0,47,1) 0%, rgba(241,26,123,1) 0%, rgba(168,18,105,1) 51%, rgba(168,18,105,1) 100%)',
     /* 1 */   '#FFE5AD',
     /* 2 */   '#3E001F',
     /* 3 */   '#8f185d',
     /* 4 */   'linear-gradient(90deg, rgba(47,0,47,1) 0%, rgba(241,26,123,1) 0%, rgba(143,24,93,1) 52%)',
     /* 5 */   '#982176'
      ]
    }
  },

  methods: {

    alterarCor(variavelIndex, corIndex) {

      const variavel = this.variaveis[variavelIndex];

      const cor = this.cores[corIndex];

      document.documentElement.style.setProperty(variavel, cor);
    },
    voltar() {
      window.location.reload();
    }
  }



}




</script>
<style>
.bloco {
  display: flex;
  transform: translate(80px);
  gap: 20px;
}

.corOriginal {
  background-color: #6300a9;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.corRosa {
  background-color: #F11A7B;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

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

.marquee h1 {

  font-size: 5em;
  white-space: nowrap;
  text-transform: uppercase;
  word-spacing: 20px;
}

#Home {
  height: 100vh;
  background: var(--primary-color);
  color: var(--letra-color);

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
  transform: translate(-20px, -10px)
}

.link1 {
  animation: animacao-bottom 1.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
}

.link1:hover,
.link2:hover {
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
