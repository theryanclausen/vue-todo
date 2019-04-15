<template>
  <div id="app">
    <div class="todo">
    <Header/>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import {less} from 'less-loader'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="less">
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
#app {
  width:100%;
  background: linear-gradient(to bottom right,darkred, silver, darkred);
  min-height: 100vh;
  padding-top:15px;
  .todo{ 
    margin: 0 auto;
    width:500px;
    border-radius:24px;
    border:5px solid darkblue;
    background: #FEFFD1;
  }
}
</style>

