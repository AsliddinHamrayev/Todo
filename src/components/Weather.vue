<template>
  <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ducimus fuga.</h1>
</template>

<script>
export default {
 data: function () {
    return {
      apikey: "d1f18a24ed09807c185ccf764ff6c255",
      results: [],
    };
  },

    methods: {
        WeatherFetched() {
      fetch(
        `
        api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${this.apikey}`
      )
        .then((res) => res.json())
        .then((data) => {
            this.results = data;
        });
        console.log(this.results);
    }
    },

    mounted() {
        this.WeatherFetched
    },
}
</script>

<style>

</style>