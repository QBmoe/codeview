<template>
<div class="school">
  <h2 >学校姓名：{{name | myslic}}</h2>
  <h2>学校地址：{{address}}</h2>
  <button @click="hello">点我测试hello</button>
</div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name:'家里蹲1234',
      address:'home'
    }
  },
}
</script>

<style scoped>
.school{
  background: bisque;
}
</style>