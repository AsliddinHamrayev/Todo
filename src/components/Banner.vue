<template>
  <main>
      <div class="container">
          <div class="main-content">
              <h3 class="main__title">Savol yoki murojaatingizni Telegram bot orqali bizga yuboring</h3>
              <img src="../assets/bg-img-1.png" class="bg-image" alt="">
              <img src="../assets/bg-image-2.png" class="bg-image position" alt="">

              <button class="btn__main"><img src="../assets/telegram.png" alt="">metsenat_support_bot</button>
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@200;300;400;500&display=swap');
.main-content {
    background-color: #24303F;
    padding: 20px;
    color: #fff;
    width: 345px;
    font-family: 'Fira Sans', sans-serif;
    border-radius: 5px;
}

.main__title {
    font-weight: bold;
font-size: 14px;
line-height: 140%;
width: 290px;
}

.btn__main {
    display: flex;
    align-items: center;
    background-color: #3A4E66;
    padding: 10px;
    border: none;
    color: #fff;
    border-radius: 4px;
    gap: 10px;
    margin-top: 24px;
    cursor: pointer;
}

.bg-image{
        position: absolute;
    transform: translate(265px, -90%);
}

.position {
    transform: translate(224px, 50%);
}
</style>