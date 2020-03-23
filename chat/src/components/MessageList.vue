<template>
    <div class="MessageList">
        <ul v-if="length">
            <message v-for="message in messages" :key="message.id"/>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import Message from '@/components/Message.vue'

export default Vue.extend({
    components: {
        Message
    }
})
</script>

<style scoped>
</style>