<template>
  <div>
    <Banner></Banner>
    <button @click="back">ει</button>
    <button @click="forward">εθΏ</button>
    <button @click="go">go</button>
    <div class="row">
      <div class="col-xl-2 ">
        <div class="list-group">
          <!--          <a class="list-group-item">About</a>-->
          <!--          <a class="list-group-item" >Home</a>-->
          <router-link class="list-group-item" active-class="active" :to="{name:'guanyu'}">About</router-link>
          <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
    </div>
    <div class="row ">
      <div class="col-xl-6">
        <div class="modal-body">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import Banner from "@/components/Banner";

export default {
  name: "App",
  components: {Banner},
  methods:{
    back(){
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    go(){
      this.$router.go(-2)
    }
  }
}
</script>

<style>

</style>