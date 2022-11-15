//该文件专门用于创建应用的路由

import VueRouter from "vue-router";
import About from "@/pages/About";
import Home from "@/pages/Home";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const router =  new VueRouter({
    routes: [{
        name: 'guanyu',
        path: '/about', component: About,
        meta:{title:'关于'}
    },
        {
            name:'zhuye',
            path: '/home', component: Home,
            meta:{title:'主页'},
            children: [
                {
                name:'xinwen',
                path: "news",
                component: News,
                    meta:{isAuth:true,title:'新闻'},
                    //独享路由守卫
                    beforeEnter:(to, from, next)=>{
                        let school = localStorage.getItem('school')
                        if(school=='jialidun'){
                             next()
                        }else{
                         alert('学校不为家里蹲')
                        }
                    }
            },
                {
                name:'xiaoxi',
                path: "message",
                component: Message,
                    meta:{isAuth:true,title:'消息'},
                children: [{
                    name: 'xiangqing',
                    path: "detail",
                    component: Detail,
                    meta:{title:'详情'},
                    //props第一种写法，值为对象,改对象中的所有属性都会已props的形式传给Detail组件
                    // props:{
                    //     a:1,b:'hello'
                    // }
                //    props第二种写法，值为boolean值，若值为真，就会把该路由收到的所有params参数以props的形式传给Detail组件
                //     props:true
                //    props第三中写法。值为函数，
                    props($route){
                        return {id:$route.query.id,title:$route.query.title}
                    }
                }]
            }]
        }
    ]

})
//全局前置路由守卫，初始化的时候被调用，每次路由切换之前被调用，
// router.beforeEach((to,from,next)=>{
//     console.log('全局前置路由守卫')
//     console.log(to,from,next)
//     let school = localStorage.getItem('school')
//     if(to.meta.isAuth){
//
//         if(school=='jialidun'){
//             next()
//         }else{
//             alert('学校不为家里蹲')
//         }
//     }else{
//         next()
//
//     }
//
//
// })
//
// //全局后置路由守卫
// router.afterEach((to,from)=>{
//     document.title = to.meta.title || 'ice'
// })

export default router