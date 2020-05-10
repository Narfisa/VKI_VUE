<template>
    <div class="message-list" v-if="len">
        <Message v-for="message in messages" :key="message.id" :message="message"/>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Message from '@/components/Message.vue';

@Component({
    components: { Message },
})

export default class MessageList extends Vue {
    messages: object[] = []

    get len() {
        return this.messages.length
    }

    mounted() {
        const API = 'ws://localhost:8081'
        const socket = new WebSocket(API)
        let connect = false

        socket.onopen = () => {
            connect = true
            console.log('connect')
        }

        socket.onclose = (event) => {
            if (event.wasClean) {
                console.log('connection was close clear')
            }
            else {
                console.log('connection lost')
            }
            console.log('Error code: ' + event.code + '; error: ' + event.reason)
            connect = false
        }

        socket.onmessage = (event) => {
            console.log('Got data: ' + event.data)
            this.messages.push(JSON.parse(event.data))
        }
    }
}
</script>

<style scoped>
    .message-list {
        padding: 10px;
    }
</style>