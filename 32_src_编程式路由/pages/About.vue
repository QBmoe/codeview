<template>
  <h2>我是About内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  }
}
</script>

<style scoped>

</style>