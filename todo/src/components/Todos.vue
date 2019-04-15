<template>
  <div>
    <div :key="todo.id" v-for="todo in todos">
      <Todo :todo="todo"/>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo";
export default {
  name: "Todos",

  components: {
    Todo
  },
  props: ["todos"]
};
</script>

<style>
</style>
