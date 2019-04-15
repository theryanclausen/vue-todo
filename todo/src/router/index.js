import Vue from 'vue'
import Router from 'vue-router'
import Todos from '@/components/Todos'
import Add from '@/components/Add'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Todos',
            component: Todos
        },
        {
            path: '/add',
            name: 'Add',
            component: Add

        }
    ]
})