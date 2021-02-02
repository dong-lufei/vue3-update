<template>
  <div class="bar1">
    <div class="item" v-for="item in bars" :key="item.country">
      <label>{{ item.country }}</label>
      <div
        class="bar"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
      <div class="value">{{ item.value }}</div>
    </div>
  </div>
</template>
<script>
import useGdp from "../composition/useGdp";
import { computed } from "vue";
export default {
  props: ["gdp"],
  setup(props) {
    const gdp = computed(() => props.gdp);
    return {
      ...useGdp(gdp, 400),
    };
  },
};
</script>
<style scoped>
.bar1 {
  width: 500px;
  margin: 3em;
  border-left: 1px solid #333;
  box-sizing: border-box;
}
.item {
  position: relative;
  display: flex;
  height: 35px;
  margin: 1em 0;
  line-height: 35px;
}
.bar {
  flex: 0 0 auto;
  width: 100px;
  height: 100%;
  margin-right: 1em;
}
.item label {
  position: absolute;
  left: -50px;
}
.value {
  flex: 0 0 auto;
}
</style>
