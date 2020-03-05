<template>
  <p v-if="message" :class="[isError ? 'error' : 'success']">{{ message }}</p>
</template>

<script>
  export default {
    name: 'InfoMessage',
    props: {
      message: {
        type: String,
        default: ''
      },
      isError: {
        type: Boolean,
        default: false
      }
    }
  }
</script>

<style scoped>
  p {
    font-weight: bold;
  }
  .error {
    color: red;
  }
  .success {
    color: darkgreen;
  }
</style>