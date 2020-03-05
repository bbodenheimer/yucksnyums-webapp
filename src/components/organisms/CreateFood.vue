<template>
  <div class="createFood">
    <slider-box title="Add a New Food">
      <text-input label="Food" v-model="foodName" />
      <dropdown-selector :options="allCategories" v-model="category" />
      <info-message v-if="error || success" :message="error || success" />
      <button @click="addFood">Add</button>
    </slider-box>
  </div>
</template>

<script>
  import DropdownSelector from '../atoms/DropdownSelector';
  import InfoMessage from '../atoms/InfoMessage';
  import SliderBox from '../atoms/SliderBox';
  import TextInput from '../atoms/TextInput';
  import { mapState } from 'vuex'
  
  export default {
    name: 'CreateFood',
    components: {
      DropdownSelector,
      InfoMessage,
      SliderBox,
      TextInput
    },
    data() {
      return {
        foodName: null,
        category: null,
        newFood: false,
        error: false,
        success: false
      }
    },
    methods: {
      addFood() {
        this.$store.dispatch('addNewFood', {description: this.foodName, category: this.category})
        .then((response) => {
        if (response.status == 500) {
          this.error = "Duplicate Value";
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
        /**this right? */
        'allCategories'
      ])
    },
  }
</script>

<style scoped>
  .createFood {
    border: 1px solid #ccc;
    padding: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    background: white;
  }
</style>