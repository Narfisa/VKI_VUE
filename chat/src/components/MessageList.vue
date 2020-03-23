<template>
    <div class="MessageList">
        <ol v-if="length">
            <Message v-for="message in messages" :key="message.id" :message="message"/>
        </ol>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Message from '@/components/Message.vue'

export default Vue.extend({
    components: {
        Message
    },
    data () {
        return {
            messages: []
        }
    },
    methods: {
        receiveMessages: function () {
            this.$store.dispatch("receiveMessages")
        },
    },
    mounted: function() {
        setInterval(this.receiveMessages, 1000)
    }
})
</script>

<style scoped>
</style>