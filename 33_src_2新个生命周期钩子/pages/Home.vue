<template>
  <div>
    <h2>我是Home内容</h2>
    <div class="row-cols-2 ">
      <div class="list-group">
        <!--          <a class="list-group-item">About</a>-->
        <!--          <a class="list-group-item" >Home</a>-->
        <router-link class="list-group-item"  active-class="active" to="/home/message">Message</router-link>
        <router-link class="list-group-item"  active-class="active" to="/home/news">News</router-link>
      </div>
    </div>
    <div>
      <h3>home页的内容</h3>
      <keep-alive :include="['News','Message']">
      <router-view></router-view>
      </keep-alive>
    </div>
  </div>

</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log(this)
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  }
}
</script>

<style scoped>

</style>