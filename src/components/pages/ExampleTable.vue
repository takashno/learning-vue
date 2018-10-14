<template comments>
  <main class="col-md-9" style="padding:30px;">
    <article>
      <div class="row">
        <div class="col-md-12 text-left">
          <h2>Example&nbsp;Table</h2>
          <small>
            Bootstrap4の「Table&nbsp;Components」を利用したテーブルの例。<br/>
            プロフィール管理システムを模したサンプルデータとなる。<br/>
            Bootstrap4自体のドキュメントは<a href="https://getbootstrap.com/docs/4.1/content/tables/">こちら</a>。<br/>
            このサンプルでは、Bootstrap4をVueで利用するためのBootstrap-Vueを利用している。<br/>
            シンプルにBootstrapを利用する方法とは全く異なるため、きちんと<a href="https://bootstrap-vue.js.org/docs/components/table">ドキュメント</a>を確認する必要がある。<br/>
            <br/>
          </small>
          <b-table sortable border striped hover :busy.sync="isBusy" :items="fetchData" :fields="fields"></b-table>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
var Client = require('node-rest-client').Client
var client = new Client()
export default {
  name: 'ExampleTable',
  data () {
    return {
      fields: {
        name: {
          label: '氏名',
          sortable: false
        },
        contact_number: {
          label: '電話番号',
          sortable: true
        },
        mail_address: {
          label: 'メールアドレス',
          sortable: true
        }
      },
      items: null,
      loading: false,
      error: null
    }
  },
  mounted () {
    this.$store.state.menu = 'table'
  },
  methods: {
    fetchData (ctx) {
      client.get('http://localhost:3000/api/profiles',
        function (data, response) {
          // parsed response body as js object
          console.log(data)
          // raw response
          console.log(response)
        })
      return [
        {
          isActive: true,
          age: 40,
          first_name: 'Dickerson',
          last_name: 'Macdonald',
          address: {country: 'USA', city: 'New York'}
        },
        {
          isActive: false,
          age: 21,
          first_name: 'Larsen',
          last_name: 'Shaw',
          address: {country: 'Canada', city: 'Toronto'}
        },
        {
          isActive: false,
          age: 89,
          first_name: 'Geneva',
          last_name: 'Wilson',
          address: {country: 'Australia', city: 'Sydney'}
        },
        {
          isActive: true,
          age: 38,
          first_name: 'Jami',
          last_name: 'Carney',
          address: {country: 'England', city: 'London'}
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
