<template>
  <g>
    <polygon :points="points"></polygon>
    <circle cx="100" cy="100" r="80"></circle>
    <AxisLabel
      v-for="(stat, index) in stats"
      :key="stat.id"
      :stat="stat"
      :index="index"
      :total="stats.length"
    />
  </g>
</template>

<script>
import { Utils } from "./Utils";
import AxisLabel from "./AxisLabel";
export default {
  name: "PolyGraph",
  components: {
    AxisLabel
  },
  mixins: [Utils],
  props: {
    stats: Array
  },
  computed: {
    // a computed property for the polygon's points
    points() {
      var total = this.stats.length;
      return this.stats
        .map((stat, i) => {
          var point = this.valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        })
        .join(" ");
    }
  }
};
</script>

<style lang="scss" scoped>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}
</style>