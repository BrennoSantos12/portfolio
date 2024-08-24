<template>

    <div class="projeto" id="projeto1" v-motion-slide-visible-left :delay="200">
        <div class="projeto-esquerda">
        <h1 class="titulo1">Portfólio</h1>
        <p class="texto-esconder">Meu portfólio foi meu primeiro desafio, no qual <br>busquei encontrar um equilíbrio usando um design <br> minimalista e responsivo.</p>
    </div>
    <div class="centro-esconder">
        <p>clique na imagem para ir até o site</p>
        <a href=""><img src="@/assets/portfolioimg.png" style="border-radius: 10px;" alt="Portfólio" class="img" id="img"></a>
    </div>
        <div class="saiba-direita">
         <h3 class="saiba">clique para saber mais</h3>
         <div class="saiba-esconder">
            <h1>Linguagens utilizadas</h1>
          <img src="@/assets/vue_icon.png" alt="Vue.js" class="linguagem">
        </div>
        </div>
    </div>


    <div class="projeto" id="projeto2" v-motion-slide-visible-left :delay="300">
        <div class="projeto-esquerda">
        <h1 class="titulo1">Oliveira e <br> Mascarenhas</h1>
        <p class="texto-esconder">Advogados associados</p>
    </div>
    <div class="centro-esconder">
        <a ><img src="@/assets/embreve.jpg" style="border-radius: 10px;" alt="em breve" class="img" id="img" ></a>
    </div>
        <div class="saiba-direita">
         <h3 class="saiba">clique para saber mais</h3>
         <div class="saiba-esconder">
            <h1> </h1>
          <img >
        </div>
        </div>
    </div>


    <div class="projeto" id="projeto3" v-motion-slide-visible-left :delay="400">
        <div class="projeto-esquerda">
        <h1 class="titulo1">EM BREVE</h1>
        <p class="texto-esconder">EM BREVE</p>
    </div>
    <div class="centro-esconder">
        <img >
    </div>
        <div class="saiba-direita">
         <h3 class="saiba">clique para saber mais</h3>
         <div class="saiba-esconder">
            <h1> </h1>
          <a ><img ></a>
        </div>
        </div>
    </div>




</template>

<style>

#Projetos {
  z-index: 1;
  position: relative;
  background-color: rgb(29, 29, 29);
  
  min-height: 100%;
}
.projeto {
    color: var(--letra-cor);
    background-color: var(--projeto-color);
    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px solid black;
    cursor: pointer;
    transition: height 0.4s ease, background-color 0.3s ease-in-out;
  }
  .projeto:hover {
    background-color: rgb(92, 26, 142);
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 4px rgba(0, 0, 0);
  }

  .expandir {
    height: 24rem;
    background: rgb(47,0,47);
    background: linear-gradient(90deg, rgba(47,0,47,1) 0%, rgba(129,32,130,1) 30%, rgba(72,8,82,1) 100%);
  }

  .titulo1 {
    font-size: 3rem;
    transition: opacity 0.2s ease-in-out;
  }
  
  
  @media screen and (max-width: 800px) {
    .titulo1 {
      font-size: 1.3rem;
    }
  .saiba {
    font-size: 1rem;
  }
  .projeto {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .projeto p {
    font-size: 0.8rem;
  }

.img {
    width:  150px;
    height: 100px;
    border: 2px solid rgb(26, 23, 28);
  }
  
  .saiba-direita h1{
    font-size: 0.8rem;
  }
  .linguagem {
    width: 30px;
    height: 30px;
    margin: 5px
  }
  
  }

  @media screen and (min-width: 800px) {
    .img {
        width:  350px;
        height: 200px;
        border: 4px solid rgb(26, 23, 28);
      }
  }
  .linguagem {
    margin: 2px
  }
  
  
  .saiba-direita {
    display: flex;
    text-align: center;
  }
  
  
  
  
  
  .texto-esconder {
   opacity: 0;
   display: none;
   font-size: 0.9rem;
   transition: opacity 0.2s ease;
   
  }
  .centro-esconder {
    display: none;
    text-align: center;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
   
  }
  .saiba-esconder {
    opacity: 0;
    display: none;
    font-size: 0.8rem;
    transition: opacity 0.2s ease-in-out;
  
  }

</style>

<script>
export default {
  name: 'ProjetoSection',
  mounted() {
    const card = document.querySelectorAll('.projeto');

card.forEach(projeto => {

 
  const titulo1 = projeto.querySelector('.titulo1');
  const esquerda = projeto.querySelector('.texto-esconder');
  const centro = projeto.querySelector('.centro-esconder');
  const direita = projeto.querySelector('.saiba-esconder');
  const saiba = projeto.querySelector('.saiba');

 projeto.addEventListener('click', () => {

    projeto.classList.toggle('expandir');
    projeto.style.color = "aliceblue";

   
   
  
  if (projeto.classList.contains('expandir')) {
    
    setTimeout(function() {
      esquerda.style.opacity = '1';
      centro.style.opacity = '1';
      direita.style.opacity = '1';
      saiba.style.opacity = '0';
    }, 300);
  
    esquerda.style.display = 'block';
    saiba.style.display = 'none';
    centro.style.display = 'block';
    direita.style.display = 'block';


  } else {

    projeto.style.color = "";

    setTimeout(function() {
      centro.style.display = 'none';
      esquerda.style.display = 'none';
      direita.style.display = 'none';
      saiba.style.display = 'block';
      
   }, 250);

   
   setTimeout(function() {
    titulo1.style.opacity = '1';
    saiba.style.opacity = '1';
  }, 350);

    titulo1.style.opacity = '0';
    esquerda.style.opacity = '0';
    centro.style.opacity = '0';
    direita.style.opacity = '0';
    

  }
 })
});


  }
  }

</script>

