<template>
 <div class="add">
    <button @click="goToAdd()">Add</button>
     <div class="container">
     <h1>{{ message }}</h1>
     <div>
       <h1> {{ article.headline }}</h1>
       <h1> {{ article.body }}</h1>
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
      message: "do worry right now!",
      article: {
        headline: "",
        body: ""
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/articles/" + this.$route.params.id)
    .then(response => {
      this.article = response.data;
    });
  },  
  methods: {
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

<!-- encodeURIComponent('?x=шеллы') -->