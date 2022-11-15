<template>
  <div>
    <h1 v-text="msg"></h1>
    <hr>
    <Student name = "李四" sex="女" :age="18"/>
    <hr>
    <Student name = "张三" sex="男" :age="28"/>
    <hr>
    <Student name = "bob" sex="男" :age="18"/>

  </div>
</template>

<script>
//引入school组件
import Student from "@/components/Student";

export default {
  name: "App",
  components: {Student},
  data(){
    return{
      msg:'欢迎学习Vue'
    }
  }
}
</script>

<style scoped>

</style>