//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
import Vuex from 'vuex'

import store from "@/store";

//关闭生产提示
Vue.config.productionTip=false


Vue.use(Vuex)

//创建vm
const vm = new Vue({
    el:'#app',
    render:h=>h(App),
    store,
    beforeCreate() {

    }
})

console.log(vm)