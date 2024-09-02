<template>
  <div class="sobre-container">
    <h1 class="sobre-mim">SOBRE MIM</h1>
    <h1 class="sobre-titulo">
      Estudo Análise e Desenvolvimento de Sistemas na FATEC- SENAI e estou
      trilhando meu caminho para me tornar um programador com skills em <span class="span">Front-End</span> e <span
        class="span">Back-end</span>.
      Busco aventuras e desafios
      no mundo do <span class="span">Front-End</span> para mostrar minhas habilidades de design e código e explorar todo
      meu
      potencial. <br> Possuo habilidades em: <span class="span">HTML5, CSS3, javascript e
        Vue.js.</span>
      Confira meu portfólio e vamos trabalhar juntos!</h1>

    <a class="button" href="../files/CV- Brenno Santos.pdf">Baixe o meu Currículo</a>
  </div>

</template>

<style>
#Sobre {
  z-index: 1;
  position: relative;
  color: var(--secundary-letter-color);
  background-color: var(--secundary-color);
  height: 60vw;
  display: flex;
  align-items: center;
}

.sobre-mim {
  font-size: 2rem;
}

#Sobre .sobre-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

#Sobre .sobre-titulo {
  font-size: 1.2rem;
  width: 40%;
  overflow-wrap: break-word;
  color: var(--secundary-letter-color);
}

.span {
  color: yellow;
}

.button {
  text-decoration: none;
  padding: 1.3em 6em;
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
  color: var(--button-sobre-color);
  z-index: 1;
}

.button::after {

  content: '';
  display: block;
  width: 100px;
  height: 100px;
  transform: translate(-50%, -50%);
  position: absolute;
  border-radius: 50%;
  z-index: -1;
  background-color: var(--button-sobre-color);
  transition: 1.1s ease;
}

.button::after {
  left: calc(50% + 1em);
  top: calc(200% + 1em);
}

.button:hover::before,
.button:hover::after {
  height: 510px;
  width: 610px;
}

.button:hover {
  color: var(--secundary-color);
  filter: brightness(0.9);
}

@media screen and (max-width: 900px) {

  #Sobre {
    height: 95vh;
  }

  #Sobre .sobre-titulo {
    font-size: 0.8rem;
    width: 80%;
    overflow-wrap: break-word;
  }

  .button {

    padding: 1em 2em;
  }
}
</style>

<script>
export default {
  name: 'SobreVue',
  mounted() {


  }
}





</script>