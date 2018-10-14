<!-- Template部 -->
<template comments>
  <main class="col-md-9" style="padding:30px;">
    <article>
    <div class="row">
      <div class="col-md-12 text-left">
        <h2>Example&nbsp;Form</h2>
        <b-alert :show="dismissCountDown"
                 dismissible
                 variant="success"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
          <p>{{ $t("form.messages.normal_result_message") }} {{dismissCountDown}} seconds...</p>
          <b-progress variant="success"
                      :max="dismissSecs"
                      :value="dismissCountDown"
                      height="4px">
          </b-progress>
        </b-alert>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <!--- Name -->
          <label>{{ $t("form.name") }}:</label>
          <b-form-group id="nameGroup" label-for="name">
            <b-form-input id="name" type="text" v-model="form.name" required >
            </b-form-input>
          </b-form-group>
          <!--- Email -->
          <label>{{ $t("form.mail_address") }}:</label>
          <b-form-group id="mailaddressGroup" label-for="mailaddress">
            <b-form-input id="mailaddress" type="email" v-model="form.mail_address" required/>
          </b-form-group>
          <!-- ContactNumber -->
          <label>{{ $t("form.contact_number") }}:</label>
          <b-form-group id="contactNumberGroup" label-for="contact_number">
            <b-form-input  id="contact_number" type="text" required v-model="form.contact_number" />
          </b-form-group>
          <!-- ZipCode -->
          <label>{{ $t("form.zip_code") }}:</label>
          <b-form-group id="zipCodeGroup" label-for="zip_code">
            <b-form-input  id="zip_code" type="text" required v-model="form.zip_code" />
          </b-form-group>
          <!-- Address -->
          <label>{{ $t("form.address") }}:</label>
          <b-form-group id="addressGroup" label-for="address">
            <b-form-input  id="address" type="text" required v-model="form.address"/>
          </b-form-group>
          <b-button type="submit" variant="info">{{ $t("form.submit")}}</b-button>
          <b-button type="reset" variant="warning">{{ $t("form.reset")}}</b-button>
        </b-form>
      </div>
    </div>
    <b-btn @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-btn>
    </article>
  </main>
</template>

<!-- Script部 -->
<script>
var Client = require('node-rest-client').Client
var client = new Client()
export default {
  data () {
    return {
      form: {
        name: null,
        contact_number: null,
        mail_address: null,
        zip_code: null,
        address: null
      },
      show: true,
      dismissSecs: 10,
      dismissCountDown: 0
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      // POSTするデータの作成
      var args = {
        data: JSON.stringify(this.form),
        headers: { 'Content-Type': 'application/json' }
      }
      // POST
      client.post('http://localhost:3000/api/profiles', args,
        function (data, response) {
          this.$router.push({ path: '/' })
        })
      this.dismissCountDown = this.dismissSecs
    },
    // フォームリセット処理
    onReset (evt) {
      evt.preventDefault()
      this.form.mail_address = null
      this.form.name = null
      this.form.contact_number = null
      this.address = null
      this.show = false
      this.$nextTick(() => { this.show = true })
    },
    // メッセージのカウンタの
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted () {
    this.$store.state.menu = 'form'
  }
}
</script>
