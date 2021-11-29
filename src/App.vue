<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;600&display=swap');
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
}
#app {
  max-width: 620px;
  background: #F2F5FF;
}
.footer__btn:focus svg path{
  stroke: #9C2CF3;
  fill: #9C2CF3;
}

.footer__icon svg {
  width: 30px;
}
</style>