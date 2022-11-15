<template>
<section>
  <h3> Search github user</h3>
  <div>
    <input type="text" placeholder="输入用户名搜索" v-model="keyword">&nbsp;<button @click="searcheUsers">搜索</button>
  </div>
</section>
</template>

<script>
import axios from 'axios'
export default {
  name: "Search",
  methods:{
    searcheUsers(){
      this.$bus.$emit("updateListData",{isFirst:false,isLoding:true,errMsg:'',userInfos:[]})
      axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
          response=>{
            this.$bus.$emit("updateListData",{isLoding:false,errMsg:'',userInfos:response.data.items})
          },error=>{
            this.$bus.$emit("updateListData",{isLoding:false,errMsg:error,userInfos:[]})
          }
      )
    }
  },
  data(){
    return {
      keyword:''
    }
  }
}
</script>

<style scoped>

</style>