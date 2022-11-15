<template>
  <div class="todo-header">
    <input type="text" placeholder="输入任务名称，按回车确认" v-model="content" @keyup.enter="addItem">
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
  name: "Top",
  props:['addTodo'],
  methods:{
    addItem(){
      if(!this.content.trim()) return alert('输入不能为空')
      const todoItem = {
        id:nanoid(),
        content:this.content,
        done:false
      }
      this.addTodo(todoItem)
      this.content=''
    }
  },
  data(){
    return {
      content:''
    }
  }
}
</script>

<style scoped>
.todo-header {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input {
  outline: none;
  width: 550px;
  height: 20px;
  font-size: 14px;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 12px rgba(82, 168, 236, 0.6);
}
</style>