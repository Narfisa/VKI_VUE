<template>
    <div class="MessageList" v-if="len">
        <Message v-for="message in msg" :key="message.id" :message="message"/>
    </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue'
import { Component, Vue, Prop } from 'vue-property-decorator';
import { IMessageList } from '@/interfaces/messages'

@Component({
    components: { Message },
    computed: {
        msg () {
            return this.$store.getters.getMessages
        },
        len () {
            return this.$store.getters.messagesCount
        }
    },
    mounted: function() {
        setInterval(() => {
            this.$store.dispatch("receiveMessages")
        }, 1000)
    }
})
export default class MessageList extends Vue {}
</script>

<style scoped>
</style>