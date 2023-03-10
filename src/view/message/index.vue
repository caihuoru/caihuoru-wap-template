<template>
  <div class="content">
    <div class="message">
      <div class="message-header">
        <div class="header-left">
          <span>站內消息</span>
        </div>
      </div>
      <div class="message-tab sticky-tab" sticky>
        <van-tabs v-model="messageTab">
          <van-tab title="個人消息"></van-tab>
          <van-tab title="系統通知"></van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  components: {
  },
  data() {
    return {
      messageTab: ''
    }
  },
  mounted() {
    
  },
  methods: {
    
  },
  computed: {
    
  },
}
</script>
<style lang="less" scoped>
.message {
  &-header, .header-left {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
  }
  &-header {
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    span {
      font-size: 20px;
    }
  }
}
</style>
