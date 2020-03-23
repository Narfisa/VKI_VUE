<template>
  <div class="home">
    <MessageList/>
    <MessageForm/>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MessageForm,
    MessageList
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>