<template>
  <div>
    <div class="content">
      <div class="header">
        <div class="header-left">
          <img src="/images/test.png" />
          <span>競氣會員</span>
        </div>
        <div class="header-right">
          <div class="icons">
            <van-icon class="iconfont icon-kefu" name="service-o" />
          </div>
          <div class="icons">
            <van-icon class="iconfont icon-more" name="more-o" />
          </div>
        </div>
      </div>
      <div class="swipe">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item class="swipe-item">
            <img v-lazy="image"/>
          </van-swipe-item>
          <van-swipe-item class="swipe-item">
            <img v-lazy="image"/>
          </van-swipe-item>
          <van-swipe-item class="swipe-item">
            <img v-lazy="image"/>
          </van-swipe-item>
          <van-swipe-item class="swipe-item">
            <img v-lazy="image"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="notice">
        <div class="icon">
          <van-icon class="iconfont icon-annc" name="volume-o" />
        </div>
      </div>
      <div class="game-type-tab game-tab">
        <van-tabs v-model="gameTab">
          <van-tab title="休閒"></van-tab>
          <van-tab title="體育"></van-tab>
          <van-tab title="冒險"></van-tab>
          <van-tab title="棋牌"></van-tab>
          <van-tab title="射擊"></van-tab>
          <van-tab title="動作"></van-tab>
          <van-tab title="益智"></van-tab>
          <van-tab title="策略"></van-tab>
        </van-tabs>
      </div>
      <div class="sort-con">
        <div class="sort-list">
          <div class="simg">
            <img src="/images/banner2.webp">
          </div>
          <div class="stit">腾讯游戏</div>
        </div>
        <div class="sort-list">
          <div class="simg">
            <img src="/images/banner2.webp">
          </div>
            <div class="stit">淘宝游戏</div>
          </div>
          <div class="sort-list">
            <div class="simg">
              <img src="/images/banner2.webp">
            </div>
            <div class="stit">抖音游戏</div>
          </div>
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
          image: "/images/banner.png",
          gameTab: ''
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
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  &-left {
    display: flex;
    align-items: center;
    flex-direction: row;
    span {
      font-size: 16px;
    }
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      margin-right: 10px;
      background-color: hsla(0,0%,100%,.1);
    } 
  }
  &-right {
    display: flex;
    flex-direction: row;
    height: 50px;
    align-items: center;
    .icons {
      padding-left: 20px;
      i {
        font-size: 30px;
      }
    }
  }
}
.swipe{
  margin: 0 20px 20px 20px;
  border-radius: 20px;
  overflow: hidden;
  &-item{
    width: 100%;
    height: 120px;
    border-radius: 10px;
    overflow: hidden;
    
    img {
      width: 100%;
      border-radius: 20px;
    }
  }
}
.notice {
  margin: 0 20px 30px 20px;
  display: flex;
  flex-direction: row;
  height: 30px;
  align-items: center;
  .icon {
    width: 30px;
    background-color: #9294ff;
    display: flex;
    height: 30px;
    align-items: center;
    border-radius: 20px;
    justify-content: center;
    margin-right: 10px;
    font-size: 16px;
  }
}
.sort-con {
    padding: 20px;
    .sort-list{
      position: relative;
      margin-bottom: 15px;
      .stit{
        position: absolute;
        right: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        top: 0;
        font-size: 26px;
        color: #fff;
      }
      .simg {
        width: 100%;
        height: 136px;
        border-radius: 10px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            -o-object-fit: cover;
            object-fit: cover;
            -o-object-position: top;
            object-position: top;
        }
      }
  }
}
/deep/ .van-tabs__nav--complete{
  padding: 0 12px
}
</style>
