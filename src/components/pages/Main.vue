<template>
  <div class="categoryList">
    <CategoryBox :category="cat" v-for="cat in allCategories" :key="cat.description">
    </CategoryBox>
  </div>
</template>

<script>
  import {mapState} from 'vuex';
  import CategoryBox from '../organisms/CategoryBox';

  export default {
    name: 'Main',
    components: {
      CategoryBox
    },
    computed: {
      ...mapState([
        'allCategories'
      ])
    },
    created() {
      this.$store.dispatch('getAllCategories');
    }
  };

</script>

<style scoped>
.categories {
  color: green;
  background: white;
  transition-duration: .5s;
}
.categories:hover {
  background:gray;
}

.categoryList {
    border: 1px solid #ccc;
    padding: 30px;
    width: 80%;
    margin: 0 auto;
    border-radius: 3px;
    box-shadow: 1px 1px 3px black;
    background: white;
  }

</style>
