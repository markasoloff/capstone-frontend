<template>
 <div class="show">
    <button @click="goToSwap()">Swap</button>
    <button @click="goToAdd()">Add</button>
    <button @click="goToRedact()">Redact</button>
<!--     <button @click="normalize()">Back to normal</button> -->

     <div class="container">
     <h1>{{ message }}</h1>
     <div>
       <h1> {{ article.headline }}</h1>
        <div v-html="article.body"></div>
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
        title: "",
        body: ""
      }
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/articles/" + this.$route.params.id).then(response => {
      this.article = response.data;
    });
    // axios
    // .get("http://localhost:3000/api/articles/" + this.$route.params.id)
    // .then(response => {
    //   this.article = response.data;
    // });
  },  

  // normalize: function() {
  //   axios
  //   .get("http://localhost:3000/api/articles/" + this.$route.params.id)
  //   .then(response => {
  //     this.article = response.data;
  //   });
  // },  

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

<!-- encodeURIComponent('?x=шеллы') -->