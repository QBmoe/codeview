<template>
  <div class="container">
    <Category :categorydata="foods" title="美食">
      <ul>
        <li v-for="datatext in foods">{{ datatext }}</li>
      </ul>
    </Category>
    <Category title="游戏">
      <ul>
        <li v-for="datatext in games">{{ datatext }}</li>
      </ul>
    </Category>
    <Category title="动画">
      <ul>
        <li v-for="datatext in films">{{ datatext }}</li>
      </ul>
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