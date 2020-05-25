<template>
  <div class="container" style="margin-bottom: 30px">
      <div class="form-group">
        <input
          type="text"
          name="message"
          class="form-control"
          placeholder="Enter message ..."
          v-validate="'required'"
          v-model="newMessage"
          @keyup.enter="validate"
        />
        <!-- <button class="btn btn-primary" @click="validate" name="action">Submit</button> -->
        <p class="text-danger" v-if="errors.first('message')">{{ errors.first('message') }}</p>
      </div>
  </div>
</template>
<script>
import { sendMessage } from '@/firebase/'

export default {
  name: 'CreateMessage',
  data () {
    return {
      newMessage: null
    }
  },
  methods: {
    validate () {
      this.$validator.validateAll().then(isValid => {
        if (isValid) this.createMessage()
      })
    },
    createMessage () {
      sendMessage(
        {
          message: this.newMessage,
          name: this.$store.state.username,
          timestamp: Date.now()
        }
      )
      this.newMessage = null
    }
  }
}
</script>
