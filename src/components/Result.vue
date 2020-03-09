<template>
  <div v-if="resultData.length">
    <ul>
      <li
        v-for="item in resultData"
        :key="item.id">
        <div>
          <h2>{{item.camera.full_name}}</h2>
          <p>Photos: {{item.rover.cameras.length}}</p>
          <h3>Sample Photo:</h3>
          <img :src="item.img_src" alt="No Photos Available">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: {
    resultData: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style <style lang="scss" scoped>
  ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 768px) {
      flex-flow: row wrap;
      align-items: center;
      justify-content: center;
    }

    &:first-child {
      margin-top: 0px;
    }

    li {
      list-style-type: none;
      background-color: #ffffff;
      width: 350px;
      max-width: 100%;
      height: 350px;
      border-radius: 15px;

        img {
          margin-top: 10px;
          max-width: 180px;
          max-height: 200px;
        }

      @media only screen and (max-width: 767px) {
        margin-top: 20px;
        padding: 20px 0px;
      }

      @media only screen and (min-width: 768px) {
        width: 250px;
        margin: 15px;
        padding: 10px 0px;
      }
    }
  }
  p, h3 {
    margin: 0px;
    margin-top: 20px;
  }

  h2 {
    margin: 0px;
    height: 70px;
  }
</style>
