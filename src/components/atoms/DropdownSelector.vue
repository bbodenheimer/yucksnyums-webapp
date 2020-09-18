<template>
  <select v-model="selected" class="dropdown">
    <option value="-1" disabled selected>Preference</option>
    <option v-for="pref in getAllPreferences" :key="pref.index" :pref="pref">
    </option>
  </select>
</template>

<script>
  import {mapState} from 'vuex';
  export default {
    name: 'DropdownSelector',
    data() {
      return {
        selected: -1,
        pref: null
      };
    },
    computed: {
      ...mapState([
        'allCategories'
      ])
    },
    created() {
      this.$store.dispatch('getAllPreferences');
    },
    props: {
      options: {
        type: Array,
        default: () => []
      }
    },
    watch: {
      selected(newValue) {
        this.$emit('input', newValue);
      }
    }
  };
</script>

<style scoped>
  .dropdown {
    width: 100%;
    border: 1px solid #e8e8e8;
    padding: 16px 0;
    border-radius: 3px;
    margin-bottom: 15px;
    outline: none;
    font-size: 16px;
    color: #666;
  }
</style>
