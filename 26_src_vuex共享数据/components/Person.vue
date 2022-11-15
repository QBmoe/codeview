<template>
  <div>
    <h1>人员信息</h1>
    <input type="text" placeholder="请输入名称" v-model="personName">
    <button @click="addPerson">添加</button>
    <ul>
      <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>
    <h3>Count组件的求和为：{{sum}}</h3>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "Person",
  methods: {
    addPerson() {
      let personObj = {name: this.personName, id: nanoid()}
      this.$store.commit('ADD_PERSON',personObj)
      this.personName=''
    }
  },
  data() {
    return {
      personName: ''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personList
    },
    sum(){
      return this.$store.state.sum
    }
  }
}
</script>

<style scoped>

</style>