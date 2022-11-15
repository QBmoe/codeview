<template>
<div class="test">
  <h2 class="pink">学校姓名：{{name}}</h2>
  <h2>学校地址：{{address}}</h2>
  <button @click="sendSchoolName">把学习的名称给app</button>
</div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name:'家里蹲',
      address:'home'
    }
  },
  props:['getSchoolName'],
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped lang="less">
.test{
  background: skyblue;
  .pink{
    color: pink;
  }
  padding: 5px;
}
</style>