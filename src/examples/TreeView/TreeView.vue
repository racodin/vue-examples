<template>
  <div id="demo">
    <p>(You can double click on an item to turn it into a folder.)</p>

    <!-- the demo root element -->
    <ul>
      <Item class="item" :model="treeData" />
    </ul>
  </div>
</template>

<script>
import Item from "./Item";
export default {
  name: "TreeView",
  components: {
    Item
  },
  data() {
    return {
      treeData: {
        name: "My Tree",
        children: [
          { name: "hello" },
          { name: "wat" },
          {
            name: "child folder",
            children: [
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              },
              { name: "hello" },
              { name: "wat" },
              {
                name: "child folder",
                children: [{ name: "hello" }, { name: "wat" }]
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
#demo {
  padding: 20px 40px;
}
</style>