<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users:[
        {name:'Lee', position:'Web 开发', show: 'false'},
        {name:'Wong', position:'Java 开发', show: 'false'},
        {name:'Chan', position:'数据库开发', show: 'false'},
        {name:'Lu', position:'软件开发', show: 'false'},
        {name:'Kris', position:'移动开发', show: 'false'},
        {name:'Eng', position:'算法设计', show: 'false'},
        {name:'Sun', position:'软件测试', show: 'false'},
        {name:'Max', position:'产品经理', show: 'false'}
      ]
    }
  }
}
</script>

<style scoped>
  /* scoped 添加的样式只在该组件中生效 */
</style>
