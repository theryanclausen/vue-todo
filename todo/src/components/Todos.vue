<template>
  <div>
    <div :key="todo.id" v-for="todo in todos">
      <Todo :todo="todo"  v-on:del="$emit('del', todo.id)"  v-on:toggle="$emit('toggle', todo.id)"/>
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
