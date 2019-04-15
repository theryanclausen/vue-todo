<template>
  <div>
    <h1>{{todo.item}}</h1>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"],
  created() {
    console.log(this.todo);
  }
};
</script>

<style>
</style>
