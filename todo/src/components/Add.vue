<template>
    <form @submit="add">
    <input type="text" v-model="item" name="item" >
    <button type="submit">add</button>
    </form>
</template>

<script>
export default {
    name:'Add', 
    data(){
        return{
            item: ''
        }
    },
    methods:{
        add(e){
            e.preventDefault()
            this.$emit('addTodo', {item:this.item, completed:false, id:Date.now()})
            this.item = ''
        }
    }
}
</script>

<style>

</style>
