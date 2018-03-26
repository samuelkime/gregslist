<template>
  <div class="home">
    <div class="btn-group-vertical">
     <router-link to="/cars"><button type="button" class="btn btn-success">Cars</button></router-link>
     <router-link to="/jobs"><button type="button" class="btn btn-warning">Jobs</button></router-link>
     <router-link to="/houses"><button type="button" class="btn btn-success">Houses</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
