<template>
  <base-card>
    <form @submit.prevent="submitUser">
      <div class="form-control">
        <label for="title">Name</label>
        <input id="title" name="title" type="text" v-model.trim="enteredName" />
      </div>

      <div class="form-control">
        <label for="work">Work</label>
        <input id="work" name="work" type="text" v-model.trim="enteredWork" />
      </div>
      <p v-if="invalidInput">
        One or more input fields are invalid. Please check your provided data.
      </p>
      <base-button>Add User</base-button>
    </form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      enteredWork: '',
      invalidInput: false,
    };
  },
  methods: {
    submitUser() {
      if (this.enteredName === '' || this.enteredWork === '') {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      fetch('https://company-6e75f-default-rtdb.firebaseio.com//surveys.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: this.enteredName,
          work: this.enteredWork,
        }),
      });

      this.enteredName = '';
      this.enteredWork = '';
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
