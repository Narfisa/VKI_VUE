<template>
    <div class="MessageForm">
        <el-form :label-position="labelPosition" label-width="100px" :model="Form">
            <el-form-item label="Name">
                <el-input v-model="Form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-input v-model="Form.message"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="send"> Send </el-button>
                <el-button type="info" @click="cancel"> Cancel </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="//unpkg.com/element-ui@2.13.0/lib/index.js"></script>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    data () {
        return {
            Form: {
                nickname: '',
                message: ''
            }
        }
    },
    methods: {
        send: function () {
            this.$store.dispatch("sendMessage", this.Form)
        },
        cancel: function () {
            this.Form.nickname = ''
            this.Form.message = ''
        }
    }
})
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>