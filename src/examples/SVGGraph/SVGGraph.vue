<template>
  <div id="demo">
    <!-- Use the component -->
    <svg width="200" height="200">
      <polygraph :stats="stats" />
    </svg>
    <!-- controls -->
    <div v-for="stat in stats" :key="stat.id">
      <label>{{stat.label}}</label>
      <input type="range" v-model="stat.value" min="0" max="100" />
      <span>{{stat.value}}</span>
      <button @click="remove(stat)" class="remove">X</button>
    </div>
    <form id="add">
      <input name="newlabel" v-model="newLabel" />
      <button @click="add">Add a Stat</button>
    </form>
    <pre id="raw">{{ stats }}</pre>
    <p style="font-size:12px">* input[type="range"] requires IE10 or above.</p>
  </div>
</template>

<script>
import Polygraph from "./Polygraph";
export default {
  name: "SVGGraph",
  components: {
    Polygraph
  },
  data() {
    return {
      newLabel: "",
      stats: [
        { label: "A", value: 100 },
        { label: "B", value: 100 },
        { label: "C", value: 100 },
        { label: "D", value: 100 },
        { label: "E", value: 100 },
        { label: "F", value: 100 }
      ]
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
      if (!this.newLabel) return;
      this.stats.push({
        label: this.newLabel,
        value: 100
      });
      this.newLabel = "";
    },
    remove(stat) {
      if (this.stats.length > 3) {
        this.stats.splice(this.stats.indexOf(stat), 1);
      } else {
        alert("Can't delete more!");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#demo {
  position: relative;
  padding: 40px;
}
label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 40px;
  left: 340px;
}
</style>