<template>
  <div id="app">
    <div class="container">
      <Header/>
      <div class="wrapper">
        <Add v-on:addTodo="addTodos"/>
        <Todos :todos="todos" v-on:del="deleteItem" v-on:toggle="toggleComplete"/>
        <button @click='clearComplete'>Clear </button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Add from "./components/Add";
import Todos from "./components/Todos";

export default {
  name: "app",
  components: {
    Header,
    Todos,
    Add
  },
  data() {
    return {
      todos: [
        { id: 1, item: "be awesome", completed: true },
        { id: 2, item: "party", completed: false },
        { id: 3, item: "rule the world", completed: false }
      ]
    };
  },
  methods:{
    deleteItem(id){
      this.todos = this.todos.filter(todo => todo.id !==id)
    },
    toggleComplete(id){
      this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed:!todo.completed}: todo)
    },
    addTodos(todo){
      this.todos.push(todo)
    },
    clearComplete(){
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Playfair Display', Helvetica, Arial, sans-serif;
  width: 100%;
  background:  silver;
  min-height: 100vh;
  padding-top: 15px;

  }
    .container {
    margin: 0 auto;
    width: 500px;
    border-radius: 24px;
    border: 5px solid darkblue;
    background: #feffd1;}
    .wrapper {
      padding: 10px 25px;
    }

</style>

