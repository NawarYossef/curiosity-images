<template>
  <div class="header">
    <h1>{{ roverName }} Images</h1>
    <ul>
      <li>Launched: {{ launchDate }}</li>
      <li>Landed: {{ landingDate }}</li>
      <li>Max Sol: {{ solMaxNumber }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    launchDate: {
      type: String,
      required: true,
    },
    landingDate: {
      type: String,
      required: true,
    },
    solMaxNumber: {
      type: Number,
      required: true,
    },
    roverName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style <style lang="scss" scoped>

.header {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    align-items: baseline;
    ul {
      width: 450px;
      max-width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  h1 {
    margin: 0px;
    font-size: 1.5rem;
  }
  ul {
    padding: 0px;
    margin: 0px;
    li {
      list-style-type: none;
    }
  }
}
</style>
