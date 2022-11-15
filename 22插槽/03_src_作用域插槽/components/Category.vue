<template>
<div class="category">
  <h2>{{ title }}</h2>
  <slot name="center" :foods="foods">默认值</slot>
</div>
</template>

<script>
export default {
  name: "Category",
  props:['categorydata','title'],
  data(){
    return {
      foods: ['火锅', '蛋糕', '小贝', '牛排']
    }
  }
}
</script>

<style scoped>
.category{
  background: skyblue;
  width: 200px;
  height: 300px;
}
.category h2{
  text-align: center;
  background: orange;
}
</style>