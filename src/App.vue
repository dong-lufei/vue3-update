<template>
  <h1>2019 GDP Top 5</h1>
  <div class="container">
    <Bar1 :gdp="gdp" />
    <Bar2 :gdp="gdp" />
  </div>
  <div class="controls">
    <div class="item" v-for="item in gdp" :key="item.country">
      <label>{{ item.country }}</label>
      <input type="number" step="0.1" min="0" v-model="item.value" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Bar1 from "./components/Bar1.vue";
import Bar2 from "./components/Bar2.vue";

export default {
  components: {
    Bar1,
    Bar2,
  },
  setup() {
    const gdpRef = ref([]);
    async function fetchGDP() {
      gdpRef.value = await fetch("/api/gdp.json").then((resp) => resp.json());
    }
    fetchGDP();

    return {
      gdp: gdpRef,
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.controls {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1em;
}
.item {
  margin: 1em;
}
.item label {
  margin: 0 1em;
}
.item input {
  height: 26px;
  font-size: 14px;
}
h1 {
  text-align: center;
}
</style>
