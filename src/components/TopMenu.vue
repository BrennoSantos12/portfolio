<template>
 
   <div id="myNav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="#Home">Home</a>
      <a href="#Sobre">Sobre</a>
      <a href="#Projetos">Projetos</a>
      <a href="#Contatos">Contatos</a>
    </div>
  </div>
 
  <span style="font-size:40px; cursor:pointer" id="btn" @click="openNav()">&#9776;</span>
  <div class="link">
    <a href="https://github.com/BrennoSantos12"><img src="@\assets\github.png" alt="GitHub" style="height: 4.5rem; width: 4.5rem;"></a> 
   <a href="https://www.linkedin.com/in/brenno-santos-692752290/"><img src="@\assets\LinkedIn.png" alt="LinkedIn" style="height: 4rem; width: 4rem;"></a>
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
  animation: btn 2s ease-in-out;
}
@keyframes btn {
  0% {opacity: 0;
    transform: translateX(300px);}
    70% {opacity: 0;
      }
    100% {opacity: 1;}
    }
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  opacity: 0.5;
  background-color: black;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
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

@media screen and (max-width: 450px) {
  .overlay a {font-size: 20px}
  .overlay .closebtn {
  font-size: 40px;
  top: 15px;
  right: 35px;
  }
}
.link {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 2rem;
  margin-top: -9rem;
  gap: 40px;
  transform: translateX(0px);
  animation: link 2s ease-in-out;

}
@keyframes link {
  0% {opacity: 0;
     gap: 1px;
    transform: translateX(-400px);}
    50% {opacity: 0;
      }
    100% {opacity: 1;}
    }
</style>