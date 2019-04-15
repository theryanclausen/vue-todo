<template>
  <div>
    <p :class="{'complete':todo.completed}" @click="$emit('toggle', todo.id)">{{todo.item}}</p>
    <button @click="$emit('del', todo.id)">X</button>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todo"]
};
</script>

 <style lang="less" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 10px 0;
    cursor: pointer;
  }
  .complete{
      text-decoration: line-through;
      text-decoration-color: red;
  }
  button {
    background: unset;
    border-style: none;
    padding: 3px 5px;
    border-radius: 50%;
    border:2px solid black;
    font-weight: bold;
    &:hover{
        background:whitesmoke;
    }
  }
}
</style>

