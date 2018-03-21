<template>
  <div class="hello">
    <h1>Register</h1>
    <input
      type="email"
       name="email"
       v-model="email"
       value="example@test.com">
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      value="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      console.log('You clicked a button', this.email, this.password)
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
