<template>
  <div id="home">
    <app-header></app-header>
    <users v-bind:users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Users from './Users'
import Footer from './Footer'
import Header from './Header'

export default {
  name: 'home',
  data () {
    return {
      users:[

      ]
    }
  },
  components: {
    'users':Users,
    'app-header':Header,
    'app-footer': Footer
  },
  // 网络数据接口的使用
  created() {
    this.$http.get('http://jsonplaceholder.typicode.com/users')
      .then((data) => {
        this.users = data.body
      })
  }
}
</script>

<style scoped>
  /* scoped 添加的样式只在该组件中生效 */
</style>
