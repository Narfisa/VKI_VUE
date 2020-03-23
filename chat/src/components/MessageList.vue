<template>
    <div class="MessageList">
        <Message v-for="message in $store.state.messages" :key="message.id" :message="message"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IMessageList } from '@/interfaces/messages'
import Message from '@/components/Message.vue';

@Component({
    components: { Message }
})
export default class MessageList extends Vue {
}
</script>

<style scoped>
</style>