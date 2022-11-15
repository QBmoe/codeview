<template>
  <div>
    <ul>
      <li v-for="msg in msgList" :key="msg.id">
        <!--        跳转路由并传递param参数，to的字符串写法-->
        <!--                <router-link :to="`/home/message/detail/${msg.id}/${msg.title}`">{{msg.title}}</router-link>-->
        <!--        跳转路由并传递param参数， to的对象写法-->
        <router-link :to="{
        name:'xiangqing',
          query:{
            id:msg.id,
            title:msg.title
          }}">
          {{ msg.title }}
        </router-link>
        <button @click="pushShow(msg)">push查看</button>
        <button @click="replaceShow(msg)">replace查看</button>
      </li>
    </ul>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "Message",
  data() {
    return {
      msgList: [
        {id: nanoid(), title: '消息001'},
        {id: nanoid(), title: '消息002'},
        {id: nanoid(), title: '消息003'},
        {id: nanoid(), title: '消息004'},

      ]
    }
  },
  beforeDestroy() {
    console.log("message要销毁了")
  }
  ,
  methods: {
    pushShow(msg) {
      this.$router.push({
        name: 'xiangqing',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    },
    replaceShow(msg) {
      this.$router.replace({
        name: 'xiangqing',
        query: {
          id: msg.id,
          title: msg.title
        }
      })
    }
  }
}
</script>

<style scoped>

</style>