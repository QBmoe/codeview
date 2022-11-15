//该文件专门用于创建应用的路由

import RepositoryList from "@/components/RepositoryList.vue";
import RepositoryEdit from "@/components/RepositoryEdit.vue";
import VueRouter from "vue-router";



export default new VueRouter({
    routes: [
        {
            name: 'repositoryList',
            path: '/repositoryList', 
            component: RepositoryList
         },
        {
            name:"repositoryEdit",
            path:'/repositoryEdit/:id',
            component: RepositoryEdit,
            props:true
        }
    ]
})