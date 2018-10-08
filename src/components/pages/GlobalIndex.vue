<template comments>
  <main class="col-md-9" style="padding:30px;">
    <div class="row">
      <div class="col-md-12 text-left">
        <h2>Example&nbsp;Index</h2>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'GlobalIndex',
  mounted () {
    this.$store.state.menu = 'index'
  }
}
</script>

<style scoped>

</style>
