<template>
  <div class="footer">
    <van-tabbar v-model="active" @change="toNav" class="footer-nav">
        <van-tabbar-item name="/home" icon="home-o"></van-tabbar-item>
        <van-tabbar-item name="/message" icon="comment-o"></van-tabbar-item>
        <van-tabbar-item name="/wallet" icon="balance-o"></van-tabbar-item>
        <van-tabbar-item name="/service" icon="service-o"></van-tabbar-item>
        <van-tabbar-item name="/mine" icon="manager-o"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
    components: {
    },
    data() {
        return {
            active: this.$route.path
        }
    },
    methods: {
        toNav() {
            this.$router.push(this.active)
        }
    }
}
</script>

<style lang="less" scoped>
.footer {
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;
    z-index: 9;
    height: 60px;
    &-nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 60px;
        /deep/ .van-icon{
            font-size: 20px;
        }
    }
}
</style>
