
<template>
  <div id="app">
    <div class="home">
      <div class="container-fluid">
        <button class="btn btn-secondary" v-for="article in articles" v-on:click="findShowByApiUrl(article.apiUrl)">{{ article.webTitle }}</button>
       </div>
    </div>
  </div>
</template>


<style>
</style>


<script>

  var axios = require('axios');

  export default {
    data: function() {
      return {
        message: "Fake News",
        articles: []
      };
    },
    created: function() {
      axios.get("https://content.guardianapis.com/search?order-by=newest&q=Trump&show-fields=body&api-key=963a71b0-c998-426c-b488-21146e4d02df")
        .then(response => {
          this.articles = response.data.response.results;
        });
    },
    methods:{
      normalize: function() {
        axios
          .get("http://localhost:3000/api/articles/" + this.$route.params.id)
          .then(response => {
            this.articles = response.data;
          });
      },  
      goToSwap: function() {
        axios
          .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=swap")
          .then(response => {
            this.articles = response.data;
            this.message = "Swap!";
          });
      },
      goToRedact: function() {
        axios
          .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=redact")
          .then(response => {
            this.articles = response.data;
            this.message = "Redact!";
          });
      },
      goToAdd: function() {
        axios
          .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=add")
          .then(response => {
            this.articles = response.data;
            this.message = "Add!";
          });
      },
      findShowByApiUrl: function(articleApiUrl) {
        var params = {api_ref: articleApiUrl};
        axios
          .post("http://localhost:3000/api/articles/by_api_ref", params)
          .then(response => {
            this.$router.push({name: 'articles-show', params: {id: response.data["id"]}});
          });
      }
    },
    computed: {}
  };
  </script>
