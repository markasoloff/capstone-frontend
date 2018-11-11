<template>
  <div id="app">
    <link rel="stylesheet" href="animate.min.css">
    <div class="swap">
      <div class="container-fluid">
        <h1> Swap </h1>
        <ul class="alt" v-for="article in articles">
          <button v-on:click="indexSelector()">{{ article.title }} </button>
          <button>{{article.title}}</button>

            <!-- <blockquote>{{ article.body }}</blockquote> -->
        </ul>
</div>
</div>
</div>
</template>


      <!-- 
    <button @click="goToSwap()">Swap</button>      
    <button @click="goToAdd()">Add</button>
    <button @click="goToRedact()">Redact</button>
    <button @click="normalize()">Back to normal</button> -->
<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "do worry right now!",
      articles: []
      };
    },
  created: function() {
    axios
    .get("http://localhost:3000/api/articles/")
    .then(function(response) {
    this.articles = response.data;
    }.bind(this));
  },
  methods: {
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
    }
  },
  computed: {}
};
</script>

