<template>
  <div class="login">
      <div class="login-box">
          <h1 class="login__title">Login Page</h1>

          <div class="login-page">
              
          </div>
          <form action="">
              <img src="../assets/Frame.png" alt="" class="login__img">
            <h4 class="main__text">Email</h4>
            <input type="email" class="input email" placeholder="Your email">

            <h4 class="main__text">Password</h4>
            <input type="password" class="input password" name="" id="" placeholder="Your password">
            <img src="../assets/view.png" class="i-view" alt="" @click="show">

            <button class="enter">Kirish</button>

            <p class="toRegister">Do not have an account? <router-link to="register" class="link">register</router-link></p>
          </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');
.login {
    height: 100vh;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    display: flex;
    align-items: center;
    font-family: 'Dongle', sans-serif;
    color: #fff;
}

.login-box {
    width: 100%;
    text-align: center;
    max-width: 260px;
    margin: 0 auto;
}

.login__title {
    font-weight: 300;
}

.main__text {
    margin-top: 24px;
    text-align: left;
    font-size: 14px;
}
.input {
    padding: 10px;
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid #333;
    margin-top: 15px;
    outline: none;
    color: #fff;
}

.input::placeholder {
    color: #fff;
}


         .enter {background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%)}
         .enter {
            padding: 15px 45px;
            text-align: center;
            text-transform: uppercase;
            transition: 0.5s;
            background-size: 200% auto;
            color: white;            
            border-radius: 10px;
            display: block;
            border: none;
            margin: 0 auto;
            margin-top: 26px;
          }

          .enter-grad:hover {
            background-position: right center;
            color: #fff;
            text-decoration: none;
          }


.login__img {
    width: 230px;
}

.i-view {
    width: 24px;
    transform: translate(115px, -32px);
    opacity: 50%;
}

.toRegister {
    font-size: 14px;
    background: #fff;
    color: #000;
    padding: 8px;
    border-radius: 10px;
    margin-top: 12px;
}
         
.link {
    color: rgb(151, 151, 151);
    text-decoration: underline;
}
</style>