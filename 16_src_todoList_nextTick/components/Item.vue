<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id) ">
      <span v-show='!item.isEdit' v-text="item.content"></span>
      <input v-show='item.isEdit'
             type="text"
             :value="item.content"
             @blur="editStop(item,$event) " ref="title">
    </label>
    <button class="btn btn-danger" @click="deleteItem(item.id)">删除</button>
    <button class="btn btn-edit" v-show="!item.isEdit" @click="handleEdit(item)">编辑</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ['item'],
  methods: {
    //（取消）勾选
    handleCheck(id) {
      this.$bus.$emit('checkTodo', id)
    },
    //删除
    deleteItem(id) {
      if (confirm('确定删除吗？')) {
        this.$bus.$emit('deleteTodo', id)
      }
    },
    handleEdit(item) {
      if(item.hasOwnProperty('isEdit')){
        item.isEdit = true
      }else{
        this.$set(item, 'isEdit', true)
      }
      this.$nextTick(function (){
        this.$refs.title.focus()
      })

    },
    editStop(item,event) {
      if(!event.target.value.trim()) return alert('输入不能为空！')
      item.isEdit = false
      this.$bus.$emit('updateTodo',item.id,event.target.value)
    }
  }
}
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label, li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}

li:last-child {
  border-bottom: none;
}
</style>