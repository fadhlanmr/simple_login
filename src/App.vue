<template>
  <div id="app">
    <Navigation />
    <b-card class="text-center">
      <div class="text-secondary">
        <router-view />
      </div>
    </b-card>
  </div>
</template>

<script>
  import Navigation from './components/Nav.vue'
  export default {
    name: 'App',
    components: {
      'Navigation': Navigation
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
