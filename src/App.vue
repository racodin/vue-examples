<template>
  <div id="app">
    <div id="nav"></div>
    <div id="side">
      <Menu />
    </div>
    <div id="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: "app",
  components: {
    Menu
  }
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100%;
}
a {
  text-decoration: none;
}
#app {
  height: 100%;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  position: relative;
  height: 45px;
  background-color: #222;
}
#side {
  position: relative;
  display: inline-block;
  width: 200px;
  height: calc(100% - 45px);
  background-color: #eee;
}
#container {
  display: inline-block;
  width: calc(100% - 200px);
  height: calc(100% - 45px);
  vertical-align: top;
  text-align: left;
  overflow: hidden;
  overflow-y: auto;
}
</style>
