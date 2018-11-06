
<template>
  <div id="app">
    <div class="home">
      <div class="container-fluid">
        <ul class="alt" v-for="article in articles">
          <li><button class="btn btn-secondary" @click="findShowByTitle(article.title)">{{ article.title }}</button></li> 
        </ul>
</div>
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
        articles: [
          {
            title: "",
            body: "",
            id: ""
          }
        ]
      };
    },
    created: function() {
      axios.get("http://localhost:3000/api/articles").then(response => {
        this.articles = response.data;
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
    findShowByTitle: function(article_title) {
      axios
      .get("http://localhost:3000/api/articles/by_title?title=" + article_title)
      .then(response => {
        this.$router.push({name: 'articles-show', params: {id: response.data["id"]}});
      });
    }
  },
  computed: {}
};
</script>
