<template>
    <div class="message-form">
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
        id: 0,
        nickname: '',
        message: ''
    }

    API = 'ws://localhost:8081'

    socket = new WebSocket(this.API)
    connect = false

    send() {
        if (!this.connect) {
            return false
        }

        this.socket.send(JSON.stringify(this.Form))
        this.Form.message = ''
    }

    cancel() {
        this.$data.Form.nickname = '';
        this.$data.Form.message = ''
    }

    mounted() {
        this.socket.onopen = () => {
            this.connect = true
            console.log('connect')
        }

        this.socket.onclose = (event) => {
            if (event.wasClean) {
                console.log('connection was close clear')
            } else {
                console.log('connection lost')
            }
            console.log('Error code: ' + event.code + '; error: ' + event.reason)
            this.connect = false
        }

        this.socket.onerror = function(error) {
            console.log('error: ' + error)
        }
    }
}
</script>

<style scoped>
    .message-form {
        padding: 10px;
    }
</style>