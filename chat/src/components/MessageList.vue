<template>
    <div class="MessageList">
        <ol v-if="$store.getters.messagesCount">
            <Message v-for="message in messages" :key="message.id" :message="message"/>
        </ol>
    </div>
</template>

<script lang="ts">
import Message from '@/components/Message.vue'
import { Component, Vue } from 'vue-property-decorator';


@Component({
    components: { Message },
    methods: {
        receiveMessages: function () {
            this.$store.dispatch("receiveMessages")
        }
    },
    mounted: function() {
        setInterval(this.$data.receiveMessages, 1000)
    },
    computed: {
        messages () {
            return this.$store.state.messages
        }
    }
})
export default class MessageList extends Vue {}
</script>

<style scoped>
</style>