<template>
  <div class="category-box">
    <div class="header" @click="openCat">
      <img :src="imgSrc" />
      <h3>{{ category.description }}</h3>
      <h3 class="indicator">{{ openStatus }}</h3>
    </div>
    <transition name="slide">
      <div class="inner" v-if="slide">
        <slot>
          <food-modal v-for="food in foods" :key="food.index" :food="food"></food-modal>
        </slot>
      </div>
    </transition>
  </div>
</template>

<script>
// TODO: Make whole thing clickable to expand
  import FoodModal from './FoodModal';

  export default {
    name: 'CategoryBox',
    data() {
      return {
        slide: false,
        imgSrc: require('../../assets/icons/' + this.category.icon),
        foods: null
      };
    },
    computed: {
      openStatus() {
        return this.slide ? '–' : '+';
      }
    },
    components: {
      FoodModal
    },
    props: {
      category: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      openCat() {
        this.slide = !this.slide;
        this.$store.dispatch('getFoodByCategory', this.category.id)
          .then((r) => {
            this.foods = r;
          });
      }
    }
  };
</script>

<style scoped>
  .btn {
    padding: 1px;
    border: 1px solid black;
    margin: 1px;
    font-size: 10px;
    width: 40px;
    border-radius: 25%;
  }
  .btn-select {
    padding: 5px;
    border: 1px solid lightgrey;
    margin: 5px;
    width: 130px;
  }
  .category-box {
    padding: 20px 15px;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin: 15px auto;
    width: 30%;
    text-align: left;
    cursor: pointer;
  }
  h3, img {
    display: inline-block;
  }
  h4 {
    width: 50px;
  }

  /* TODO: Fix icon cutoff??? */
  img {
    width: 44px;
    float: left;
    border: 1px solid grey;
    border-radius: 50%;
    padding: 10px;
    position: relative;
    left: -40px;
    top: -23px;
    background: white;
  }

  .indicator {
    float: right;
    margin: 0;
    font-size: 28px;
    font-weight: normal;
    line-height: 18px;
  }

  .inner {
    margin-top: 25px;
  }
</style>
