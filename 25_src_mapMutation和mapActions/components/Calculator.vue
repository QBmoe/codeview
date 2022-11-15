<template>
  <div>
    <h1>当前值为：{{ sum }}</h1>
    <h3>当前值放大10倍为：{{ bigsum }}</h3>
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
    // add() {
    //   this.$store.commit('ADD',this.n)
    // },
    // sub() {
    //   this.$store.commit('SUB',this.n)
    // },
    ...mapMutations({add:'ADD',sub:'SUB'})
    ,
   /* ************************************/
    // oddAdd() {
    //   this.$store.dispatch('oodAdd',this.n)
    //   // if (this.sum % 2 != 0) {
    //   //   this.sum += this.n
    //   // }
    // },
    // addWait() {
    //   this.$store.dispatch('addWait',this.n)
    //   // setTimeout(() => {
    //   //   this.sum += this.n
    //   // }, 1000)
    // }

  ...mapActions(['oddAdd','addWait'])
  },
  computed:{
    ...mapState(['sum']),
    ...mapGetters(['bigsum'])
    // sum(){
    //   return this.$store.state.sum
    // },
    // bigsum() {
    //   return this.$store.getters.bigsum
    // }
  }
}
</script>

<style scoped>
button{
  margin-left: 10px;
}
</style>