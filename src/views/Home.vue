/* eslint-disable vue/no-unused-components */
<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="header-content">

          <button class="btn__header">
            <img src="../assets/Group.png" class="i__header" alt="" />
          </button>
          <router-link to="profile"
            ><button class="btn__header">
              <img
                src="../assets/profile.png"
                class="i__header"
                alt=""
              /></button
          ></router-link>
        </div>
        <router-link to="login">Login</router-link>|
        <router-link to="register">Register</router-link>

        <h1 class="main__title">Hello Asliddin</h1>
        <h4 class="main__text">Have a nice day.</h4>

          <Cards :notes="notes"/>
        <h1 class="progress__title">Progress</h1>

        <Progress :notes="notes" />
      </div>
    </header>
    <Footer />
  </div>
</template>
<script>
import Cards from "../components/Cards.vue";
import Progress from "../components/Progress.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "app",
  // data() {
  //   return {

  //     settigs: {
  //       "dots": true,
  //       "_dotsClass": "slick-dots custom-dot-class",
  //       get "dotsClass"() {
  //         return this["_dotsClass"];
  //       },
  //       set "dotsClass"(value) {
  //         this["_dotsClass"]=value;
  //       },
  //       "edgeFriction": 0.35,
  //       "infinite": false,
  //       "speed": 500,
  //       "slidesToShow": 1,
  //       "slidesToScroll": 1
  //     }
  //   }
  // },
  components: {
    Cards,
    Progress,
    Footer,
  },
  props: ["notes"],

  methods: {},
  mounted() {
    const initNotes = localStorage.getItem("note");
    const notes = JSON.parse(initNotes ? initNotes : "[]");
    console.log(notes);
    this.notes = notes;
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&family=Roboto:wght@100;300;400;500;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

header {
  padding-bottom: 50px;
}

.btn__header {
  background-color: transparent;
  border: none;
}

.container {
  max-width: 505px;
  margin: 0 auto;
  color: #2e3a59;
}

.header-content {
  display: flex;
  justify-content: space-between;
  padding-top: 5px;
}

.main__title {
  margin-top: 46px;
  font-weight: 600;
  font-size: 46px;
  color: #2e3a59;
}

.main__text {
  font-weight: normal;
  font-size: 24px;
  font-weight: normal;
}

.progress__title {
  font-weight: 600;
  font-size: 26px;
  color: #2e3a59;
  margin-top: 46px;
}

@media (max-width: 425px) {
  header {
    padding: 15px;
  }

  .btn__task {
    padding: 15px 20px;
  }

  .task-text__title {
    font-size: 18px;
  }
  .main__text {
    font-size: 16px;
  }

  .main__title {
    font-size: 30px;
  }
}

@media (max-width: 320px) {
  .btn__task {
    padding: 10px;
  }
}
</style>
