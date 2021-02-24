<template>
  <div>
    <h4>Login</h4>
    <b-form @handleSubmit="onSubmit">
      <b-form-group id="input-group-1" label="Email Address:" label-for="input-1">
        <b-form-input id="email" type="email" v-model="email" placeholder="Type Email Address" require autofocus></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="password" type="password" v-model="password" placeholder="Type Password" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        email: "",
        password: ""
      }
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault()
        if (this.password.length > 0) {
          this.$http.post('http://localhost:3000/login', {
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
                }
              } else {
                this.$router.push('dashboard')
              }
            })
            .catch(function (error) {
              console.error(error.response);
            });
        }
      }
    }
  }
</script>