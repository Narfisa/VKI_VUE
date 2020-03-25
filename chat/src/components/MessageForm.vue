<template>
    <div class="MessageForm">
        <el-form label-width="100px" :model="Form">
            <el-form-item label="Name">
                <el-input v-model="Form.nickname" />
            </el-form-item>
            <el-form-item label="Message">
                <el-input
                    type="textarea"
                    :rows="4"
                    v-model="Form.message" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="send"> Send </el-button>
                <el-button type="info" @click="cancel"> Cancel </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MessageForm extends Vue {
    Form = {
        nickname: '',
        message: ''
    }

    send() {
        this.$store.dispatch("sendMessage", this.$data.Form)
    }

    cancel() {
        this.$data.Form.nickname = '';
        this.$data.Form.message = ''
    }

}
</script>

<style scoped>
</style>