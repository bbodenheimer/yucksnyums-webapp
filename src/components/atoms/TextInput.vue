
<script>
  export default {
    name: 'TextInput',
    props: {
      label: {
        type: String,
        default: ''
      },
      value: {
        type: [Number, String],
        default: null
      }
    },
    data() {
      return {
        inputValue: this.value,
        isActive: false
      };
    },
    watch: {
      inputValue(val) {
        this.$emit('input', val);
      },
      value() {
        this.inputValue = this.value;
      }
    }
  };
</script>

<template>
  <div class="infoInput" :class="{active: isActive || inputValue}">
    <label for="inputElem">{{ label }}</label>
    <input v-model="inputValue" id="inputElem" @focus="isActive = true" @blur="isActive = false" v-on:keyup.enter="$emit('enter')">
  </div>
</template>

<style scoped>
  .infoInput {
    border: solid 1px #e8e8e8;
    padding: 3px 9px;
    background: white;
    height: 42px;
    border-radius: 5px;
    margin: 10px 0;
    position: relative;
  }

  .infoInput input {
    border: none;
    font-size: 16px;
    margin: 14px 0 0;
    outline: 0;
    background: transparent;
    width: 100%;
  }
  label {
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    transform-origin: top left;
    transform: translate(0, 9px) scale(1);
    transition: all .1s ease-in-out;
    pointer-events: none;
    color: #666;
  }
  .infoInput.active label {
    transform: translate(0, 2px) scale(.65);
    color: darkgrey;
    font-weight: normal;
  }

  .help-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.8);
    z-index: 2;
  }
</style>