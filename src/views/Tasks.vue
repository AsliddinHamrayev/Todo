<template>
  <div class="tasks-box">
      <div class="calendar-box">
        <div class="calendar-main">
          <button class="calendar__btn"><img src="../assets/coolicon.png" alt=""></button>
          <button class="calendar__btn avtive"><i class="footer__icon"><svg width="34" height="55" viewBox="0 0 55 55" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="29.4716" y="34.2344" width="5.67857" height="16.0893" rx="2.83929"
                                    transform="rotate(-45 29.4716 34.2344)" fill="#D8DEF3" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M35.1601 35.239C41.6282 28.771 41.6282 18.2842 35.1601 11.8161C28.6921 5.34804 18.2053 5.34804 11.7372 11.8161C5.26915 18.2842 5.26915 28.771 11.7372 35.239C18.2053 41.7071 28.6921 41.7071 35.1601 35.239ZM31.8139 31.8931C36.434 27.273 36.434 19.7825 31.8139 15.1624C27.1939 10.5424 19.7033 10.5424 15.0833 15.1624C10.4632 19.7825 10.4632 27.273 15.0833 31.8931C19.7033 36.5131 27.1939 36.5131 31.8139 31.8931Z"
                                    fill="#D8DEF3" />
                            </svg>
                        </i></button>
        </div>
        <div class="calendar-main">
          <h1 class="calendar__title">Nov, 2021</h1>
          <router-link to="/create-task">
            <button class="btn__add__task">+ Add task</button>
          </router-link>
        </div>

        <div class="week-box">
          <div class="week-days">
            <h1 class="week__title">Mo</h1>
            <h1 class="week__title">3</h1>
          </div>
          <div class="week-days active">
            <h1 class="week__title">Tu</h1>
            <h1 class="week__title">4</h1>
          </div>
          <div class="week-days">
            <h1 class="week__title">We</h1>
            <h1 class="week__title">5</h1>
          </div>
          <div class="week-days">
            <h1 class="week__title">Th</h1>
            <h1 class="week__title">6</h1>
          </div>
          <div class="week-days">
            <h1 class="week__title">Fr</h1>
            <h1 class="week__title">7</h1>
          </div>
          <div class="week-days">
            <h1 class="week__title">Sa</h1>
            <h1 class="week__title">8</h1>
          </div>
          <div class="week-days">
            <h1 class="week__title">Su</h1>
            <h1 class="week__title">9</h1>
          </div>
        </div>
      </div>
    <div class="container">
    <h1 class="progress__title">Tasks</h1>
    <Progress/>
    <Footer />
    </div>

  </div>
</template>

<script>
import Footer from "../components/Footer.vue"
import Progress from "../components/Progress.vue"
export default {
name: "Tasks",
  components: {
    Footer,
    Progress,
  },

  methods:{
   
  }
}
</script>

<style>

.calendar-box {
  background-color: #fff;
  padding: 45px;
  border-radius: 0 0 15px 15px;
  box-shadow: 5px 8px 24px 2px rgba(0,0,0,0.24);
}


.calendar__btn {
  background-color: transparent;
  border: none;
}

.calendar-main {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.calendar__btn path, .calendar__btn rect {
  fill: #333;
}

.calendar__title {
  color: #2E3A59;
  font-weight: 600;
  font-size: 40.1747px;
}

.btn__add__task {
  background: linear-gradient(177.23deg, #9C2CF3 -13.49%, #3A49F9 109.75%);
  box-shadow: 17px 26px 25px rgba(226, 226, 226, 0.25);
  border-radius: 75px;
  color: #fff;
  border: none;
  padding:15px 20px;
  cursor: pointer;
}

.week-box {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
.week-days {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 123px;


}

.active {
  background-color: #e6e6e6;
  border-radius: 35px;
  color: #9C2CF3;
}

.week__title {
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 425px) {
  .container {
    max-width: 390px;
  }
}

@media (max-width: 375px) {
  .container {
    max-width: 345px;
  }

  .calendar__title {
    font-size: 26px;
  }

  .calendar-box {
    padding: 24px;
  }
}

@media (max-width: 320px) {
  .container {
    max-width: 300px;
  }

}
</style>