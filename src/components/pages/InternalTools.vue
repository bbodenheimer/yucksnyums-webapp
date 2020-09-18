<template>
  <div class="internal-tools">
    <h2>Internal Tools</h2>
    <create-category />
    <create-food />
    <create-preference />
  </div>
</template>

<script>
  import CreateCategory from '../organisms/CreateCategory';
  import CreateFood from '../organisms/CreateFood';
  import CreatePreference from '../organisms/CreatePreference';

  export default {
    name: 'InternalTools',
    components: {
      CreateCategory,
      CreateFood,
      CreatePreference
    },
    data() {
      return {
        food: null,
        category: null,
        preference: null
      };
    },
    created() {
      this.$store.dispatch('getAllCategories');
    }
  };
</script>

<style>
  .internal-tools {
    width: 55%;
    margin: 5% auto;
    background: #f5f5f5;
    padding: 30px;
    border-radius: 5px;
  }

  h2 {
    margin-bottom: 20px;
  }

  button {
    background: linear-gradient(black, #4a4a4a);
    border: 0;
    color: white;
    padding: 10px;
    border-radius: 3px;
    font-weight: bold;
    outline: none;
    width: 60%;
    margin-top: 15px;
  }

  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
