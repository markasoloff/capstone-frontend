<template>
 <div class="show">
     <div class="container">
     <h1>{{ message }}</h1>
    <button @click="goToSwap()">Swap</button>
    <button @click="goToAdd()">Add</button>
    <button @click="goToRedact()">Redact</button>

     <div>
       <h3 v-html="article.headline">{{ article.headline }}</h3>
       <article v-html="article.body">{{ article.body }}</article>
    </div>
  </div>
 </div>
</template>

<style>
span.redacted {
  background-color: orange;
  color: orange;
}
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "Welcome to the Show Page!",
      article: {
        title: "",
        body: ""
      }
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/articles/" + this.$route.params.id).then(response => {
      this.article = response.data;
    });
  },  

  methods: {
    goToSwap: function() {
      axios
    .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=swap")
    .then(response => {
      this.article = response.data;
      this.message = "Swap!";
    }); 
    },

     goToRedact: function() {
      axios
      .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=redact")
      .then(response => {
        this.article = response.data;
        this.message = "Redact!";
      });
      },

        goToAdd: function() {
      axios
      .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=add")
      .then(response => {
        this.article = response.data;
        this.message = "Add!";
      });
    }
  },
  computed: {}
};
</script>

