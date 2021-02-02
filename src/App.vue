<template>
  <div id="nav">
    <!-- <a href="/" class="router-link-exact-active">Home</a> -->
    <router-link to="/" class="router-link-exact-active">Home页</router-link>
    |
    <!-- <a href="/about">About</a> -->
    <router-link to="/about">About页</router-link>
  </div>
  <router-view />
</template>

<style scoped>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-active {
  color: #42b983;
}
</style>
