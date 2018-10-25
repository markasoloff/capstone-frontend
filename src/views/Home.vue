<template>
  <div id="app">
      <div id="wrapper">
        <!-- Intro -->
          <section id="intro" class="wrapper style1 fullscreen fade-up">
            <div class="inner">
              <h1>Fake News</h1>
              <p>Breaking news broken daily</p>
              <ul class="actions">
                <li><a href="#one" class="button scrolly">Get Crackin'</a></li>
              </ul>
            </div>
          </section>

        <!-- One -->
          <section id="Article One" class="wrapper style2 spotlights">
            <section>

              <a href="#" class="image"><img src="images/pic01.jpg" alt="" data-position="center center" /></a>
              <div class="content">
                <div class="inner">
                  <div class="container">
                       <h1>{{ message }}</h1>
                       <div>
                         <h1> {{ article.headline }}</h1>
                         <h1> {{ article.body }}</h1>
                      </div>
                    </div>
                  <ul class="actions">
                    <li><a href="generic.html" class="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" class="image"><img src="images/pic02.jpg" alt="" data-position="top center" /></a>
              <div class="content">
                <div class="inner">
                  <h2>Feugiat consequat</h2>
                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                  <ul class="actions">
                    <li><a href="generic.html" class="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
            <section>
              <a href="#" class="image"><img src="images/pic03.jpg" alt="" data-position="25% 25%" /></a>
              <div class="content">
                <div class="inner">
                  <h2>Ultricies aliquam</h2>
                  <p>Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam turpis mauris, eu ultricies erat malesuada quis. Aliquam dapibus.</p>
                  <ul class="actions">
                    <li><a href="generic.html" class="button">Learn more</a></li>
                  </ul>
                </div>
              </div>
            </section>
          </section>
        <!-- Three -->
          <section id="three" class="wrapper style1 fade-up">
            <div class="inner">
              <div class="split style1">
                <section>   
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
                </section>
              </div>
            </div>
          </section>
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
 
  methods: {
    goToSwap: function() {
      axios
      .get("http://localhost:3000/api/articles") + this.$route.params.id + "?version=swap"}
  },
  computed: {}
}

</script>

<!-- http://localhost:3000/api/articles/3?version=swap -->

     

