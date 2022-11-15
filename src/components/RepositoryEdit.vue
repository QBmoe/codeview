<template>
    <div>
        <el-container>
            <el-header>
                <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/repositoryList' }">分支列表</el-breadcrumb-item>
                <el-breadcrumb-item>分支编辑</el-breadcrumb-item>
                </el-breadcrumb>
            </el-header>
            <el-main>
            <el-row>
            <el-col :span="12">
                <label>分支名称</label>
                <el-input v-model="editData.name" placeholder="请输入分支名称" maxlength="50" show-word-limit></el-input>
                <label>分支地址</label>
                <el-input v-model="editData.url" placeholder="请输入分支地址" maxlength="2000" show-word-limit></el-input></el-col>
            </el-row>
        </el-main>
        <el-footer>
            <el-button type="success" @click="save">保存</el-button>
        </el-footer>
        </el-container>
    </div>
   
</template>

<script>
import axios from 'axios';

export default {
    name: 'RepositoryEdit',

    data() {
        return {
            editData:{
            name:'',
            url:'',
            id:''
            }
        };
    },

    mounted() {
        
    },

    methods: {
        save(){
            axios({method:"post",url:"/svnrepository",data:this.editData,headers: {
                        'Content-Type': 'multipart/form-data'//含有附件的表单提交的Content-Type
                        //'Content-Type': 'application/x-www-form-urlencoded'//普通表单提交的Content-Type
                    },}).then(
                ((response)=>{
                    this.$message({message:"保存成功",type:"success"})
                })
            ).catch((err)=>{
                    console.log(err);
                })
        }
    },
};
</script>

<style lang="scss" scoped>

</style>