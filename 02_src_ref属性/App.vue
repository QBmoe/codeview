<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showInfo" ref="btn">点我输出上方的dom</button>
    <School ref="sch"/>
  </div>
</template>

<script>
//引入school组件
import School from "./components/School";

export default {
  name: "App",
  components: {School},
  data(){
    return{
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showInfo(){
      console.log(this.$refs.title)//真实dom对象
      console.log(this.$refs.btn)//真实dom对象
      console.log(this.$refs.sch)//vc
    }
  }
}
</script>

<style scoped>

</style>