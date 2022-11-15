<template>
  <div>
    <ul>
        <li>新闻001<input></li>
        <li>新闻002<input></li>
        <li>新闻003<input></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "News"
  ,
  beforeDestroy() {
    console.log("news要销毁了")
  }
}
</script>

<style scoped>

</style>