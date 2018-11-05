<template>
 <div class="redact">
    <button @click="goToRedact()">Redact</button>
     <div class="container">
     <h1>REDACT</h1>
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
    goToRedact: function() {
      axios
      .get("http://localhost:3000/api/articles/" + this.$route.params.id + "?version=redact")
      .then(response => {
        this.article = response.data;
        this.message = "Redact!";
      });
    }
  },
  computed: {}
};
</script>

<!-- encodeURIComponent('?x=шеллы') -->