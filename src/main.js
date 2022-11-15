//引入Vue
import Vue from "vue";
//引入App
import App from "./App";
//引入elementui
import ElementUI from 'element-ui';
//引入elementui的全部样式
import 'element-ui/lib/theme-chalk/index.css';
import router from '@/router';
import VueRouter from "vue-router";
//按需引入
// import {Button,Row,DatePicker} from "element-ui";

// Vue.component(Button.name,Button)
// Vue.component(Row.name,Button)
// Vue.component(DatePicker.name,DatePicker)
//关闭生产提示
Vue.config.productionTip=false
//应用
Vue.use(ElementUI)

Vue.use(VueRouter)
//创建vm
 new Vue({
    el:'#app',
    router,
    render:h=>h(App),
})
