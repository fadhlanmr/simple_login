<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png" class="img-responsive" alt="can't load img">
      </b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="/"> Home</b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/dashboard">Dashboard</b-nav-item>
        <b-nav-item href="/login">Login</b-nav-item>
        <b-nav-item href="/register">Register</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<style>
.img-responsive {
    height: auto;
    width: auto;
    max-height: 30px;
    max-width: 30px;
}
</style>