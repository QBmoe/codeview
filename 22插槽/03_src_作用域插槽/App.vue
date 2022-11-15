<template>
  <div class="container">
    <Category :categorydata="foods" title="美食">
      <template slot="center" scope="{foods}">
      <ul slot="center" >
        <li v-for="datatext in foods">{{ datatext }}</li>
      </ul>
      </template>
    </Category>
    <Category title="美食">
      <template slot="center" scope="{foods}">
        <ol slot="center" style="color: red">
          <li v-for="datatext in foods">{{ datatext }}</li>
        </ol>
      </template>
    </Category>
    <Category title="美食">
      <template slot="center" scope="{foods}">
        <div slot="center" >
          <h3 v-for="datatext in foods">{{ datatext }}</h3>
        </div>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: "App",
  components: {Category},
  data() {
    return {
      foods: ['火锅', '蛋糕', '小贝', '牛排'],
      games: ['魔兽', 'LOL', 'DOTA', 'NOM'],
      films: ['《火影》', '《死神》', '《海贼》', '《柯南》']
    }
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>