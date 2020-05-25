<template>
  <div class="chat container">
    <h2 class="text-primary text-center">Chat</h2>
    <div class="card">
      <div class="card-body">
        <p class="nomessages text-secondary" v-if="messages.length == 0">[No messages yet!]</p>
        <div class="messages" v-chat-scroll="{always: false, smooth: true}">
          <ChatRow v-for="message in messages" :key="message.id" :message="message" />
        </div>
        <div class="card-action">
          <ChatInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from '@/firebase/'
import { formatMessage } from '@/helpers/dataFormat.js'

export default {
  name: 'Chat',
  components: {
    ChatRow: () => import('@/components/Chat/subcomponents/ChatRow'),
    ChatInput: () => import('@/components/Chat/subcomponents/ChatInput')
  },
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.fetchMessage()
  },
  methods: {
    fetchMessage () {
      const ref = db.orderBy('timestamp')
      ref.onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type === 'added') {
            const message = formatMessage(change)
            this.messages.push(message)
          }
        })
      })
    }
  }
}
</script>
<style>
.chat h2{
    font-size: 2.6em;
    margin-bottom: 0px;
}

.chat h5{
    margin-top: 0px;
    margin-bottom: 40px;
}

.chat span{
    font-size: 1.2em;
}

.chat .time{
    float: right;
    font-size: 0.7em;
}

.messages{
    max-height: 300px;
    overflow: auto;
    text-align: left;
}
</style>
