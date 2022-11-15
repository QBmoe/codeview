<template>
<div>
  <button @click="isShow=!isShow">切换显示</button>
  <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
  >
    <h1 v-show="isShow" key="1">hello vue</h1>
    <h1 v-show="isShow" key="2">hello ice</h1>
  </transition-group>

</div>
</template>

<script>
import 'animate.css';

export default {
  name: "Test3",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
h1{
  background: orange;

}


</style>