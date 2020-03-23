<template>
  <div class="home">
    <MessageList/>
    <MessageForm/>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'

export default {
  components: {
    MessageForm, MessageList
  }
}
</script>

<style scoped>
</style>