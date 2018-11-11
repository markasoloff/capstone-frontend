<template>
 <div class="show">
     <div class="container">
      <div class="editButtons">
        <h1 class="animated shake">{{ message }}</h1>
          <button @click="goToSwap()">Swap</button>
          <button @click="goToAdd()">Add</button>
          <button @click="goToRedact()">Redact</button>
        </div>
     <div>
      <br>
   <h3 v-html="article.headline">{{ article.headline }}</h3>
     <article v-html="article.body">{{ article.body }}</article>
    </div>
  
    <br>
   <social-sharing url="https://vuejs.org/" inline-template>
     <div id="socialLinks">
     <h2>Tell them - tell them all!</h2>
       <network network="linkedin">
         <i class="fa fa-fw fa-linkedin"></i> LinkedIn
       </network>
       <network network="facebook">
         <i class="fa fa-fw fa-facebook"></i> Facebook
       </network>
       <network network="googleplus">
         <i class="fa fa-fw fa-google-plus"></i> Google +
       </network>
       <network network="pinterest">
         <i class="fa fa-fw fa-pinterest"></i> Pinterest
       </network>
       <network network="reddit">
         <i class="fa fa-fw fa-reddit"></i> Reddit
       </network>
       <network network="whatsapp">
         <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
       </network>
     </div>
   </social-sharing>
   <ul class="icons" style="font-size: 500%;">
     <li>
        <a href="https://twitter.com/intent/tweet?button_hashtag=FakeNewsApp&ref_src=twsrc%5Etfw" data-size="large" data-related="blastropodcast" data-dnt="true" data-show-count="false"class="fa-twitter">
          <span class="label">Twitter</span></a></li>
   </ul>
          <div class="editButtons">
            <button>
              <a href="https://www.youtube.com/watch?v=Kas6akz1jWU&t=1s">Leave Site for Greener Pastures</a>
            </button>
          </div>
  </div>
 </div>
</template>

<style>

/**{font-family: Arial !important;}*/

span.add {
  color: yellow;

}

div.animated pulse {
  -webkit-animation-duration: .5s;
  -webkit-animation-delay: 0.5s;
  color: yellow;
}



span.redacted {
  background-color: orange;
  color: orange;
}

ul.icons {
  text-align:center;
}

div.editButtons {
  text-align: center;

}

div#socialLinks {
  text-align: center;

}

</style>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
<script src="/dist/vue-social-sharing.min.js"></script>


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

