<template>
  <div id="app">
      <div id="wrapper">
        <!-- Intro  nb changed selector tags to divs-->
          <div id="intro" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <h1>Fake News</h1>
              <p>Breaking news broken daily</p>
              <ul class="actions">
                <li><a href="#one" class="button scrolly">Get Crackin'</a></li>
              </ul>
            </div>
          </div>

        <!-- One -->
          <div id="Article One" class="wrapper style2 spotlights">
              <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
              <div class="content">
                <div class="inner">
<!--                   <div class="container">
 -->                  <div v-for="article in articles" class="actions">
                    <h1>{{ article.headline }}</h1>
                    <h1>{{ message }}</h1>

                    <!-- <div class="col-md-4" v-for="recipe in recipes"> -->
                    <!-- <li><a href="generic.html" class="button">{{ articles.headline }}</a></li> -->
                  </a>
                </div>
              </div>
            </div>
          </div>

        <!-- Three ref Intro note above-->
          <div id="three" class="wrapper style1 fade-up">
            <div class="inner">
              <div class="split style1">
             
                      <h3>Social</h3>
                      <ul class="icons">
                        <li><a href="#" class="fa-twitter"><span class="label">Twitter</span></a></li>
                        <li><a href="#" class="fa-facebook"><span class="label">Facebook</span></a></li>
                        <li><a href="#" class="fa-github"><span class="label">GitHub</span></a></li>
                        <li><a href="#" class="fa-instagram"><span class="label">Instagram</span></a></li>
                        <li><a href="#" class="fa-linkedin"><span class="label">LinkedIn</span></a></li>
                      </ul>
                    </li>
                  </ul>
              
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
      message: "do worry right now!",
      articles: {
        headline: "",
        body: ""
      }
    };
  },
  created: function() {
    axios
    .get("http://localhost:3000/api/articles/")
    .then(response => {
      this.article = response.data;
    });
  },  
  // goToShow: function() {
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
