<template>
  <div>
  <Banner></Banner>
    <div class="row">
      <div class="col-xl-2 ">
        <div class="list-group">
          <!--          <a class="list-group-item">About</a>-->
          <!--          <a class="list-group-item" >Home</a>-->
          <router-link class="list-group-item" active-class="active" to="/about">About</router-link>
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
}
</script>

<style>

</style>