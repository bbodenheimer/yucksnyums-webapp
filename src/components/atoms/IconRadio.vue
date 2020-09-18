<template>
  <label :for="family" @click="$emit('input', name)">
    <input
      type="radio"
      :name="family"
      :class="name"
      :id="name"
      :value="name"
      :checked="value == name"
    />
    <i :class="`${family} ${family}-${name} color-${scale}`"></i>
  </label>
</template>

<script>
  export default {
    name: 'IconRadio',
    props: {
      // This is the name of the individual button
      name: {
        type: String,
        required: true
      },
      // This is the family of buttons, also links together
      family: {
        type: String,
        required: true
      },
      // This is the color scale, the lower the number means a lower rating
      // If this isn't set, the default color will be used on click/hover
      scale: {
        type: Number,
        default: 0
      },
      // This gets set by v-model
      value: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style scoped lang="less">
[type=radio] {
  width: 0;
  height: 0;
  opacity: 0;
}

label {
  cursor: pointer;
}

i {
  color: lightslategrey;
  font-size: 37px;
}

i:focus, i:hover, input:checked ~ i {
  color: #2f4f4f;
  &.color-1 {
    color: #8b0000;
  }

  &.color-2 {
    color: #cf000f;
  }

  &.color-3 {
    color: darkorange;
  }

  &.color-4 {
    color: #696969;
  }

  &.color-5 {
    color: #00aa55;
  }

  &.color-6 {
    color: #9b59b6;
  }
}
</style>
