<template comments>
  <main class="col-md-9" style="padding:30px;">
    <div class="row">
      <div class="col-md-12 text-left">
        <h2>Example&nbsp;Table</h2>
        <b-table bordered striped hover :items="items"></b-table>
      </div>
    </div>
  </main>
</template>

<script>
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  {
    isActive: false,
    age: 89,
    first_name: 'Geneva',
    last_name: 'Wilson',
    _rowVariant: 'danger'
  },
  {
    isActive: true,
    age: 40,
    first_name: 'Thor',
    last_name: 'Macdonald',
    _cellVariants: { isActive: 'success', age: 'info', first_name: 'warning' }
  },
  { isActive: false, age: 29, first_name: 'Dick', last_name: 'Dunlap' }
]

export default {
  name: 'ExampleTable',
  data () {
    return {
      items: items
    }
  },
  mounted () {
    this.$store.state.menu = 'table'
  }
}
</script>

<style scoped>

</style>
