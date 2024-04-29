<template>
    <div class="titulo-container">
        <h1 class="titulo" >Brenno Santos</h1>
        <div class="menu"></div>
      </div>
      <div class="sub-titulo-container">
        <h2 class="sub-titulo" >Front-End Developer</h2>
        <div class="link-container">
          <div class="link1"> <a href="https://github.com/BrennoSantos12"><img src="@\assets\github.png" alt="GitHub" style="height: 4.5rem; width: 4.5rem;"></a></div>
          <div class="link2"><a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img src="@\assets\LinkedIn.png" alt="LinkedIn" style="height: 4rem; width: 4rem;"></a></div>
        </div>
      </div>
      


</template>

<style>

#Home {
    height: 100vh;
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
  
  @media screen and (max-width: 600px) {
    #Home {
        height: 100vh;
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
  }

</style>

<script>

export default {
   name: 'HomeVue',
 }
</script>