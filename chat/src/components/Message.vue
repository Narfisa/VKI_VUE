<template>
    <div class="message">
        <span class="nick"> {{ message.nickname }} :</span>
        <span class="msg"> {{ message.message }} </span>
    </div>
</template>

<script lang="ts">
    import {Vue, Prop, Component} from 'vue-property-decorator';
    import {IMessage} from '@/interfaces/messages'

    @Component
    export default class Message extends Vue {
        @Prop() message!: IMessage
    }
</script>

<style scoped>
    .nick {
        color: #DCDFE6;
        font-style: italic;
    }

    .msg {
        margin-left: 1%;
    }

    .message {
        padding: 10px 15px;
        margin-bottom: 1%;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
    }
</style>