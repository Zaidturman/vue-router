import { createApp } from 'vue';
import {createRouter , createWebHistory} from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import App from './App.vue';

const router =createRouter({
    history:createWebHistory() ,
    routes: [
        {
            path:'/team',
            name:'team',
            component: TeamList
        },
        {
            path:'/user',
            name:'user',
            component: UserList
        }
    ]
});

const app = createApp(App)
app.use(router)
app.mount('#app');
