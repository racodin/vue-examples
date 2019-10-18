<template>
  <li>
    <div :class="{bold: isFolder}" @click="toggle" @dblclick="changeType">
      {{model.name}}
      <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <Item class="item" v-for="model in model.children" :model="model" :key="model.id" />
      <li class="add" @click="addChild">+</li>
    </ul>
  </li>
</template>

<script>
import Vue from "vue";
export default {
  name: "Item",
  props: {
    model: Object
  },
  data() {
    return {
      open: false
    };
  },
  computed: {
    isFolder() {
      return this.model.children && this.model.children.length;
    }
  },
  methods: {
    toggle() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType() {
      if (!this.isFolder) {
        Vue.set(this.model, "children", []);
        this.addChild();
        this.open = true;
      }
    },
    addChild() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  font-family: Menlo, Consolas, monospace;
  color: #444;
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>