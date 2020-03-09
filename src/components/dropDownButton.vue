<template>
  <div class="drop-down-button">
    <label>Cameras</label>
    <input
      type="button"
      :disabled="dropDownBtnDisable"
      @click="handleClick"
      :value="selectedResult">
  </div>
</template>

<script>
export default {
  name: 'DropDownButton',
  props: {
    fieldsSelectedCount: {
      type: Number,
      required: true,
    },
    dropDownBtnDisable: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    handleClick () {
      this.$emit('click');
    },
  },
  computed: {
    selectedResult () {
      if (this.fieldsSelectedCount) {
        return `${this.fieldsSelectedCount} selected`;
      }
      return 'Filter selection';
    }
  }
};
</script>

<style <style lang="scss" scoped>
  .drop-down-button {
    width: 150px;
    max-width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      align-items: baseline;
    }

    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 5px;
    }
    input {
      width: 100%;
      font-size: 1rem;
      padding-left: 5px;
      height: 50px;
      border-radius: 3px;
      border: none;

      &::placeholder {
        color: #8b8b8b91;
      }
    }

    &::after{
      position: absolute;
      content: " \25bc";
      top: 42px;
      right: 0px;
      height: 20px;
      width: 20px;
    }

  }
</style>
