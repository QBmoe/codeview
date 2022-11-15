
<template>
  <!--  组件结构-->
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="showName">点击提示学校名</button>
  </div>
</template>

<script>
//组件交互
export default {
  data() {
    return {
      name: '家里蹲',
      address: 'home'
    }
  },
  methods: {
    showName() {
      console.log(this)
      alert(this.name)
    }
  }
}
</script>

<style>
/*组件的样式*/
.demo {
  background: aqua;
}
</style>
