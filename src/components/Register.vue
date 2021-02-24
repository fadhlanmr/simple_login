<template>
  <div>
    <h4>Register</h4>
    <b-form @handleSubmit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Name:" label-for="input-1">
        <b-form-input id="name" v-model="name" placeholder="Type Name" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Email Address:" label-for="input-2">
        <b-form-input id="email" type="email" v-model="email" placeholder="Type Email Address" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input id="password" type="password" v-model="password" placeholder="Type Password" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-4" label="Password Confirmation:" label-for="input-4">
        <b-form-input id="password-confirm" type="password" v-model="password_confirmation"
          placeholder="Type Password Again" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    props: ["nextUrl"],
    data() {
      return {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()

        if (this.password === this.password_confirmation && this.password.length > 0) {
          let url = "http://localhost:3000/register"
          this.$http.post(url, {
              name: this.name,
              email: this.email,
              password: this.password
            })
            .then(response => {
              localStorage.setItem('user', JSON.stringify(response.data.user))
              localStorage.setItem('jwt', response.data.token)

              if (localStorage.getItem('jwt') != null) {
                this.$emit('loggedIn')
                if (this.$route.params.nextUrl != null) {
                  this.$router.push(this.$route.params.nextUrl)
                } else {
                  this.$router.push('/')
                }
              }
            })
            .catch(error => {
              console.error(error);
            });
        } else {
          this.password = ""
          this.passwordConfirm = ""

          return alert("Passwords do not match")
        }
      }
    }
  }
</script>