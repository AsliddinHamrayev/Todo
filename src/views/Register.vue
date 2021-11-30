<template>
<div class="register">
        <div class="register-box">
            <h1 class="login__title">Register Page</h1>

          <div class="login-page">
              
          </div>
          <form action="">
              <img src="../assets/Frame.png" alt="" class="login__img">

                <div class="name-box">
                    <div class="name">
                        <h4 class="main__text">First name</h4>
                        <input type="text" class="input" placeholder="First name">
                    </div>

                    <div class="name">
                        <h4 class="main__text">Last name</h4>
                        <input type="text" class="input" placeholder="Last name">
                    </div>
                </div>
            <h4 class="main__text">Email</h4>
            <input type="email" class="input email" placeholder="Your email">

            <h4 class="main__text">Password</h4>
            <input type="password" class="input password" name="" id="" placeholder="Your password">
            <img src="../assets/view.png" class="i-view" alt="" @click="show">

            <button class="enter">Kirish</button>
          </form>

          <p class="toLogin">Already have an account? <router-link to="login" class="link">Login</router-link></p>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@300;400;700&display=swap');
.register {
    height: 100vh;
    background-color: #21D4FD;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    display: flex;
    align-items: center;
    font-family: 'Dongle', sans-serif;
    color: #fff;
}

.register-box {
    width: 100%;
    text-align: center;
    max-width: 360px;
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
    background: rgb(255 255 255 / 24%);
    border: none;
    border: 1px solid #868686;
    margin-top: 15px;
    outline: none;
    color: #fff;
    border-radius: 10px;
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
    transform: translate(155px, -32px);
    opacity: 50%;
}

.toLogin {
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

.name-box {
    display: flex;
    gap: 15px;
}

</style>