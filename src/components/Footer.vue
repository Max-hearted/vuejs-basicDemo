<template>
  <footer>
    <p>{{ copyright }}</p>
  </footer>
</template>

<script>
  export default {
    name: 'app-footer',
    data () {
      return {
        copyright: 'Vue-cli Copyright 2017 @https://www.github.com/Max-hearted'
      }
    }
  }
</script>

<style scoped>
  footer{
    background: #222;
    padding: 6px;
  }
  p{
    color: lightgreen;
    text-align: center;
  }
</style>
