<template>
  <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio ducimus fuga.</h1>
</template>

<script>
export default {
 data: function () {
    return {
      apikey: "3f6523220ef2d2a56a4b523bf022b783",
      results: [],
      query: "",
    };
  },

    methods: {
        WeatherFetched() {
      fetch(
        `
https://api.themoviedb.org/3/movie/latest?api_key=${this.apikey}&language=en-US`
      )
        .then((res) => res.json())
        .then((data) => {
            this.results = data.results;
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