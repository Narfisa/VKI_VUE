<template>
    <div class="Message">
        <span class="nick"> {{ message.nickname }} :</span>
        <span class="msg"> {{ message.message }} </span>
    </div>    
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { IMessage } from '@/interfaces/messages'

@Component
export default class Message extends Vue {
  @Prop() message!: IMessage
}
</script>

<style scoped>
.nick{
  background: #DCDFE6;
  border-width: 1px;
  border-radius: 10%;
}
.msg{
  margin-left: 1%;
}
.message{
  margin-bottom: 1%;
}
</style>