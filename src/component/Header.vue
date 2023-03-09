<template>
  <div class="header">
    <div class="header-icon">
        <van-icon name="arrow-left" @click="back()" />
        <div>
            <template v-if="$route.path == '/news' || $route.path == '/contacts'">
                <van-icon name="search" @click="search"/>
                <div class="add-friend">
                    <van-icon class="add" name="add-o" @click="add"/>
                    <div class="add-friend-content" v-show="isAddFreind">
                        <div class="add-friend-content-item">
                            <van-icon name="chat" />
                            <span>发起群聊</span>
                        </div>
                        <div class="add-friend-content-item" @click="toAddFriendUnhandled">
                            <van-icon name="friends" />
                            <span>添加好友</span>
                        </div>
                    </div>
                </div>
                
            </template>
            <template v-else>
                <van-icon name="search" style="visibility: hidden;" @click="search"/>
            </template>
        </div>
        
    </div>
    <div class="header-title"> {{ title }} </div>
    <!-- <van-popup v-model="show" round position="left">
        <Sidebar @change-router="changeRouter"></Sidebar>
    </van-popup> -->
  </div>
</template>
<script>
import { Popup, Icon } from 'vant';
// import Sidebar from '@/component/Sidebar'
export default {
    components: {
        [ Popup.name ]: Popup,
        [ Icon.name ]: Icon,
        // Sidebar
    },
    data() {
        return {
            show: false,
            title: null,
            isAddFreind: false
        }
    },
    created(){
        this.title = this.$route?.meta?.title;
    },
    watch: {
        $route (val) {
            this.title = val.meta?.title;
        }
    },
    methods: {
        back() {
            this.$router.back(-1)
        },
        fold() {
            this.show = true;
        },
        changeRouter() {
            this.show = false;
        },
        search() {
            this.$router.push('/addFriend')
        },
        add (){
            this.isAddFreind = !this.isAddFreind
        },
        toAddFriendUnhandled() {
            this.$router.push('/addFriend/unhandled')
        }
    }
}
</script>

<style lang="less" scoped>
@import "../less/mixin.less";
.header{
    height: 8vh;
    width: 100%;
    padding: 0 .4rem;
    border-bottom: 1px solid #eee;
    align-items: center;
    display: flex;
    background: #FFC600;
    &-icon {
        width: 100%;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        border-radius: 50%;;
        font-size: .5rem;
        color: #000;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 9;
        .add {
            margin-left: .3rem;
        }
    }
    &-title {
        width: 100%;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: .48rem;
        height: 8vh;
        .set-position(absolute);
    }
    .add-friend {
        position: relative;
        display: inline-block;
        &-content {
            width: 2.2rem;
            background: #FAF1D4;
            position: absolute;
            top: .95rem;
            left: -1.2rem;
            border-radius: 5px;
            font-size: .34rem;
            padding-bottom: .2rem;
            &-item {
                line-height: initial;
                margin: .2rem 0 0 0;
                span {
                    margin-left: .05rem;
                }
            }
            &::before {
                content: '';
                display: block;
                width: 0;
                height: 0;
                position: absolute;
                right: .2rem;
                top: -0.5rem;
                background: transparent;
                border-top:.3rem solid transparent;
                border-left:.2rem solid transparent;
                border-right:.2rem solid transparent;
                border-bottom:.3rem solid #FAF1D4;
            }
        }
    }
}
</style>
