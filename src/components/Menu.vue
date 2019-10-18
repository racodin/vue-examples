<template>
  <div id="menu">
    <router-link to="/">Home</router-link>
    <router-link to="/markdown-editor">Markdown Editor</router-link>
    <router-link to="/github-commits">GitHub Commits</router-link>
    <router-link to="/grid-component">Grid Component</router-link>
    <router-link to="/tree-view">Tree View</router-link>
    <router-link to="/svg-graph">SVG Graph</router-link>
    <router-link to="/modal-component">Modal Component</router-link>
    <router-link to="/elastic-header">Elastic Header</router-link>
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style lang="scss" scoped>
#menu {
  a {
    display: block;
    padding: 10px 20px;
    font-size: 14px;
    color: #666;
    text-align: left;
    &:hover {
      background-color: #ddd;
      color: black;
    }
    &.router-link-exact-active {
      font-weight: 600;
      color: black;
      letter-spacing: -0.03rem;
      background-color: #ddd;
    }
  }
}
</style>