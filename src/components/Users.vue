<template>
  <div id="users">
    <h2>Hello Users!</h2>
    <ul>
      <li v-for="user in users">
        <h5>{{ user.name }}</h5>
        <span>{{ user.email }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>
  #users {
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 30px;
    flex-basis: 200px;
    flex-grow: 1;
    text-align: center;
    border: 1px solid #222;
    margin: 10px;
  }
</style>
