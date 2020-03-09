<template>
  <div v-if="cameraNames.length">
    <div class="filter-buttons">
      <button @click="handleSelection('all')">Select All</button>
      <button @click="handleSelection('clear')">Clear</button>
    </div>
    <ul>
      <li
        v-for="name in cameraNames"
        :key="name">
        <input
          v-model="checkedFields"
          type="checkbox"
          :value="name">
        <label>{{ name }}</label>
      </li>
    </ul>
  </div>
  <div v-else>
    <p>Please Type a Sol number</p>
  </div>
</template>

<script>
export default {
  name: 'DropDownMenu',
  props: {
    cameraNames: {
      type: Array,
      required: true,
    },
    preSelectedFields: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      checkedFields: [],
    };
  },
  mounted () {
    this.checkedFields = this.preSelectedFields;
  },
  methods: {
    handleSelection (type) {
      if (type === 'all') {
        this.checkedFields = this.cameraNames;
      } else {
        this.checkedFields = [];
      }
    },
  },
  watch: {
    checkedFields (value) {
      this.$emit('checked', value);
    },
  },
};
</script>

<style <style lang="scss" scoped>
  ul {
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    margin: 0px;
    padding: 0px;
    margin-top: 20px;

    li {
      display: flex;
      flex-direction: row;
      list-style-type: none;
      align-items: center;

      input {
        margin-right: 10px;
      }
    }
  }

  .filter-buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button {
      color: blue;
      border: 0px;
      padding: 0px;
      background: none!important;
      font-size: 1rem;
    }
  }
</style>
