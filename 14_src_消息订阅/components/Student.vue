<template>
<div class="test">
  <h2>学生姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  <h2>学生年龄：{{age}}</h2>
  <button @click="sendName">点击发送名称</button>
</div>
</template>

<script>
import pubsub from "pubsub-js"

export default {
  name: "Student",
  data(){
    return {
      name:'张三',
      age:19,
      sex:'男'
    }
  },
  methods:{
    sendName(){
      pubsub.publish('hello',666)
      // this.$bus.$emit('getStudentName',this.name)
    }
  },
  mounted() {

  },
  beforeDestroy() {

  }
}
</script>

<style scoped>
.test{
  background: orange;
  padding: 5px;
  margin-top: 5px;
}
</style>