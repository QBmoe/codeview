<template>
  <div>
    <Calculator></Calculator>
    <hr>
    <Person></Person>
  </div>
</template>

<script>
import Calculator from "@/components/Calculator";
import Person from "@/components/Person";

export default {
  name: "App",
  components: {Person, Calculator},

}
</script>

<style>

</style>