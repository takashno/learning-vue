<!-- Template部 -->
<template comments>
  <b-navbar toggleable="md" type="dark" variant="secondary">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand to="/">SampleVueApp</b-navbar-brand>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <!-- exactを指定することで、activeクラスが付与されることを防ぐ -->
        <!-- https://bootstrap-vue.js.org/docs/reference/router-links/ -->
        <b-nav-item to="/" exact>
          Index
        </b-nav-item>
        <b-nav-item to="/form">
          Form
        </b-nav-item>
        <b-nav-item to="/table">
          Table
        </b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<!-- Script部 -->
<script>
export default {
  name: 'GlobalHeader'
}
</script>

<!-- CSS部 -->
<style scoped>
</style>
