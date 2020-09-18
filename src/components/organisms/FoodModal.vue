<template>
  <div>
    <button @click="modalOpen=!modalOpen">
      {{ food.description }}
    </button>
    <div class="modal" v-if="modalOpen">
      <div class="card">
        <div class="rating-container">
          <div class="rating">
            <form class="rating-form">
              <icon-radio name="allergic" type="rating" family="pref" :scale="1" v-model="preference" />
              <icon-radio name="hate" type="rating" family="pref" :scale="2" v-model="preference" />
              <icon-radio name="dislike" type="rating" family="pref" :scale="3" v-model="preference" />
              <icon-radio name="neutral" type="rating" family="pref" :scale="4" v-model="preference" />
              <icon-radio name="like" type="rating" family="pref" :scale="5" v-model="preference" />
              <icon-radio name="love" type="rating" family="pref" :scale="6" v-model="preference" />
            </form>
            <p class="preference-selection" v-if="preference">Preference: {{ preference }}</p>
          </div>
        </div>
      </div>

      <br /><br /><br /><br />
      <p>Preparation:</p>
      <DropdownSelector>
      </dropdownselector>
      <p>Notes:</p>
      <TextInput>
      </TextInput>
      <button>Save</button>
    </div>
  </div>
</template>

<script>
  import DropdownSelector from '../atoms/DropdownSelector';
  import IconRadio from '../atoms/IconRadio.vue';
  import TextInput from '../atoms/TextInput';

  export default {
    name: 'FoodModal',
    components: {
      DropdownSelector,
      IconRadio,
      TextInput
    },
    data() {
      return {
        modalOpen: false,
        preference: ''
      };
    },
    props: {
      food: {
        type: Object,
        default: () => ({})
      }
    }
  };
</script>

<style scoped>
.preference-selection {
  text-transform: capitalize;
}
</style>
