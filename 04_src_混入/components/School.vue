<template>
<div class="school">
  <h2 @click="showName">学校姓名：{{name}}</h2>
  <h2>学校地址：{{address}}</h2>
</div>
</template>

<script>
// import {mixin,mixin2} from '../mixin'
export default {
  name: "School",
  data(){
    // console.log(this)
    return {
      name:'家里蹲',
      address:'home'
    }
  },
  // mixins:[mixin,mixin2]
}
</script>

<style scoped>
.school{
  background: bisque;
}
</style>