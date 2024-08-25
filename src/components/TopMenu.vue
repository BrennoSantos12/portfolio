<template>
  <div class="top-container">
    <div id="myNav" class="overlay">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
      <div class="overlay-content">
        <div class="bloco">

          <div class="corOriginal" @click="voltar()"></div>

          <div @click="alterarCor(0, 0); alterarCor(1, 1);
      alterarCor(2, 2); alterarCor(3, 1);
      alterarCor(4, 4); alterarCor(5, 3);
      alterarCor(6, 1); alterarCor(7, 1);
      alterarCor(8, 5); alterarCor(9, 5);
      alterarCor(10, 5); alterarCor(11, 5);
      alterarCor(12, 5); alterarCor(13, 2)" class="corRosa"></div>

          <div @click="
        alterarCor(0, 6); alterarCor(1, 9); alterarCor(2, 10); alterarCor(3, 9);
      alterarCor(4, 6); alterarCor(5, 7); alterarCor(6, 8);
      alterarCor(7, 9); alterarCor(8, 8); alterarCor(9, 8); alterarCor(10, 8);
      alterarCor(11, 8); alterarCor(12, 8); alterarCor(13, 6);
      " class="corAzul"></div>
          <div class="corVermelho" @click="
        alterarCor(0, 11); alterarCor(1, 9); alterarCor(2, 10); alterarCor(3, 9);
      alterarCor(4, 11); alterarCor(5, 12); alterarCor(6, 13);
      alterarCor(7, 9); alterarCor(8, 13); alterarCor(9, 13); alterarCor(10, 13);
      alterarCor(11, 13); alterarCor(12, 13); alterarCor(13, 11);"></div>
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
    },
    closeNav() {
      document.getElementById("myNav").style.width = "0%";
      document.getElementById("btn").style.visibility = "visible";
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
        /* BLUE */
        /* 6 */  'linear-gradient(90deg, rgba(0,34,111,1) 0%, rgba(15,99,186,1) 100%)',
        /* 7 */   'linear-gradient(90deg, rgba(0,17,54,1) 0%, rgba(8,71,136,1) 100%)',
        /* 8 */   '#084788',
        /* 9 */   'aliceblue',
        /* 10 */  'rgb(26, 23, 28)',
        /* FIM BLUE */
        /*  RED */
        /* 11 */  'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,65,0,1) 100%)',
        /* 12 */  'linear-gradient(90deg, rgba(108,11,11,1) 0%, rgba(161,68,0,1) 100%)',
        /* 13 */  '#a70000',
        /* FIM RED */
      ]
    }
  },

}
</script>


<style>
.bloco {
  display: flex;
  align-items: center;
  justify-content: center;
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
  background: #F11A7B;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.corAzul {
  background: #084788;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

.corVermelho {
  background: #ff0404;
  border: 2px solid aliceblue;
  border-radius: 50%;
  height: 2rem;
  width: 2rem;
}

#btn {
  color: aliceblue;
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

}
</style>
