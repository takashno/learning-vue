<template comments>
  <aside class="col-md-3" style="padding:30px;border: none;">
    <b-card-group>
      <b-card no-body header="<b>Sidebar&nbsp;Menu</b>">
        <b-list-group flush>
          <b-list-group-item v-bind:class="getMenuStyle('index')">
            <router-link to="/" v-bind:class="getLinkStyle('index')">
              Index
            </router-link>
          </b-list-group-item>
          <b-list-group-item v-bind:class="getMenuStyle('form')">
            <router-link to="/form" v-bind:class="getLinkStyle('form')">
              Form
            </router-link>
          </b-list-group-item>
          <b-list-group-item v-bind:class="getMenuStyle('table')">
            <router-link to="/table" v-bind:class="getLinkStyle('table')">
              Table
            </router-link>
          </b-list-group-item>
        </b-list-group>
      </b-card>
    </b-card-group>
  </aside>
</template>

<script>
export default {
  name: 'GlobalSidebar',
  methods: {
    getMenuStyle: function (target) {
      if (this.$store.state.menu === target) {
        return 'menu_active'
      } else {
        return ''
      }
    },
    getLinkStyle: function (target) {
      if (this.$store.state.menu === target) {
        return 'link_active'
      } else {
        return 'link_normal'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  card.rounded-0.border-0.menu_default {}
  .menu_normal {
    background: white;
  }
  .menu_active {
    background: #17a2b8;
  }
  .link_normal {
    text-decoration: none;
    color: #464e66;
  }
  .link_active {
    text-decoration: none;
    color: white;
  }
</style>
