<template>
 <div class="details">
  <div class="container">
   <div class="row">
    <div class="col-md-12" v-for="(article,index) in articles" :key="index">
     <div v-if="proId == article.id">
      <h1>{{ article.title }}</h1>
      <h1>Details!</h1>
      <h2>the product id is :{{this.$route.params.Aid}}</h2>
     </div>
    </div>
   </div>
  </div>
 </div>
</template>

<script>

 export default{
  name:'details',
  data(){
   return{
    proId:this.$route.params.Aid,
    title:"details",
    articles:[
    {
    title:"",
    body: "",
    id: "",
    }],
    };
}
};
</script>
