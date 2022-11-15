<template>
  <div>
    <ul>
      <li :style="{opacity}">欢迎学习Vue</li>
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

  },
  data(){
    return {
      opacity:1
    }
  },
  mounted() {

  },
  activated() {
    this.timer = setInterval(()=>{
      if(this.opacity<=0){
        this.opacity = 1
      }
      this.opacity-=0.15
    },150)
  },
  deactivated() {
    clearInterval(this.timer)
  }

}
</script>

<style scoped>

</style>