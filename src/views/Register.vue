<template>
<div class="register">
        <div class="register-box">

        <p class="register__text">Har kuningiz rejalar bilan boshlang</p>

        <router-link to="login"><button class="register__btn">Kunni boshlash</button></router-link>
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
    text-align: center;
    padding: 20px;
    width: 100%;
}


.register__text {
    text-align: center;
    font-size: 26px;
    font-weight: 600;
}

.register__btn {
    padding: 15px;
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 600;
    border-radius: 20px;
    margin-top: 25px;
}

</style>