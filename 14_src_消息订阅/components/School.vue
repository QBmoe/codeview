<template>
<div class="test">
  <h2 class="pink">学校姓名：{{name}}</h2>
  <h2>学校地址：{{address}}</h2>
  <h2>学生名称：{{studentName}}</h2>
</div>
</template>

<script>
import pubsub from 'pubsub-js'
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
    // this.$bus.$on('getStudentName',this.getStudentName)
    this.subId = pubsub.subscribe('hello',(msgName,data)=>{
      console.log('有人发布了hello消息',msgName,data)
      console.log(this)
    })
  },
  beforeDestroy() {
    pubsub.unsubscribe(this.subId)
    // this.$bus.off('getStudentName')
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