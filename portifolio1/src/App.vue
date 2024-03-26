<template>
  <div class="fixed">
  <nav class="menu-box">
    <router-link to="/" class="menu-link">Home</router-link>     
    <router-link  to="/projetos" class="menu-link">Projetos</router-link>      
    <router-link  to="/curriculo" class="menu-link">Curriculo</router-link>
  </nav>
  </div>
  <router-view/>
</template>

<style>
.fixed {
 position: fixed;
 top: 0;
 width: 100%;
}
.menu-box {
  display: flex;
  height: 4rem;
  width: 100%;
  background-color: #0D0E26;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
}
.menu-link {
  text-decoration: none;
  color: #F2B279;
  font-weight: 800;
}
.menu-link:hover {
  color: hsl(28, 91%, 58%);
  font-size: 1.1rem;
  transition: font-size 0.3s;
}
</style>
