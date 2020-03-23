<template>
    <div class="MessageForm">
        <el-form label-width="100px" :model="Form">
            <el-form-item label="Name">
                <el-input v-model="Form.nickname"></el-input>
            </el-form-item>
            <el-form-item label="Message">
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
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data () {
    return{
      Form: {
        nickname: String,
        message: String
      }
    }
  },
  methods: {
    send: function () {
        this.$store.dispatch("sendMessage", this.$data.Form)
    },
    cancel: function () {
        this.$data.Form.nickname = ''
        this.$data.Form.message = ''
    }      
  } 
})
export default class App extends Vue {}
</script>

<style scoped>
@import url("//unpkg.com/element-ui@2.13.0/lib/theme-chalk/index.css");
</style>