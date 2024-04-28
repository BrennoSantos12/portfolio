<template>

    <div class="projeto" id="projeto1" v-motion-slide-visible-left :delay="100">
        <div class="projeto-esquerda">
        <h1 class="titulo1">Portfólio</h1>
        <p class="texto-esconder">Lorem ipsum, dolor sit amet consectetur adipisicing <br> 
            elit. Soluta eveniet quas accusamus ex laudantium <br>
            aliquam brcorporis atque</p>
    </div>
    <div class="centro-esconder">
        <p>clique na imagem para ir até o site</p>
        <a href=""><img src="@\assets\portfolioimg.png" style="border-radius: 10px;" alt="Portfólio" class="img" id="img"></a>
    </div>
        <div class="saiba-direita">
         <h3 class="saiba">clique para saber mais</h3>
         <div class="saiba-esconder">
            <h1>Linguagens utilizadas</h1>
          <img src="@\assets\vue_icon.png" alt="Vue.js" class="linguagem">
        </div>
        </div>
    </div>


    <div class="projeto" id="projeto2" v-motion-slide-visible-left :delay="400">
        <div class="projeto-esquerda">
        <h1 class="titulo1">EM BREVE</h1>
        <p class="texto-esconder">EM BREVE</p>
    </div>
    <div class="centro-esconder">
        <a ><img ></a>
    </div>
        <div class="saiba-direita">
         <h3 class="saiba">clique para saber mais</h3>
         <div class="saiba-esconder">
            <h1> </h1>
          <img >
        </div>
        </div>
    </div>


    <div class="projeto" id="projeto3" v-motion-slide-visible-left :delay="700">
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


.projeto {
    color: rgba(240, 248, 255, 0.849);
    background-color: rgb(67, 19, 103);
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
  .titulo1 {
    font-size: 4rem;
    transition: opacity 0.2s ease-in-out;
  }
  
  
  @media screen and (max-width: 800px) {
    .titulo1 {
      font-size: 1.5rem;
    }
  .saiba {
    font-size: 1rem;
  }
  .projeto {
    display: flex;
    flex-direction: column;
    text-align: center;

    
  }
  .projeto-esquerda {
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
    width: 20px;
    height: 20px;
  }
  
  }

  @media screen and (min-width: 800px) {
    .img {
        width:  350px;
        height: 200px;
        border: 4px solid rgb(26, 23, 28);
      }
  }
  
  
  
  .saiba-direita {
    display: flex;
    text-align: center;
  }
  
  
  .expandir {
    height: 24rem;
    background: linear-gradient(to right, rgb(67, 19, 103), rgb(122, 42, 183), grey);
  }
  
  
  .texto-esconder {
   opacity: 0;
   display: none;
   font-size: 0.9rem;
   transition: opacity 0.2s ease;
   animation: animacao-left 0.5s ease-in-out;
  }
  .centro-esconder {
    display: none;
    text-align: center;
    font-size: 0.8rem;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    animation: animacao-top 0.5s ease-in-out;
  }
  .saiba-esconder {
    opacity: 0;
    display: none;
    font-size: 0.8rem;
    transition: opacity 0.2s ease-in-out;
    animation: animacao-right 0.5s ease-in-out;
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

