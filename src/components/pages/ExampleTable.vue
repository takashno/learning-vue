<template comments>
  <main class="col-md-9" style="padding:30px;">
    <div class="row">
      <div class="col-md-12 text-left">
        <h2>Example&nbsp;Table</h2>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ExampleTable',
  mounted () {
    this.$store.state.menu = 'table'
  }
}
</script>

<style scoped>

</style>
