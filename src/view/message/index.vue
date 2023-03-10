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
      <div class="message-list">
        <van-pull-refresh class="pull-list" v-model="isLoading" @refresh="onRefresh">
          <div class="pagestatus">
            <img src="/images/empty.svg">
            <p>沒有数据</p>
          </div>
        </van-pull-refresh>
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
      messageTab: '',
      isLoading: true
    }
  },
  mounted() {
    
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
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
  &-list {
    .pull-list {
      height: calc(100vh - 60px - 36px - 90px - 10PX);
      .pagestatus {
          text-align: center;
          padding: 50px 0;
          transition: all .3s;
          img {
            width: 200px;
          }
          p {
            color: var(--base-font-color);
            font-size: 14px;
          }
      }
    }
  }
}
</style>
