<template>
<div>
  <button @click="isShow=!isShow">切换显示</button>
  <transition appear>
    <h1 v-show="isShow" >hello vue</h1>
  </transition>

</div>
</template>

<script>
export default {
  name: "Test",
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
.v-enter-active{
  animation: ice 1s ;
}
.v-leave-active{
  animation: ice 1s reverse;
}
@keyframes ice {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>