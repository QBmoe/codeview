<template>
  <div>
    <Test3></Test3>
  </div>
</template>

<script>
//引入school组件
import Test from "@/components/Test";
import Test2 from "@/components/Test2";
import Test3 from "@/components/Test3";

export default {
  name:'App',
  components: {Test3, Test2, Test}
}
</script>

<style>
body{
  background: #fff;
}
.btn{
  float: right;
  display: inline-block;
  padding: 4px 12px;
  margin-right: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  border-radius:5px;
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2) ,0 1px 2px rgba(0,0,0,0.2);
}
.btn-danger{
  color: white;
  background: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit{
  color: white;
  background:dodgerblue;
  border: 1px solid dodgerblue;
  margin-right: 5px;
}

.btn-danger:hover{
  color: white;
  background:  #bd362f;
}
.btn-focus{
  outline: none;
}
.todo-container{
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap{
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>