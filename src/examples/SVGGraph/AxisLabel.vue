<template>
  <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>

<script>
import { Utils } from "./Utils";
export default {
  name: "AxisLabel",
  props: {
    stat: Object,
    index: Number,
    total: Number
  },
  mixins: [Utils],
  computed: {
    point() {
      return this.valueToPoint(+this.stat.value + 10, this.index, this.total);
    }
  }
};
</script>

<style lang="scss" scoped>
text {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 10px;
  fill: #666;
}
</style>