<template>
    <div class="message-list" v-if="len">
        <Message v-for="message in msg" :key="message.id" :message="message"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IMessageList } from '../interfaces/messages'
import Message from '@/components/Message.vue';

@Component({
    components: { Message },
})
export default class MessageList extends Vue {
}
</script>

<style scoped>
    .message-list {
        padding: 10px;
    }
</style>