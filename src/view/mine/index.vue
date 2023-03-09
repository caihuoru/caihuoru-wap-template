<template>
  <div class="content">
    <div class="user">
      <div class="header">
        <div class="title">我的</div>
        <div class="skin"><van-icon name="description" /></div>
      </div>
      <div class="avatar">
        <img src="/images/test.png" />
      </div>
      <div class="userName">競氣會員</div>
      <div class="userinfo">
        <span>JL0001</span>
        <span class="pipe">|</span>
        <span>半個月前加入競力</span>
        <span class="pipe">|</span>
        <span>未認證</span>
      </div>
      <div class="user-coins">
        <div class="coin">
          <span >0</span>
          <span class="ntd" >NTD</span>
        </div>
        <div  class="oper">
          <div class="oitem">存款</div>
          <div class="oitem">取款</div>
          <div class="oitem">記錄</div>
        </div>
      </div>
      <div  class="user-menu">
        <div  class="menu-item">
          <div  class="item-left">
            <van-icon class="iconfont icon-account-set" name="user-o" />
          </div>
          <div  class="item-right">
            <div  class="item-tit"> 賬號安全與設定 </div>
            <div  class="item-more">
              <van-icon class="iconfont icon-arrow-right" name="arrow" />
            </div>
          </div>
        </div>
        <div  class="menu-item">
          <div  class="item-left" style="background-color: rgb(142, 148, 255);">
            <van-icon class="iconfont icon-zichan" name="balance-o" />
          </div>
          <div  class="item-right">
            <div  class="item-tit"> 資產管理 </div>
              <div  class="item-more">
                <van-icon class="iconfont icon-arrow-right" name="arrow" />
              </div>
            </div>
        </div>
        <div  class="menu-item">
          <div  class="item-left" style="background-color: rgb(135, 218, 142);">
            <van-icon class="iconfont icon-activity" name="gift-o" />
          </div>
          <div  class="item-right">
            <div  class="item-tit"> 福利活動 </div>
            <div  class="item-more">
              <van-icon class="iconfont icon-arrow-right" name="arrow" />
            </div>
          </div>
        </div>
        <div  class="menu-item">
          <div  class="item-left" style="background-color: rgb(255, 149, 141);">
            <van-icon class="iconfont icon-helpcenter" name="question-o" />
          </div>
          <div  class="item-right">
            <div  class="item-tit"> 幫助中心 </div>
            <div  class="item-more">
              <van-icon class="iconfont icon-arrow-right" name="arrow" />
            </div>
          </div>
        </div>
      </div>
      <div class="loginout" @click="loginout"><span>切換賬號</span></div>
    </div>
    <Footer/>
  </div>
  
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {
  },
  data() {
      return {
        navList: [
        {
          icon: 'like-o',
          path: '',
          text: '服务'
        },
        {
          icon: 'star-o',
          path: '',
          text: '收藏'
        },
        {
          icon: 'photo-o',
          path: '',
          text: '朋友圈'
        },
        {
          icon: 'idcard',
          path: '',
          text: '卡包'
        },
        {
          icon: 'setting-o',
          path: '',
          text: '设置'
        }
        ]
        
      }
  },
  mounted() {
    console.log(this.user)
      // this.$store.registerModule("user", store);
  },
  methods: {
    toNav(item) {
      this.$toast(`${item.text}模块暂未开放，请联系管理员`)
    },
    loginout() {
      this.$dialog.confirm({
        message: '確認退出當前賬號嗎？',
      })
      .then(() => {
        // on confirm
      })
      .catch(() => {
        // on cancel
      });
    }
  },
  computed: {
      ...mapState(["user"]),
  },
}
</script>
<style lang="less" scoped>
.user {
  padding: 30px 20px 0 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
  }
  .skin {
    width: 32px;
    height: 32px;
    border: 2px solid #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .avatar {
    text-align: center;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    margin: 10px auto 0 auto;
    img {
      width: 90px;
    }
    
  }
  .userName {
    text-align: center;
    font-size: 17px;
    margin: 10px 0;
  }
  .userinfo {
    text-align: center;
    color: #777;
    font-size: 14px;
    .pipe {
      color: #555;
      margin: 0 5px;
      font-size: 12px;
    }
  }
  .user-coins {
    background-color: rgba(36,39,48,.8);
    margin: 20px 0;
    border-radius: 20px;
    padding: 10px 10px 20px 10px;
    .coin {
      text-align: center;
      margin-bottom: 15px;
      span {
        font-size: 32px;
        margin-right: 5px;
        &.ntd {
          font-size: 14px;
          margin-right: 0;
        }
      }
    }
    .oper {
      text-align: center;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      font-size: 14px;
    }
  }
  .iconfont {
    font-size: 22px;
  }
  .user-menu {
    .menu-item {
      display: flex;
      padding: 15px;
      background-color: rgba(36,39,48,.8);
      flex-direction: row;
      align-items: center;
      border-radius: 20px;
      margin-bottom: 20px;
      .item-left {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #a669fa;
        line-height: 40px;
        text-align: center;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .item-right{
        display: flex;
        height: 40px;
        align-items: center;
        justify-content: space-between;
        width: calc(100% - 50px);
      }
      .item-tit{
        font-size: 15px;
      }
      .item-more i {
        color: hsla(0,0%,100%,.5);
      }
    }
  }
}
.loginout {
  text-align: center;
  margin-bottom: 20px;
  span {
    color: hsla(0,0%,100%,.3);
    font-size: 14px;
  }
}
</style>
