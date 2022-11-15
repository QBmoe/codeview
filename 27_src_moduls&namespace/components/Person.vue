<template>
  <div>
    <h1>人员信息</h1>
    <h3>列表中第一个人是：{{firstPersonName}}</h3>
    <input type="text" placeholder="请输入名称" v-model="personName">
    <button @click="addPerson">添加</button>
    <button @click="addWang">添加王</button>
    <button @click="addServerPerson">添加server</button>
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
      this.$store.commit('personAbout/ADD_PERSON',personObj)
      this.personName=''
    },
    addWang() {
      let personObj = {name: this.personName, id: nanoid()}
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.personName=''
    },
    addServerPerson(){
      this.$store.dispatch('personAbout/addPersonServer')
    }
  },
  data() {
    return {
      personName: ''
    }
  },
  computed:{
    personList(){
      return this.$store.state.personAbout.personList
    },
    sum(){
      return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      return this.$store.getters["personAbout/firstPersonName"]
    }
  }
}
</script>

<style scoped>

</style>