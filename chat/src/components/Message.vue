<template>
    <div class="message">
        <span class="nick"> {{ message.nickname }} :</span>
        <span class="msg"> {{ message.message }} </span>
    </div>    
</template>

<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';
import { IMessage } from '@/interfaces/messages'

export default class message extends Vue {
  @Prop() message!: IMessage
}
</script>

<style scoped>

</style>