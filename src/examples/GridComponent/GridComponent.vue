<template>
  <div id="demo">
    <form id="search">
      Search
      <input name="query" v-model="searchQuery" />
    </form>
    <Grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery" />
  </div>
</template>

<script>
let apiURL = "http://www.json-generator.com/api/json/get/chpUqPJRSG?indent=2";

import Grid from "./Grid";
export default {
  name: "GridComponent",
  components: {
    Grid
  },
  data() {
    return {
      searchQuery: "",
      gridColumns: ["name", "gender", "email", "phone", "address"],
      gridData: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      let xhr = new XMLHttpRequest();
      let self = this;
      xhr.open("GET", apiURL);
      xhr.onload = function() {
        self.gridData = JSON.parse(xhr.responseText);
      };
      xhr.send();
    }
  }
};
</script>

<style lang="scss" scoped>
#demo {
  padding: 20px 40px;
}
#search {
  margin-bottom: 20px;
  text-align: left;
  input {
    width: calc(100% - 60px);
    height: 30px;
    font-size: 16px;
  }
}
table {
  margin: 0 auto;
}
</style>