<template>
  <div>
    <h1>当前值为：{{ sum }}</h1>
    <h3>当前值放大10倍为：{{ bigsum }}</h3>
    <h2>学校：{{school}}</h2>
    <h2>学科：{{subject}}</h2>
    <h2>人员组件的总人数是：{{personList.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="oddAdd(n)">奇数加</button>
    <button @click="addWait(n)">等会加</button>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
  name: "Calculator",
  data() {
    return {
      n: 1
    }
  },
  methods: {
    ...mapMutations({add:'ADD',sub:'SUB'}),
  ...mapActions(['oddAdd','addWait'])
  },
  computed:{
    ...mapState(['sum','school','subject','personList']),
    ...mapGetters(['bigsum'])
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>