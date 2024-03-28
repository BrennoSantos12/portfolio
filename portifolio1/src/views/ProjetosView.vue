<template>
<div class="projetos-container">
  <div class="projetos"><p class="projetos-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum et natus beatae, excepturi maiores vel labore fugiat corrupti architecto reiciendis nam culpa. Suscipit tenetur, dignissimos odio amet magnam repellat ducimus!</p></div>
  
  <div class="projetos"><p class="projetos-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur aliquam qui vel amet dolore dolorem porro hic sed, dolor nam quas debitis minima unde non commodi ratione exercitationem eius magni!</p></div>
  
  <div class="projetos"><p class="projetos-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo nihil recusandae placeat delectus, excepturi facilis porro voluptatem officiis, eum quibusdam debitis, perspiciatis beatae ipsa ratione sunt quis harum at!</p> </div>
 
 
</div>


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
.skill-section {
  min-height: 100vh;
}
.projetos-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15rem;
  margin: 7rem;
}
.projetos-text {
  margin-top: 100%;
  margin-left: 10%;
}
.projetos{
  display: flex;
  background-color: rgb(202, 35, 35);
  height: 250px;
  width: 250px;
}
@media screen and (max-width: 700px){
  .projetos-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem;
    gap: 15rem;
  }
}
</style>
