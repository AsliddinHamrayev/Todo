/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <Left />
    <Right />
  </div>
</template>
<script>
import Left from "./components/Left.vue";
import Right from "./components/Right.vue"
export default {
  name: "app",
  components: {
    Left,
    Right,
  },
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  
}

#app {
  display: flex;
  max-width: 1400px;
}
</style>
