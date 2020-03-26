<template>
  <div class="home">
    <div class="messages-container">
      <MessageList />
    </div>
    <div class="form-container">
      <MessageForm/>
    </div>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MessageForm, MessageList
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 800px;
    margin: 0 auto;
  }

  .messages-container {
    flex: 1 1 auto;
    overflow-y: auto;
    min-height: 0px;
  }

</style>