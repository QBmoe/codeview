<template>
  <div>
    <h1 v-text="msg"></h1>
    <school></school>
    <hr>
    <Student />

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
  }
}
</script>

<style scoped>

</style>