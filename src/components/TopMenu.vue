<template>
 <div class="top-container">
   <div id="myNav" class="overlay" >
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="#Home">Home</a>
      <a href="#Sobre">Sobre</a>
      <a href="#Projetos">Projetos</a>
      <a href="#Contatos">Contatos</a>
    </div>
  </div>
 
  <span style="font-size:40px; cursor:pointer" id="btn" @click="openNav()">&#9776;</span>
  <div class="link" >
    
   
    </div>
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
}
  }
}
</script>


<style>

#btn {
  color: aliceblue;
  position: fixed;
  margin: 3rem;
  z-index: 1;
  top: 0;
  right: 0;
  animation: animacao-right 1.5s ease-in-out;
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: black;
  opacity: 0.5;
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

.overlay a:hover, .overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-width: 600px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
  #btn {
    animation: animacao-bottom 1.5s ease-in-out;
  }

}


</style>