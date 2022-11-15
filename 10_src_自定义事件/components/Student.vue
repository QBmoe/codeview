<template>
<div class="test">
  <h2>学生姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  <h2>学生年龄：{{age}}</h2>
  <button @click="sendStudentName">把学生的名称给app</button>
  <button @click="$emit('demo')">触发demo事件</button>
  <button @click="unBindStudentName">解绑studentname事件</button>
  <button @click="destroyStudent">销毁student组件</button>
</div>
</template>

<script>

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
    sendStudentName(){
      this.$emit('studentname',this.name)
    },
    unBindStudentName(){
      this.$off('studentname')//解绑一个事件
      this.$off(['studentname','demo'])//解绑多个
      this.$off()//解绑所有事件
    },
    destroyStudent(){
      this.$destroy()//销毁当前student
    }
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