<style>
    @keyframes animacao-left {
        0% {opacity: 0;
          transform: translateX(-150px);}
          50% {opacity: 0; }
          100% {opacity: 1;}
          }
      @keyframes animacao-right {
        0% {opacity: 0;
          transform: translateX(150px);}
          50% {opacity: 0; }
          100% {opacity: 1;}
          }
      @keyframes animacao-top {
        0% {opacity: 0;
          transform: translateY(150px);}
          50% {opacity: 0; }
          100% {opacity: 1;}
          }

      @keyframes animacao-bottom {
        0% {opacity: 0;
          transform: translateY(-150px);}
          50% {opacity: 0; }
          100% {opacity: 1;}
          }
          @keyframes longo-direita {
    0% {opacity: 0;
        transform: translateX(-400px);}
        50% {opacity: 0.5; }
        100% {opacity: 1;}
}
@keyframes longo-esquerda {
    0% {opacity: 1;
        transform: translateX(0px);}
        50% {opacity: 0.5; }
        100% {opacity: 0;
 transform:  translateX(-350px);}
}
 </style>

 <script>
 export default {
   name: 'AnimateText',
 }
 </script>
 
<template>

    <div></div>
    
</template>
    
  
 