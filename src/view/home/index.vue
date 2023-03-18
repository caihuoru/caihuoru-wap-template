<template>
  <div>
    <div class="content" ref="content">
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
      <!-- <van-sticky ref="sticky""> -->
        <div class="sticky">
          <div class="game-type-tab game-tab">
            <van-tabs v-model="gameTab" swipeable @change="tabChnage">
              <van-tab v-for="(item, key) in tabList" :title="item.title" :name="key" :key="key"></van-tab>
            </van-tabs>
          </div>
          <div class="sort-con">
            <van-swipe :show-indicators="false" @change="swipeTabChange" ref="swipeTab">
              <swipe-tab v-for="(item, key) in tabList" :list="item.data" :key="key" :skeletonLoading="skeletonLoading">
                <div class="msgloading-list">
                  <van-skeleton title avatar :row="2" />
                </div>
              </swipe-tab>
            </van-swipe>
          </div>
        </div>
      <!-- </van-sticky> -->
      
    </div>
  </div>  
</template>
<script>
import SwipeTab from '@/component/SwipeTab'
export default {
  components: {
    SwipeTab
  },
  data() {
      return {
        image: "/images/banner.png",
        gameTab: '',
        loading: true,
        skeletonLoading: true, 
        tabList: [
          {
            title: this.$i18n.t('home.leisure'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') }, { bg: '/images/banner2.webp', name: '腾讯游戏' }, { bg: '/images/banner2.webp', name: '百度游戏' },  { bg: '/images/banner2.webp', name: '百度游戏' },  { bg: '/images/banner2.webp', name: '百度游戏' } ]
          },
          {
            title: this.$i18n.t('home.sport'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.adventure'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.chessCard'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.shooting'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.action'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.alpinia'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          },
          {
            title: this.$i18n.t('home.tactics'),
            data: [ { bg: '/images/banner2.webp', name: this.$i18n.t('home.tencentGame') },  ]
          }
        ]
      }
  },
  mounted() {
    setTimeout(() => {
      this.skeletonLoading = false
    }, 500)
  },
  methods: {
    tabChnage (index) {
      this.$refs.swipeTab.swipeTo(index)
    },
    swipeTabChange (index) {
      this.gameTab = index
    },
    scroll (e) {
      console.log(e)
    }
  },
  computed: {
    
  }
}
</script>
<style lang="less" scoped>
.sticky {
  padding-top: 15px;
  max-height: calc(100vh - 60px)
}
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
  margin: 0 20px 15px 20px;
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
    padding: 20px 20px 0 20px;
    /deep/ .van-swipe-item {
      max-height: calc(100vh - 39px - 100px);
      overflow-y: auto;
    }
}
/deep/ .van-tabs__nav--complete{
  padding: 0 12px;
}
</style>
