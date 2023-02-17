<template>

  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="name">Name</label>
        <input id="name" name="name" type="text" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="member">Member </label>
        <textarea
          id="member"
          name="member"
          rows="3"
          ref="descInput"
        ></textarea>
      </div>
     
      <base-button>Add Resource</base-button>
    </form>
  </base-card>
</template>

<script>

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
