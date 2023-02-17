<template>
  <router-link to="/addUser">
    <base-button>Add User</base-button>
  </router-link>
  <router-view></router-view>
  <base-button @click="loadExperiences">Uplode</base-button>
  <p v-if="isLoding">Loding...</p>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :role="user.work"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  data(){
    return{
      isLoding: false,
      users:[]
    }
  },
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    loadExperiences() {
      this.isLoding = true;
      fetch('https://company-6e75f-default-rtdb.firebaseio.com/surveys.json')
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((data) => {
          this.isLoding = false;

          const users = [];
          for (const id in data) {
            users.push({
              id: id,
              name: data[id].name,
              work: data[id].work,
            });
          }
          this.users = users;
        });
    },
  },
  mounted() {
    this.loadExperiences();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
