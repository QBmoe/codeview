//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
import vueResource from 'vue-resource'

//关闭生产提示
Vue.config.productionTip=false

Vue.use(vueResource)

//创建vm
new Vue({
    el:'#app',
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})