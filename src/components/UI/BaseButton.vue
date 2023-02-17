<template>
  <button :type="type" :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ['type', 'mode'],
};
</script>
<style scoped>
button {
  display: flex;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #11005c;
  border-radius: 10px;
  border: 1px solid #11005c;
  color: white;
  cursor: pointer;
  margin: 10px;
}

button:hover,
button:active {
  background-color: #1c009b;
  border-color: #1c009b;
}

.flat {
  background-color: transparent;
  color: #11005c;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>
