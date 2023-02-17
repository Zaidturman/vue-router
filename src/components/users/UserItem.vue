<template>
  <base-card>
    <h3>{{ name }}</h3>
    <div class="role" :class="roleClass">{{ role }}</div>
  </base-card>
</template>

<script>
export default {
  props: ['name', 'role'],
  computed: {
    roleClass() {
      if (this.role === 'Engineer') {
        return 'role--engineer';
      }
      if (this.role === 'Consultant') {
        return 'role--consultant';
      }
      return null;
    },
  },
};
</script>

<style scoped>
.users{
  display: flex;
}
.column {
  flex: 1;
}
li {
  list-style: none;
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

h3 {
  margin: 0.5rem 0;
}

.role {
  background-color: #ccc;
  color: #252525;
  padding: 0.25rem 1rem;
  display: inline-block;
}

.role--engineer {
  background-color: #c8c8ff;
  color: black;
}

.role--consultant {
  background-color: #ffb6cf;
  color: black;
}
</style>