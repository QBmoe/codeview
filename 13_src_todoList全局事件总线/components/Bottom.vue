<template>
  <div v-show="totalCount">
    <label>
<!--      <input type="checkbox" :checked="isAll" @click="checkAllItem">-->
      <input type="checkbox" v-model="isAll">
    </label>
    <span>已完成{{ doneCount }}/全部{{ totalCount }}</span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  props: ['itemList'],
  computed: {
    doneCount() {
      return this.itemList.reduce((pre, current) => pre + (current.done ? 1 : 0), 0)
    },
    totalCount() {
      return this.itemList.length
    },
    isAll:{
      get(){
        return this.totalCount == this.doneCount && this.totalCount > 0
      },
      set(value){
        this.$emit('checkAll',value)
      }
    }
  },
  methods:{
    clearAll(){
      this.$emit('clearDone')
    }
  }
}
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
}
</style>