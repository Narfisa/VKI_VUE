<template>
  <div class="home">
    <el-row type="flex" class="row-bg main-row" justify="center">
      <el-col class="main-col">
        <MessageList />
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col style="width: 600px;">
        <MessageForm/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MessageForm from '@/components/MessageForm'
import MessageList from '@/components/MessageList'
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
    MessageForm, MessageList
  }
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    display: flex;
    flex-flow: column;
    height: 100%;
  }

  .main-row {
    flex-grow : 1;
  }

  .main-col {
    width: 600px;
  }

</style>