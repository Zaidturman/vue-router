import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import TeamList from './components/teams/TeamsList.vue';
import UserList from './components/users/UsersList.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import AddTeam from './components/teams/AddTeam.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import AddUser from './components/users/AddUser.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/team',
    },
    {
      path: '/team',
      name: 'team',
      component: TeamList,
      children: [
        {
          path: '/addTeam',
          component: AddTeam,
        },
        {
          path: '/teamMember',
          component: TeamMember,
          props:true
        },
      ],
    },
    {
      path: '/user',
      name: 'user',
      component: UserList,
      children: [
        {
          path: '/addUser',
          component: AddUser,
        },
      ],
    },
  ],
});

const app = createApp(App);
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.use(router);
app.mount('#app');
