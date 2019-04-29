<template>
  <!-- Default form login -->
  <div class="h-100 ">
    <b-row class="h-100 w-100 " style="position:fixed;top:0;z-index:-1">
      <b-col md="6" class=" login-left divcurve" style="background-color:blue; ">
        <!-- <div class="login-title">
          <h1>Schmx</h1>
          School<br />
          Management<br />
          System
        </div> -->
      </b-col>
      <b-col md="6"></b-col>
    </b-row>
    <div class="d-flex justify-content-center align-items-center h-100">
      <b-card class="shadow login w-23">
        <b-form @submit.prevent="login">
          <p class="h4 text-center mb-4" style="font-weight:bold">Sign in</p>
          <label for="username" class="grey-text">Username</label>
          <b-form-input type="text" id="username" class="form-control" v-model="form.username" />
          <br />
          <label for="password" class="grey-text">Password</label>
          <b-form-input type="password" id="password" class="form-control" v-model="form.password" />
          <div class="text-center mt-4">
            <b-button class="btn submit" type="submit" :disabled="submitting"><b>Submit</b></b-button>
            <div style="margin-top:10px;font-size:10px"><a href="#">Forgot your password?</a></div>
          </div>
        </b-form>
      </b-card>
    </div>
  </div>

  <!-- Default form login -->
</template>
 <style lang="scss" scoped>
.login-title {
  color: white;
  font-weight: bold;
  justify-content: right;
}
.submit {
  background-color: rgb(255, 185, 0);
  color: rgb(65, 66, 69);
  width: 100%;
}
.divcurve {
  border-top-right-radius: 35%;
  border-bottom-right-radius: 35%;
}
</style>
 
<script>
export default {
  data() {
    return {
      submitting: false,
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login(e) {
      this.submitting = true
      this.axios
        .post('login', this.form)
        .then(({ data }) => {
          if (data.success === true) {
            location.href = '/dashboard'
          } else {
            alert('Incorrect Credentials')
          }
          e.target.reset()
        })
        .catch(() => alert('Error submitting the form'))
        .finally(() => {
          this.submitting = false
        })
    }
  }
}
</script>
