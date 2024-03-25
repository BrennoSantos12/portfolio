<template>
  <HelloWorld/>

  <!-- HOME -->
  <div class="Home">
  <h1>Olá, eu me chamo <span>Brenno</span></h1>
</div>
<!-- fim HOME -->

</template>

<script >

import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data() {
    return {
  
    }
  }
}
</script>
<style>

.Home {
  margin: 5rem;
  display: flex;
  justify-content: center;
}

span {
  color: blueviolet;
 text-shadow: 0px 0px 4px blueviolet;
}


</style>
