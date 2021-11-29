<template>
  <div class="weather-box">
      <div class="weather-con">
          <h1 class="country__name">{{weather.name}}</h1>

          <p class="temp">havo harorati: {{weather.main.temp}}°</p>

          <p>{{ dateBuilder }}</p>
          <p>{{GetDays}}-{{GetMonth}}</p>
          <p>{{GetYear}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      apikey: "a9c81a4224e486fa11716f1b7dc754c1",
      weather: {},
    };
  },

  methods: {
    WeatherFetched() {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=Tashkent,uz&units=metric&APPID=${this.apikey}`)
        .then((res) => {
            return res.json();
        })
        .then(this.setResults);
    },
    setResults(data) {
        this.weather = data;
        console.log(this.weather);
    }
  },

  computed: {
    GetYear() {
      let d = new Date();
      let year = d.getFullYear();

      return `${year}`;
    },

    GetDays(){
      let d = new Date();

      let date = d.getDate();
        return `${date}`
    },

    GetMonth(){

      let d = new Date();
      let months = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyabr",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
      ];
      
      let month = months[d.getMonth()];

      return `${month}`
    },

    GetWeekDays() {
      let d = new Date();

        let days = [
        "Yakshanba",
        "Dushanba",
        "Seshanba",
        "Chorshanba",
        "Payshanba",
        "Juda",
        "Shanba",
      ];
      let day = days[d.getDay()];
        return `${day}`
    }
  },

  created: function() {
    this.WeatherFetched();
  },
};
</script>

<style></style>
