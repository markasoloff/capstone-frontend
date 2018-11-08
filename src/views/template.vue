<template>
  <div class="template">
    <div class="container">
      <form v-on:submit.prevent="submit()">
        <h1>Edit Articles Yourself</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Word to target:</label> 
          <input type="text" class="form-control" v-model="target">
        </div>
        <div class="form-group">
          <label>Substitution for that word:</label>
          <input type="text" class="form-control" v-model="newContent">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      target: "",
      newContent: "",
      rule: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        target: this.target,
        newContent: this.newContent,
        rule: this.rule
      };
      axios
        .post("http://localhost:3000/api/user_templates", params)
        .then(response => {
          this.$router.push("/template");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>