<template>
  <div>
    <OutagePage v-if="outage" />
    <div v-else>
      <Header
        :rover-name="roverName"
        :landing-date="landingDate"
        :launch-date="launchDate"
        :sol-max-number="solMaxNumber" />
      <SearchForm
        :camera-names="cameraNames"
        :drop-down-btn-disable="dropDownBtnDisable"
        @input="handleDayInput"
        @selected="handleSelectedCameraTypes" />
      <LoadingSpinner v-if="loading" />
      <Result :result-data="filteredResultData" />
    </div>
  </div>
</template>

<script>
import * as api from '@/modules/api';
import Header from '@/components/Header';
import LoadingSpinner from '@/components/LoadingSpinner';
import OutagePage from '@/components/OutagePage';
import Result from '@/components/Result';
import SearchForm from '@/components/SearchForm';

export default {
  name: 'HomePage',
  components: {
    SearchForm,
    Result,
    OutagePage,
    LoadingSpinner,
    Header,
  },
  data () {
    return {
      dayInput: '',
      apiPhotosData: [],
      cameraNames: [],
      selectedCameraTypes: [],
      landingDate: '',
      launchDate: '',
      roverName: '',
      solMaxNumber: 0,
      outage: false,
      loading: false,
      dropDownBtnDisable: false,
    };
  },
  computed: {
    filteredResultData () {
      if (this.selectedCameraTypes.length) {
        return this.apiPhotosData.filter(obj => this.selectedCameraTypes.includes(obj.camera.full_name));
      }
      return this.apiPhotosData;
    },
  },
  async mounted () {
    this.submit('initial');
  },
  methods: {
    getCameraNames () {
      return [...new Set(this.apiPhotosData.map(obj => obj.camera.full_name))];
    },
    handleSelectedCameraTypes (value) {
      this.selectedCameraTypes = value;
    },
    handleDayInput (value) {
      this.dayInput = value;
      this.submit('input');
    },
    async submit (type) {
      this.resetResultData();
      this.activateLoader();
      try {
        type === 'input' ? await this.storeApiData() : await this.setInitialData();
        this.deactivateLoader();
      } catch (err) {
        this.outage = true;
        throw err;
      }
    },
    async storeApiData () {
      const searchData = await api.getSearchData(this.dayInput);
      this.apiPhotosData = searchData.data.photos;
      this.cameraNames = this.getCameraNames();
    },
    async setInitialData () {
      const searchData = await api.getInitialData(this.dayInput);
      this.roverName = searchData.data.rover.name;
      this.landingDate = searchData.data.rover.landing_date;
      this.launchDate = searchData.data.rover.launch_date;
      this.solMaxNumber = searchData.data.rover.max_sol;
    },
    activateLoader () {
      this.loading = true;
      this.dropDownBtnDisable = true;
    },
    deactivateLoader () {
      this.loading = false;
      this.dropDownBtnDisable = false;
    },
    resetResultData () {
      this.apiPhotosData = [];
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style <style lang="scss">
  body {
    margin: 0px;
    background-color: #66a3cf;
  }
</style>
