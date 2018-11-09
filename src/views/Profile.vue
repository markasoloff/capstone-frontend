<!-- <template>
  <div id="app">
    <div class="profile-page">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
              <h4>{{ user.email }}</h4>
              <div v-if="isCurrentUser()">      
              </div>
              <div v-else="doSomethingElse()">
                      
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row">
                <div class="col-xs-12 col-md-10 offset-md-1">
                    <div class="articles-toggle">
                        <ul class="nav nav-pills outline-active">
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        exact
                                        :to="{ name: 'user' }">
                                    My Articles
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link
                                        class="nav-link"
                                        active-class="active"
                                        exact
                                        :to="{ name: 'user-favorites' }">
                                    Favorited Articles
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
    </div>
</template>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      message: "do worry right now!",
      user: {
        email: "fakeEmail@aol.com"
      }
    };
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.user.username) {
        return this.currentUser.username === this.user.username;
      }
      return false;
    }
    doSomethingElse() {
      console.log("This User is not logged in?");
      return
    }
  },
  computed: {}
};
</script>

 -->