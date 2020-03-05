<template>
  <div class="createCategory">
    <slider-box title="Add a New Category">
      <text-input label="Category" v-model="categoryName" />
      <info-message v-if="error || success" :message="error || success" />
      <button @click="addCategory">Add</button>
    </slider-box>
  </div>
</template>

<script>
  import InfoMessage from '../atoms/InfoMessage';
  import SliderBox from '../atoms/SliderBox';
  import TextInput from '../atoms/TextInput';
  import {mapState} from 'vuex';

  export default {
    name: 'CreateCategory',
   components: {
     InfoMessage,
     SliderBox,
     TextInput
    },
    data() {
      return {
        categoryName: null,
        newCategory: false,
        error: false,
        success: false
      }
    },
    methods: {
      addCategory() {
        this.$store.dispatch('addNewCategory', {description: this.categoryName})
          .then((response) => {
            console.dir(response);
           if(response.status == 500) {
          this.error = response.data.message;
            setTimeout(() => {
            this.error = false;
          }, 3000)
        } else if (response.status !== 200) {
          this.error = response.data.message;
          setTimeout(() => {
            this.error = false;
          }, 3000)
        } else {
          this.success = "Success!";
          setTimeout(() => {
            this.success = false;
          }, 3000)
        }
      });
    }
  },
    computed: {
      ...mapState([
        'allCategories'
      ])
    },
  }

</script>

<style scoped>
  .createCategory {
    border: 1px solid #ccc;
    padding: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    background: white;
  }

</style>