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
          @keyframes button {
            0% {transform: scale(1);}
            30% {transform: scale(0.7);}
            60% {transform: scale(1.3);}
            100% {transform: scale(1);}
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
    
  
 