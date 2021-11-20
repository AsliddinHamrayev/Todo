<template>
  <main>
    <div class="left-content">
      <div class="content">
        <p class="logo">Hamrayev.uz</p>

        <h2 class="main__title">
          Be Creative, <br />
          Be Impressive
        </h2>
        <h4 class="title">Creative Designer and Social Media Officer</h4>

        <p class="main__text">
          I have to be able to communicate ideas to a wide range of stakeholders
          in both my own voice and in Sprout's. Communicating on social.
        </p>

        <div class="flex">
          <button class="btn__portfolio">Portfolio</button>
          <a href="#" class="link__vitae">Curriculum Vitae</a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap");
.left-content {
  background: linear-gradient(146.88deg, #1e1f1d 1.46%, #1a1c18 99.06%);
  width: 700px;
  font-family: "Poppins", sans-serif;
  color: #fff;
  height: 100vh;
  padding: 25px;
}

.content {
  max-width: 435px;
  margin: 0 auto;
}

.logo {
  font-size: 18px;
  padding: 5px;
  border: 2px solid #fff;
  font-weight: 300;
  display: inline;
}

.main__title {
  font-weight: 600;
  margin-top: 80px;
  text-align: left;
  font-size: 50px;
  line-height: 55px;
}

.title {
  font-weight: 300;
  margin: 15px 0;
}

.main__text {
  font-weight: normal;
  font-size: 16px;
  font-weight: 300;
  font-size: 16px;
  color: #cfcfcf;
}

.flex {
  display: flex;
  align-items: center;
  margin-top: 35px;
  justify-content: space-around;
}

.btn__portfolio {
  background-color: #fff;
  border: none;
  padding: 15px 28px;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
}

.link__vitae {
  color: #fff;
  text-decoration: underline;
  font-weight: 200;
}
</style>
