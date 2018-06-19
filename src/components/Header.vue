<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
  export default {
    name: 'app-header',
    data () {
      return {
        title: 'Vue.js demo'
      }
    }
  }
</script>

<style>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h1{
    color: #222;
    text-align: center;
  }
</style>
