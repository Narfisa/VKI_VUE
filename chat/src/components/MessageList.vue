<template>
    <div class="MessageList">
        <Message v-for="message in messages" :key="message.id" :message="message"/>
    </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue'
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IMessageList } from '@/interfaces/messages'

@Component({
    components: { Message }
})
export default class MessageList extends Vue {
  @Prop() messages!: IMessageList
}
</script>

<style scoped>
</style>