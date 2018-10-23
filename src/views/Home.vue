<template>
  <div class="articles-index">
    <div class="row">
      <div class="col-md-4" v-for="article in articles">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">{{ article.headline }}</h5>
            <div class="card-text">
            </div>
            <router-link class="btn btn-primary" v-bind:to="'/articles/'+ article.id +'/show' ">Read More</router-link>
          </div>
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
      articles: []
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/articles")
    .then(function(response) {
      this.articles = response.data;
    }.bind(this));
  },
  methods: {},
  computed: {}
};
</script>


