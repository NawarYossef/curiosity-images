<template>
  <div class="form">
    <DayInput
      class="day-input"
      v-model="input"
      @input="inputHandle" />
    <div class="drop-down">
      <dropDownButton
        :drop-down-btn-disable="dropDownBtnDisable"
        :fields-selected-count="fieldsSelectedCount"
        @click="dropDownButtonToggle" />
      <dropDownMenu
        class="drop-down__menu"
        v-if="dropDownBtnClicked"
        v-on-clickaway="dropDownButtonToggle"
        :camera-names="cameraNames"
        :pre-selected-fields="selectedFields"
        @checked="handleSelectedFields" />
    </div>
  </div>
</template>

<script>
import DayInput from './DayInput';
import dropDownButton from './dropDownButton';
import dropDownMenu from './dropDownMenu';
import { mixin as clickaway } from 'vue-clickaway';

export default {
  name: 'SearchForm',
  props: {
    cameraNames: {
      type: Array,
      required: true,
    },
    dropDownBtnDisable: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    DayInput,
    dropDownButton,
    dropDownMenu,
  },
  mixins: [clickaway],
  data () {
    return {
      dropDownBtnClicked: false,
      input: '',
      selectedFields: [],
    };
  },
  computed: {
    fieldsSelectedCount () {
      return this.selectedFields.length;
    }
  },
  methods: {
    dropDownButtonToggle () {
      this.dropDownBtnClicked = !this.dropDownBtnClicked;
    },
    inputHandle (value) {
      this.resetFilterForm();
      this.$emit('input', value);
    },
    handleSelectedFields (value) {
      this.selectedFields = value;
      this.$emit('selected', this.selectedFields);
    },
    resetFilterForm () {
     this.selectedFields = [];
     this.$emit('selected', this.selectedFields);
    }
  },
};
</script>

<style <style lang="scss" scoped>
  .form {
    position: relative;
    padding: 20px 0px;
    background-color: #808080ad;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
      padding: 20px;
      flex-direction: row;
    }
  }

  .drop-down {

    @media only screen and (max-width: 765px) {
      margin-top: 20px;
    }

    @media only screen and (min-width: 768px) {
      order: -1;
      margin-right: 10px;
    }

    &__menu {
      box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3);
      background-color: #ffffff;
      padding: 10px 10px;
      position: absolute;
      width: 375px;
      left: 0;
      right: 0;
      margin: auto;
      top: 198px;
      border-radius: 3px;

      @media only screen and (min-width: 768px) {
        top: 104px;
        right: initial;
        left: 20px;
      }
    }
  }

  .day-input {
    max-width: 150px;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px) {
      align-items: baseline;
    }
  }
</style>
