<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/class">Danh sách lớp</router-link>
      <router-link to="/student">Danh sách học sinh</router-link>
    </nav>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 900px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  color: #2c3e50;
}

nav {
  margin-top: 25px;
  padding: 30px 0px;
  font-size: 20px;
  text-decoration: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding-right: 90px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
