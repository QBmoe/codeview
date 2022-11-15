<template>
  <div class="todo-main">
    <ul class="todo-empty">
      <Item v-for="item in itemList"
            :item="item"
            :key="item.id"
            ></Item>
    </ul>

  </div>
</template>

<script>
import Item from "../components/Item";

export default {
  name: "List",
  props: ['itemList'],
  components: {Item}
}
</script>

<style scoped>
.todo-main {
  margin-left: 0;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
