<template>
<div class="school">
  <h2 @click="showName">学生姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  <h2>学生年龄：{{age}}</h2>
</div>
</template>

<script>
import {mixin,mixin2} from "../mixin";

export default {
  name: "Student",
  data(){
    // console.log(this)
    return {
      name:'张三',
      age:19,
      sex:'男'
    }
  },
  mixins:[mixin,mixin2]
}
</script>

<style scoped>
.school{
  background: bisque;
}
</style>