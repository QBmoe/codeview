<template>
  <!--  组件结构-->
  <div>
    <h1>学生姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
  </div>
</template>

<script>
//组件交互
export default {

  data() {
    return {
      name: 'bob',
      age: 23
    }
  }
}
</script>

