<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500;600&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
#app {
  max-width: 620px;
  background: #f2f5ff;
}
.footer__btn:focus svg path {
  stroke: #9c2cf3;
  fill: #9c2cf3;
}

.footer__icon svg {
  width: 30px;
}
</style>
