<template>
  <div class="profile-box">
      <div class="container">
          <div class="profile-content">
              <div class="profile-header">
                  <img src="../assets/01.jpg" class="profile__img" alt="">
                  <div class="profile-info">
                      <h1 class="profile__name">Asliddin Hamrayev</h1>

                      <h4 class="profile__main__title">Email</h4>
                      <h3 class="profile__main-description">hhamrayev60@gmail.com</h3>


                      <h4 class="profile__main__title">Date of Birth</h4>
                      <h3 class="profile__main-description">11.10.2004</h3>


                      <h4 class="profile__main__title">Address</h4>
                      <h3 class="profile__main-description">Termez, Uzbekistan</h3>
                  </div>
              </div>
              <button class="logOut">Log out page</button>
          </div>
          <Footer />
      </div>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
export default {
    components: {
        Footer,
    }
}
</script>

<style>
 .profile-box {
    height: 100vh;
    background: #F2F5FF;
    padding: 15px 20px;
}

.profile__img {
    max-width: 200px;
    height: 215px;
    width: 100%;
    border-radius: 10px;
}

.profile-header {
    display: flex;
    align-items: center;
    gap: 15px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
}

.profile__name {
    font-size: 28px;
}

.profile__main__title {
    font-weight: 500;
font-size: 12px;
color: #B8C5D0;
}

.profile__main-description {
    font-size: 11px;
}

.logOut {
    width: 100%;
    padding: 10px;
    text-align: center;
    background-color: rgba(255, 0, 0, 0.7);
    border: none;
    font-weight: 600;
    color: #fff;
    margin-top: 20px;
    border-radius: 10px;
}
</style>