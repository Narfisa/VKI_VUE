<template>
    <div class="MessageList">
        <ol v-if="len">
            <Message v-for="message in messages" :key="message.id" :message="message"/>
        </ol>
    </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue'
import { Component, Vue } from 'vue-property-decorator';


@Component({
    components: { Message },
    mounted: function() {
        setInterval(() => {
            this.$store.dispatch("receiveMessages")
        }, 1000)
    },
    computed: {
        messages () {
            return this.$store.state.messages
        },
        len () {
            return this.$store.getters.messagesCount
        }
    }
})
export default class MessageList extends Vue {}
</script>

<style scoped>
</style>