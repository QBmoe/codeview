<template>
  <li>
    <label>
      <input type="checkbox" :checked="item.done" @change="handleCheck(item.id) ">
      <span v-text="item.content"></span>
    </label>
    <button class="btn btn-danger" @click="deleteItem(item.id)">删除当前项</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  props: ['item'],
  methods: {
    //（取消）勾选
    handleCheck(id) {
      this.$bus.$emit('checkTodo',id)
    },
    //删除
    deleteItem(id) {
      if (confirm('确定删除吗？')) {
        this.$bus.$emit('deleteTodo',id)
      }
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