<template>
  <div>
    <div class="header" @click="slide = !slide">
      <h4>{{ title }}</h4>
      <img :src="imageSrc" />
    </div>
    <transition name="slide">
      <div class="inner" v-if="slide">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'SliderBox',
    data() {
      return {
        slide: false
      }
    },
    computed: {
      imageSrc() {
        return this.slide ? require("../../assets/circle-minus.svg") : require("../../assets/circle-plus.svg");
      }
    },
    props: {
      title: {
        type: String,
        default: ''
      }
    },
  }
</script>

<style scoped>
  h4, img {
    display: inline-block;
  }

  img {
    height: 20px;
    vertical-align: bottom;
    margin-left: 20px;
  }

  .header {
    cursor: pointer;
  }

  .inner {
    margin-top: 25px;
  }

  .header:hover h4 {
    text-decoration: underline;
  }
</style>