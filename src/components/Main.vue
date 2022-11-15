<template>
    <div>
        <el-container>
            <el-header>
                <h1>代码评审系统</h1>
            </el-header>
            <el-container>
            <el-aside >
                <el-menu
                router
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>分支管理</span>
                    </template>
                
                    <el-menu-item index="1-1" route="/repositoryEdit">分支编辑</el-menu-item>
                    <el-menu-item index="1-2" route="/repositoryList">分支列表</el-menu-item>
                    
                
                    </el-submenu>
     
      
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>



export default {
    name: "Main",
    data() {
        return {};
    },
    mounted() {
    },
    methods: {
        handleOpen() {
        },
        handleClose() {
        }
    },
    components: { }
};
</script>

<style lang="css" scoped>
.el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>