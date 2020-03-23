<template>
    <div class="message">
        <span class="nick"> {{ message.nickname }} :</span>
        <span class="msg"> {{ message.message }} </span>
    </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  props: ['message']
})
export default class message extends Vue {}
</script>

<style scoped>
</style>