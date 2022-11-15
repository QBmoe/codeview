<template>
<div class="school">
  <h2>学生姓名：{{name}}</h2>
  <h2>学生性别：{{sex}}</h2>
  <h2>学生年龄：{{myage+1}}</h2>
  <button @click="updateAge">尝试修改</button>
</div>
</template>

<script>
export default {
  name: "Student",
  data(){
    // console.log(this)
    return {
      myage:this.age
    }
  },
  methods:{
    updateAge(){
      this.myage++
    }
  },
  // props:['name','sex','age'] 简单接收
  //接收对数据做类型限制
  /*props:{
    name:String,
    sex:String,
    age:Number
  }*/

  props:{
    name:{
      type:String,//类型是String
      required:true, //名字必须要传

    },
    sex:{
      type:String,//类型是String
      required:true, //名字必须要传

    },
    age:{
      type:Number,//类型是数字
     default:99 //默认值

    }

  }
}
</script>

<style scoped>
.school{
  background: bisque;
}
</style>