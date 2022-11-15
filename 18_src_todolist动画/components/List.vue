<template>
  <div class="todo-main">
    <ul class="todo-empty">
      <transition-group name="todo" appear>
      <Item v-for="item in itemList"
            :item="item"
            :key="item.id"
            ></Item>
      </transition-group>
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

.todo-enter-active{
  animation: ice 0.5s ;
}
.todo-leave-active{
  animation: ice 0.5s reverse;
}
@keyframes ice {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>
