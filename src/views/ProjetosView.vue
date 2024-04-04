<template>

<div class="projetos-container">
  <img src="..\assets\projetoportfolio.png" alt="portfolio-projeto" class="projetos-img"><p class="projetos-text">Meu portfólio foi meu primeiro desafio, no qual busquei encontrar um equilíbrio usando um design minimalista e responsivo.</p>

 <div class="projetos">Em breve</div>

 <div class="projetos">Em breve</div>

</div>
<h4 class="create">@Create by Brenno Santos</h4>
</template>

<script>
export default {
  name: 'ProjetosView',
  components: {
    
  },
  data() {
    return {
  
    }
  }
}


</script>

<style>
.projetos {
  display: flex;
  justify-content: center;
  background-color: rgb(51, 10, 68);
  box-shadow:0px 0px 10px rgb(0, 0, 0) ;
  height: 250px;
  width: 350px;
  text-align: center;
  align-items: center;
 font-size: 3rem;
 border-radius: 10px;
 margin: 7rem;
}
.projetos-img {
  display: flex;
  justify-content: center;
  box-shadow:0px 0px 10px rgb(0, 0, 0) ;

  height: 250px;
  width: 350px;
 border-radius: 10px;
}
.skill-section {
  min-height: 100vh;
}
.projetos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7rem;
  gap: 10px;
}
.projetos-text {
  display: flex;
  width: 20rem;
  margin: 0.1rem;
  
}
@media screen and (max-width: 700px){
  .projetos-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
  }
  .projetos-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 260px;
    height:200px ;
  }
  .projetos {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 260px;
    height:200px ;
    font-size: 2rem;
  }
  .projetos-text {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 20rem;
    font-size: 0.8rem;
  }
}
</style>
