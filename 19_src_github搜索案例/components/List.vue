<template>
  <div>
    <div v-show="info.userInfos.length" v-for="userInfo in info.userInfos" :key="userInfo.login" class="user">
      <a :href="userInfo.html_url" target="_blank">
        <img :src="userInfo.avatar_url">
      </a>
      <p>{{ userInfo.login }}</p>
    </div>
    <h1 v-show="info.isFirst">欢迎使用</h1>
    <h1 v-show="info.isLoding">加载中....</h1>
    <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info:{
        userInfos: [],
        isFirst: true,
        isLoding: false,
        errMsg: ''
      }
    }
  },
  mounted() {
    this.$bus.$on('updateListData', this.updateList)
  },
  methods: {
    updateList(listData) {
     this.info = {...this.info,...listData}
      console.log(this.info)
    }
  }
}
</script>

<style scoped>
.user {
  width: 180px;
  height: 180px;
  float: left;
  border: 1px solid #4d5154;
  border-radius: 5px;
  padding: 10px;
  margin: 5px 6px;
}

.user img {
  width: 40px;
  height: 40px;
}

</style>