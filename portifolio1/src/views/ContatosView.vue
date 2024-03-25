<template>
   <HelloWorld/>
    
    <div class="titulo">
     <h1>ME MANDE UM EMAIL</h1>
    </div>
  
   </template>
   
   <script>
 import HelloWorld from '@/components/HelloWorld.vue';
 
 export default {
   name: 'ContatosView',
   components: {
     HelloWorld
   },
   data() {
     return {
   
     }
   },
 }
 
 </script>
 
 <style>
 
 .titulo {
   margin: 5rem;
   color: blueviolet;
  text-shadow: 0px 0px 4px blueviolet;
  display: flex;
   justify-content: center;
 }

 </style>