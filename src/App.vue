<template>
  <div id="app">
    <Nav />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>


<script>
import Nav from "./components/Nav";
export default {
  name: "app",
  components: {
    Nav
  }
};
</script>



<style>
#app {
  width: 88%;
  margin: 0 auto;
}
</style>
