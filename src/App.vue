<template>
  <div id="app">
    <header>
      <section id="sidebar">
        <div class="inner">
          <nav>
            <ul>                                      
              <li><a href="/#/">Home</a></li>
            </ul>
          </nav>
        </div>
      </section>
    </header>


    <div style="height:100px"></div>
    <router-view/>
  

    <footer id="footer" class="wrapper style1-alt">
      <div class="inner">
        <ul class="menu">
          <li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<!-- <script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "we are on app.vue",
      articles:{}
    };
  },
  created: function() {
    axios.get("http://localhost:3000/api/articles/").then(response => {
      this.articles = response.data;
    });
  },


  methods: {
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
    }
  },
  computed: {}
};
</script>
 -->