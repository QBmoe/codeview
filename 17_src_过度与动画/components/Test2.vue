<template>
<div>
  <button @click="isShow=!isShow">切换显示</button>
  <transition-group appear name="hello">
    <h1 v-show="isShow" key="1">hello vue</h1>
    <h1 v-show="isShow" key="2">hello ice</h1>
  </transition-group>

</div>
</template>

<script>
export default {
  name: "Test2",
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
/*进入的起点*/
.hello-enter ,.hello-leave-to{
transform: translateX(-100%);
}
/*进入的终点*/
.hello-enter-to ,.hello-leave{
transform: translateX(0px);
}

.hello-enter-active,.hello-leave-active{
  transition: 1s;
}





</style>