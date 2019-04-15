<template>
  <header>
    <h1>Here's what you gotta do!</h1>
          <!-- <nav>
        <router-link exact to='/'>list</router-link>
        <router-link to='/add'>add stuff</router-link>
      </nav> -->
  </header>
</template>

<script>

export default {
  name: "Header"
};
</script>

<style lang="less" scoped>
header {
    width:100%;
    border-bottom: 1px solid white;
  h1 {
    width: 100%;
    text-align: center;
  }
  // nav{
  //   margin: 0 auto;
  //   padding-bottom: 10px ;
  //   width:50%;
  //   display:flex;
  //   justify-content: space-evenly;
  //   a{
  //     text-decoration: none;
  //     &:hover{
  //       font-weight: bold;
  //     }
  //   }
  //   .router-link-active{
  //     font-weight: bold;
  //     text-decoration: underline;
  //   }
  // }
}
</style>


