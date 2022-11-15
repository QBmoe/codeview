<template>
  <div>
    <ul>
      <li v-for="msg in msgList" :key="msg.id">
        <!--        to的字符串写法-->
        <!--        <router-link :to="`/home/message/detail?id=${msg.id}&title=${msg.title}`">{{msg.title}}</router-link>-->
        <!--        to的对象写法-->
        <router-link :to="{
        name:'xiangqing',
          query:{
            id:msg.id,
            title:msg.title
          }}">
          {{ msg.title }}
        </router-link>
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
  }
}
</script>

<style scoped>

</style>