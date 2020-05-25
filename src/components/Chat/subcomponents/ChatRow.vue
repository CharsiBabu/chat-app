<template functional>
  <div class="chat-row">
    <div class="text-info">{{props.message.name }} says:</div>
    <div class="message-container">
      <span class="message-content">{{props.message.message}}</span>
      <span class="text-secondary time column">{{props.message.timestamp}}</span></div>
  </div>
</template>
