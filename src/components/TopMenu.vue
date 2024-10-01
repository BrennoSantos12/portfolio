<template>
  <div class="top-container">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content" id="conteudo">
        <h4 class="titulo-cores">Mude as cores do jeito que você quiser!</h4>
        <div class="bloco">
          <h4 class="blocos-titulo">Temas prontos</h4>
          <div class="corOriginal" @click="voltar()"></div>

          <div @click="alterarCor(0, 0); alterarCor(1, 1);
          alterarCor(2, 2); alterarCor(3, 1);
          alterarCor(4, 4); alterarCor(5, 3);
          alterarCor(6, 1); alterarCor(7, 1);
          alterarCor(8, 5); alterarCor(9, 5);
          alterarCor(10, 5); alterarCor(11, 5);
          alterarCor(12, 5); alterarCor(13, 2)" class="corRosa"></div>


        </div>

        <div class="cores">
          <h4 class="cores-titulo">Cores principais</h4>
          <div class="R-container">
            <input type="range" name="R" min="0" max="255" value="0" id="R" class="R">
            <h4>Red</h4>
          </div>
          <div class="G-container">
            <input type="range" name="G" min="0" max="255" value="0" id="G" class="G">
            <h4>Green</h4>
          </div>
          <div class="B-container">
            <input type="range" name="B" min="0" max="255" value="0" id="B" class="B">
            <h4>Blue</h4>
          </div>
        </div>
        <div class="painel-container">
          <h4 class="cores-secundarias">Cores secundarias</h4>
          <div class="painel-secundaria">
            <input type="color" name="painel" id="painel" class="painel">
            <h4>Blocos secundarios</h4>
          </div>
          <div class="painel-secundaria">
            <input type="color" name="painel" id="painel2" class="painel">
            <h4>Letras</h4>
          </div>



        </div>
      </div>
    </div>

    <span style="font-size:40px; cursor:pointer" id="btn" @click="openNav()">&#9776;</span>

  </div>

</template>


<script>

export default {
  name: 'TopMenu',

  methods: {

    openNav() {
      document.getElementById("myNav").style.width = "50%";
      document.getElementById("btn").style.visibility = "hidden";
      document.getElementById("conteudo").style.visibility = "visible";
      document.getElementById("conteudo").style.opacity = "1";
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
      setTimeout(function () {
      document.getElementById("btn").style.visibility = "visible"; 
      }, 300);
      document.getElementById("conteudo").style.visibility = "hidden";
      document.getElementById("conteudo").style.opacity = "0";
    },

    alterarCor(variavelIndex, corIndex) {
      const variavel = this.variaveis[variavelIndex];
      const cor = this.cores[corIndex];
      document.documentElement.style.setProperty(variavel, cor);
    },

    voltar() {
      window.location.reload();
    }



  },
  data() {
    return {
     
      variaveis: [
     /* 0 */      '--primary-color',
     /* 1 */      '--letra-color',
     /* 2 */      '--secundary-color',
     /* 3 */      '--secundary-letter-color',
     /* 4 */      '--projeto-color',
     /* 5 */      '--projeto-hover-color',
     /* 6 */      '--button-sobre-color',
     /* 7 */      '--button-contato-color',
     /* 8 */      '--button-contato-2-color',
     /* 9 */      '--form-name-color',
     /* 10 */      '--form-email-color',
     /* 11 */     '--form-msg-color',
     /* 12 */     '--form-btn-color',
     /* 13 */     '--form-btn-letter-color',

      ],

      cores: [
           /* ROSA */
     /* 0 */   'linear-gradient(90deg, rgba(47,0,47,1) 0%, rgba(241,26,123,1) 0%, rgba(168,18,105,1) 51%, rgba(168,18,105,1) 100%)',
     /* 1 */   '#FFE5AD',
     /* 2 */   '#3E001F',
     /* 3 */   '#540e37',
     /* 4 */   'linear-gradient(90deg, rgba(47,0,47,1) 0%, rgba(241,26,123,1) 0%, rgba(143,24,93,1) 52%)',
     /* 5 */   '#982176',
        /* FIM ROSA */

      ],

    }
  },
  mounted() {

    const rangeR = document.getElementById('R');
    const rangeG = document.getElementById('G');
    const rangeB = document.getElementById('B');



    function updateBackgroundColor() {
      const R = rangeR.value;
      const G = rangeG.value;
      const B = rangeB.value;

      const cores = `rgb(${R}, ${G}, ${B})`;
      document.documentElement.style.setProperty('--primary-color', cores);
      document.documentElement.style.setProperty('--button-sobre-color', cores);
      document.documentElement.style.setProperty('--projeto-color', cores);
      document.documentElement.style.setProperty('--projeto-hover-color', cores);
      document.documentElement.style.setProperty('--button-contato-2-color', cores);
      document.documentElement.style.setProperty('--form-name-color', cores);
      document.documentElement.style.setProperty('--form-email-color', cores);
      document.documentElement.style.setProperty('--form-msg-color', cores);
      document.documentElement.style.setProperty('--form-btn-color', cores);
      document.documentElement.style.setProperty('--button-contato-color', 'aliceblue');
    }

    rangeR.addEventListener('input', updateBackgroundColor);
    rangeG.addEventListener('input', updateBackgroundColor);
    rangeB.addEventListener('input', updateBackgroundColor);


    const painel = document.getElementById("painel");
    function updatePainel() {
      const painelValue = painel.value
      document.documentElement.style.setProperty('--secundary-color', painelValue);
    }
    painel.addEventListener('input', updatePainel);

    const painel2 = document.getElementById("painel2");

    function updatePainel2() {
      const painel2Value = painel2.value
      document.documentElement.style.setProperty('--letra-color', painel2Value);
      document.documentElement.style.setProperty('--secundary-letter-color', painel2Value);
    }
    painel2.addEventListener('input', updatePainel2);

  }

}
</script>


<style>
.titulo-cores {
  color: aliceblue;
  padding: 2rem;
}

.bloco {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
}

.blocos-titulo {
  color: aliceblue;
}

.corOriginal {
  background-color: #6300a9;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.corRosa {
  background: #F11A7B;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}
/* 
.rainbow {
  background: linear-gradient(90deg,
      red,
      orange,
      yellow,
      green,
      blue,
      indigo,
      violet);
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
} 
*/
.cores {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 15rem;
}

.cores-titulo {
  color: aliceblue;
}

.R-container {
  display: flex;
  color: red;
  flex-direction: column;
}


.G-container {
  display: flex;
  color: green;
  flex-direction: column;

}

.B-container {
  display: flex;
  color: blue;
  flex-direction: column;

}



.painel-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  transform: translateY(-40px);
}

.cores-secundarias {
  color: aliceblue;
}

.painel-secundaria {
  color: aliceblue;
}

.painel {
  background-color: rgb(255, 255, 255);
  height: 5rem;
  width: 5rem;
}

#btn {
  color: var(--letra-color);
  position: fixed;
  margin: 3rem;
  z-index: 10;
  top: 0;
  right: 0;
  animation: animacao-right 1.5s ease-in-out;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  background-color: black;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  transform: translateY(-60px);
  opacity: 0;
  transition: opacity 0.3s ease-in-out 0.3s;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-width: 600px) {
  .overlay a {
    font-size: 20px
  }

  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }

  #btn {
    margin: 2rem;
    animation: animacao-bottom 1.5s ease-in-out;
  }

  .cores {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    height: 20rem;
  }

  .bloco {
    flex-direction: column;
  }

  .R-container {
    gap: 0;
  }

  .G-container {
    gap: 0;
  }

  .B-container {
    gap: 0;
  }

  .painel-container {
    flex-direction: column;
    padding: 20px;
  }
}

</style>
