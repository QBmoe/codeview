//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
import plugins from "./plugins";


//关闭生产提示
Vue.config.productionTip=false
Vue.use(plugins)
//创建vm
new Vue({
    el:'#app',
    render:h=>h(App)
})