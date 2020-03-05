<template>
  <div class="createPreference">
    <slider-box title="Add a New Preference">
      <text-input label="Preference" v-model="preferenceName" />
      <info-message v-if="error || success" :message="error || success" />
      <button @click="addPreference">Add</button>
    </slider-box>
  </div>
</template>

<script>
  import InfoMessage from '../atoms/InfoMessage';
  import SliderBox from '../atoms/SliderBox';
  import TextInput from '../atoms/TextInput';
  import { mapState } from 'vuex'

  export default {
  name: 'CreatePreference',
  components: {
    InfoMessage,
    SliderBox,
    TextInput
  },
  data() {
    return {
      preferenceName: null,
      error: false,
      success: false
    }
  },
  methods: {
    addPreference() {
      this.$store.dispatch('addNewPreference', {description: this.preferenceName})
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
      /** or allPreferences? */
      'allCategories'
    ])
  },  
}
</script>

<style scoped>
  .createPreference {
    border: 1px solid #ccc;
    padding: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    background: white;
  }
</style>