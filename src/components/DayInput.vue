<template>
  <div class="day-input">
    <label>Sol</label>
    <input
      v-debounce:1000ms="emitUserInput"
      type="text"
      :value="value"
      :placeholder="10"
      @input="storeInput($event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'DayInput',
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      inputVal: '',
    };
  },
  methods: {
    storeInput (value) {
      this.inputVal = value;
    },
    emitUserInput () {
      this.$emit('input', this.inputVal);
    },
  },
};
</script>

<style <style lang="scss" scoped>
    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 5px;
    }
    input {
      font-size: 1rem;
      padding-left: 5px;
      width: 30x;
      height: 50px;
      border-radius: 3px;
      border: none;

      &::placeholder {
        color: #8b8b8b91;
      }
    }
</style>
