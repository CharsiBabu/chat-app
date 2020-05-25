<template>
  <div class="container">
    <div class="card login">
      <div class="card-body">
        <h2 class="card-title text-center">Login</h2>
        <form @submit.prevent="validate" class="text-center">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Your name" name="name" v-validate="'required|alpha_num|min:3'" v-model="name">
            <p v-if="errors.first('name')" class="text-danger">{{ errors.first('name') }}</p>
          </div>
          <button class="btn btn-primary">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) {
          this.login()
        }
      })
    },
    login () {
      this.$store.dispatch('setLoggedIn', true)
      this.$store.dispatch('setUsername', this.name)
      this.$router.push({ name: 'Chat' })
    }
  }
}
</script>

<style scoped>
.login{
  max-width: 450px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
