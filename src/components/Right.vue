<template>
  <div class="right">
    <div class="container">
      <div class="main-content">
        <div class="navbar">
          <ul>
            <li class="active">Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right {
  width: 700px;
  background-color: #000;
  color: #fff;
  padding: 25px;
}

.container {
  max-width: 500px;
  margin: 0 auto;
}
ul {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
ul li {
  list-style: none;
  color: #8a8a8a;
  cursor: pointer;
  transition: 0.5s ease-in-out;
}
.active {
  color: #fff;
}

li:hover {
  color: #fff;
}
</style>
