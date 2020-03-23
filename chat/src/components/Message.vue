<template>
    <div class="message">
        <span class="nick"> {{ msg.nickname }} :</span>
        <span class="msg"> {{ msg.message }} </span>
    </div>    
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { IMessage } from '@/interfaces/messages'

@Component({
  data () {
    return {
      msg: {
        nickname: this.$props.message.nickname,
        message: this.$props.message.message
      } 
    }
  }
})

export default class message extends Vue {
  @Prop() message!: IMessage
}
</script>

<style scoped>

</style>