<template>
<div class="test">
  <h2 class="pink">学校姓名：{{name}}</h2>
  <h2>学校地址：{{address}}</h2>
  <h2>学生名称：{{studentName}}</h2>
</div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name:'家里蹲',
      address:'home',
      studentName:''
    }
  },
  mounted() {
    this.$bus.$on('getStudentName',this.getStudentName)
  },
  beforeDestroy() {
    this.$bus.off('getStudentName')
  }
  ,
  methods:{
    getStudentName(name){
      this.studentName = name
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