<template>
  <div class="todo-container">
    <div class="todo-wrap">
    <Top @addTodo="addTodo" ref="todoTop"></Top>
    <List :itemList="itemList"></List>
    <Bottom :itemList="itemList" @checkAll="checkAll" @clearDone="clearDone"></Bottom>
    </div>
  </div>
</template>

<script>
//引入school组件
import Top from "./components/Top";
import List from "./components/List";
import Bottom from "./components/Bottom";

export default {
  name: "App",
  components: {Top, List, Bottom},
  methods:{
    addItem(){
      let content = this.$refs['todoTop'].$data.content
      this.$refs['todoList'].$data.itemList.unshift({id:this.index,content,select:false})
      this.index ++
    },
    addTodo(todoItem){
      this.itemList.unshift(todoItem)
    },
    checkTodo(id){
      this.itemList.forEach((todo)=>{
        if(todo.id == id){
          todo.done = !todo.done
        }
      })

    },
    deleteTodo(id){
      this.itemList.forEach((todo,index)=>{
        if(todo.id == id){
          this.itemList.splice(index,1)
        }
      })
    },
    checkAll(check){
      this.itemList.forEach((todo)=>todo.done = check)
    },
    clearDone(){
      this.itemList = this.itemList.filter(todo=>{
        return !todo.done
      })
    }
  },
  data(){
    return {
      itemList:JSON.parse(localStorage.getItem('itemList')) || []
    }
  },
  watch:{
    itemList:{
      deep:true,
     handler(value){
       localStorage.setItem('itemList',JSON.stringify(value))
     }
    }
  },
  mounted() {
    this.$bus.$on('checkTodo',this.checkTodo)
    this.$bus.$on('deleteTodo',this.deleteTodo)
  },
  beforeDestroy() {
    this.$bus.$off(['checkTodo','deleteTodo'])
  }
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
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.2) ,0 1px 2px rgba(0,0,0,0.2);
}
.btn-danger{
  color: white;
  background: #da4f49;
  border: 1px solid #bd362f;
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