<template>
  <div>
    <div class="content">
      mine
    </div>
    <Footer/>
  </div>
  
</template>
<script>
import { Button, Icon, Toast } from 'vant';
import Footer from '@/component/Footer'
import { mapState } from 'vuex'
export default {
  components: {
       [ Button.name ]: Button,
       [ Icon.name ]: Icon,
       Footer
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
        Toast(`${item.text}模块暂未开放，请联系管理员`)
      }
    },
    computed: {
        ...mapState(["user"]),
    },
}
</script>
<style lang="less" scoped>
.content {
  height: calc(100vh - 60px);
  overflow-y: auto;
  color: #fff;
  .my {
    min-height: 74vh;
    background: #fff;
    .user {
      position: relative;
      top: -1.7rem;
      padding: 0 .7rem;
      display: flex;
      justify-content: space-between;
      &-avatar {
        width: 3.3rem;
        height: 3.3rem;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 3.3rem;
          height: 3.3rem;
        }
      }
      &-information {
        width: 65%;
        padding-top: .58rem;
      }
      &-name {
        font-size: .6rem;
        font-family: "PingFangSC-Medium, PingFang SC";
        font-weight: 500;
        padding-left: .65rem;
      }
      &-label {
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .35rem;
        padding-top: .6rem;
        width: 90%;
        padding-left: .15rem;
        &-item {
          background: #FFC600;
          padding: .1rem .3rem;
          border-radius: 25px;
        }
      }
    }
    .nav-list {
      margin-top: -1rem;
      &-item {
        font-size: .4rem;
        height: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-weight: 500;
        border-bottom: 1px solid #eee;
        &-icon {
          width: 25%;
          text-align: center;
          font-size: .6rem;
          color: #000000;
        }
        &-text {
          width: 75%;
        }
      }
    }
  }
}
</style>
