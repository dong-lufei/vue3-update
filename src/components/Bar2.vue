<template>
  <div class="bar2">
    <div class="item" v-for="item in bars" :key="item.country">
      <label>{{ item.country }}</label>
      <div
        class="bar"
        :style="{ background: item.color, width: item.size + 'px' }"
      ></div>
    </div>
  </div>
</template>
<script>
import useGdp from "../composition/useGdp";
import { toRef } from "vue";

export default {
  props: ["gdp"],
  setup(props) {
    // const gdp = computed(() => props.gdp);
    return {
      ...useGdp(toRef(props, "gdp"), 600),
    };
  },
};
</script>

<style scoped>
.bar2 {
  position: relative;
  width: 600px;
  margin: 3em;
  box-sizing: border-box;
}
.bar2::before {
  content: "";
  position: absolute;
  left: 50%;
  width: 1px;
  height: 100%;
  background: #666;
}
.item {
  position: relative;
  justify-content: center;
  display: flex;
  height: 35px;
  line-height: 35px;
  margin: 1em 0;
  color: #fff;
}
.bar {
  flex: 0 0 auto;
  width: 100px;
  height: 100%;
  margin-right: 1em;
}
.item label {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}
</style>
