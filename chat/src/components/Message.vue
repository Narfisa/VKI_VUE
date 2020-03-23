<template>
    <div class="message">
        <span class="nick"> {{ message.nickname }} :</span>
        <span class="msg"> {{ message.message }} </span>
    </div>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: ['message'],
})
</script>

<style scoped>

</style>