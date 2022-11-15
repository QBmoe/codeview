<template>
  <div>
    <h1>当前值为：{{ sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="oddAdd">奇数加</button>
    <button @click="addWait">等会加</button>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      sum: 0,
      n: 1
    }
  },
  methods: {
    add() {
      this.sum += this.n
    },
    sub() {
      this.sum -= this.n
    },
    oddAdd() {
      if (this.sum % 2 != 0) {
        this.sum += this.n
      }
    },
    addWait() {
      setTimeout(() => {
        this.sum += this.n
      }, 1000)
    }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>