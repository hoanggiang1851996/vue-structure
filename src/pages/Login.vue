<template>
  <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 24 }" @submit="handleSubmit">
    <div class="container-login">
      <div class="panel">
        <div class="body">
          <img class="icon-logo" src="../assets/logo-ghtk.png" />
          <h3 class="text-bold">Ewallet Admin</h3>
          <div>
            <a-form-item>
              <a-input
                aria-placeholder="Tên đăng nhập"
                v-decorator="['username', { rules: [{ required: true, message: 'Vui lòng nhập Tên đăng nhập' }] }]"
              />
            </a-form-item>
            <a-form-item>
              <a-input
                aria-placeholder="Mật khẩu"
                v-decorator="['password', { rules: [{ required: true, message: 'Vui lòng Nhập mật khẩu' }] }]"
              />
            </a-form-item>
          </div>
        </div>

        <div class="footer text-center">
          <a-form-item>
            <a-button type="primary" class="btn-default" html-type="submit">
              Đăng nhập
            </a-button>
          </a-form-item>
        </div>
      </div>

      <div class="copyright-text">Copyright © GHTK 2021</div>
    </div>
  </a-form>
</template>

<script>
import { LOGIN } from '../store/actions.type'

export default {
  data () {
    return {
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch(LOGIN, values)
        }
      })
    }
  }
}
</script>

<style scoped>
.container-login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f1f4f6;
}

.panel {
  width: 500px;
  background: #fff;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: .3rem;
  outline: 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  text-align: center;
}

.body {
  padding: 1rem;
}

.icon-logo {
  width: 150px;
}

.footer {
  padding: 1rem;
  background: #f8f9fa;
  border-top: 1px solid #e9ecef;
}

.copyright-text {
  margin-top: 20px;
}
</style>
