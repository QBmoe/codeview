<template>
  <div>
    <h1>当前值为：{{ this.$store.state.sum }}</h1>
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
      n: 1
    }
  },
  methods: {
    add() {
      this.$store.dispatch('add',this.n)
    },
    sub() {
      this.$store.dispatch('sub',this.n)
    },
    oddAdd() {
      this.$store.dispatch('oodAdd',this.n)
      if (this.sum % 2 != 0) {
        this.sum += this.n
      }
    },
    addWait() {
      this.$store.dispatch('addWait',this.n)
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