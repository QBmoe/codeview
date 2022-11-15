<template>
  <div>
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 30]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize">
    </el-pagination>
  <el-table :data="listData" border :highlight-current-row="true">
    <el-table-column type="index" label="序号" width="50"></el-table-column>
    <el-table-column label="分支名称" prop="name" min-width="100"></el-table-column>
    <el-table-column label="分支地址" prop="url" min-width="400"></el-table-column>
    <el-table-column label="操作" fixed="right">
      <template slot-scope="scope">
        <el-button type="primary" size="mini" @click="doEdit(scope.row.id)">编辑</el-button>
        <el-button type="danger" size="mini" @click="doDelete(scope.row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import axios from 'axios';


export default {
  name: "RepositoryList",
  data(){
    return {
      listData:[{number:850,name:'850分支',url:'xxxx/xxxxxx/dev'}],
      currentPage:1,
      pageSize:5,
      totalSize:0
    }
  },
  methods:{
    handleSizeChange(pageSize){
      this.currentPage = 1
      this.pageSize = pageSize
      this.query()
    },
    handleCurrentChange(currentPage){
      this.currentPage = currentPage
      this.query()
    },
    query(){
      axios.get(`/svnrepository/${this.currentPage}/${this.pageSize}`)
      .then(({data:res})=>{
        this.listData = res.records
        this.totalSize = res.total
        this.currentPage = res.current
      }).catch((err)=>{

      })
    },
    doEdit(id){
      this.$router.push({path:`/repositoryEdit/${id}`})
    },
    doDelete(id){

    }
  },
  mounted(){
    this.query()
  }
}
</script>

<style scoped>

</style>