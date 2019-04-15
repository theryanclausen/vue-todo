<template>
  <div id="app">
    <div class="container">
      <Header/>
      <div class="wrapper">
        <Add/>
        <Todos :todos="todos"/>
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
        { id: 1, item: "be awesome", complete: true },
        { id: 2, item: "party", complete: false },
        { id: 3, item: "rule the world", complete: false }
      ]
    };
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  background: linear-gradient(to bottom right, darkred, silver, darkred);
  min-height: 100vh;
  padding-top: 15px;
  .container {
    margin: 0 auto;
    width: 500px;
    border-radius: 24px;
    border: 5px solid darkblue;
    background: #feffd1;
    .wrapper {
      padding: 10px 25px;
    }
  }
}
</style>

