<template>
  <div class="app">
    <h1 v-text="msg"></h1>
<!--    通过父组件给子组件回调函数-->
    <school :getSchoolName="getSchoolName"></school>
<!-- 通过父组件给子组件定义一个自定义事件实现，子给父传递数据（第一种写法 使用@或v-on）-->
<!--    <Student @:studentname="getStudentName"/>-->

    <Student @studentname="getStudentName" @demo='demo' ref="student"/>

  </div>
</template>

<script>
//引入school组件
import Student from "@/components/Student";
import School from "@/components/School";
export default {
  name: "App",
  components: {School, Student},
  data(){
    return{
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    getSchoolName(name){
      console.log('获取了学校名',name)
    },
    getStudentName(name){
      console.log('demo被调用了',name)
    },
    demo(){
      console.log('demo事件触发')
    }
  },
  mounted() {
    // this.$refs.student.$on('studentname',this.getStudentName) 绑定自定义事件
    // this.$refs.student.$once('studentname',this.getStudentName) //绑定自定义事件 一次性
  }
}
</script >

<style scoped>
.app{
  background: grey;
  padding: 5px;
}
</style>