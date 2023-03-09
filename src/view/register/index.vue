<template>
  <div class="register">
    <div class="register-content">
        <div class="register-logo">
            <img src="/images/logo.png"/>
        </div>
        <div class="form">
            <div class="form-item">
                <div class="form-item-label">
                    昵称
                </div>
                <div class="form-item-input">
                    <input type="text" v-model="nickName" placeholder="请输入昵称"/>
                </div>
            </div>
            <div class="form-item">
                <div class="form-item-label">
                    账号
                </div>
                <div class="form-item-input">
                    <input type="text" v-model="loginName" placeholder="请输入账号"/>
                </div>
            </div>
            <div class="form-item">
                <div class="form-item-label">
                    密码
                </div>
                <div class="form-item-input">
                    <input type="password" v-model="password" placeholder="请输入账号"/>
                </div>
            </div>
            <div class="agreement">
                <van-checkbox class="square" shape="square" icon-size=".4rem" v-model="agreen" checked-color="#F84225">
                    本人同意相关协议，解释权归本公司所有
                </van-checkbox>
            </div>
            <div class="form-btn">
                <van-button class="register-btn" :disabled="!agreen" color="#F84225" @click="register">提交</van-button>
                <van-button class="register-btn" color="#D4D4D4" @click="cancel">关闭</van-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { register } from '@/api/auth';
import { Button, Icon, Checkbox, Toast } from 'vant';
export default {
  components: {
       [ Button.name ]: Button,
       [ Icon.name ]: Icon,
       [ Checkbox.name ]: Checkbox,
    },
    data() {
        return {
            agreen: false,
            loginName: '',
            nickName: '',
            password: ''
        }
        
    },
    methods: {
        async register () {
            const res = await register({
                loginName: this.loginName,
                nickName: this.nickName,
                password: this.password
            })
            console.log(res)
            if (res.code === 0) {
                Toast.success(res.msg)
                setTimeout(() => {
                    this.$router.push('/login')
                }, 1000)
            }
        },
        cancel() {
            this.$router.push('/login')
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../less/mixin.less";
.register {
    padding-top: 2rem;
    height: 100vh;
    &-logo {
        width: 5rem;
        overflow: hidden;
        img {
            width: 100%;
            margin-top: -1rem;
            margin-left: -1rem;
        }
    }
    .form {
        width: 82%;
        margin: -2rem auto 0 auto;
        color: #1B1B1B;
        background: #fff;
        padding: .6rem;
        border-radius: 5px;
        &-item {
            padding-top: .5rem;
            &-label {
                font-size: .33rem;
                padding: 0 0 .01rem .35rem;
            }
            &-input {
                input {
                    padding: .4rem;
                    width: 100%;
                    height: 1rem;
                    font-size: .4rem;
                    background: #FFFFFF;
                    border-radius: 16px 16px 16px 16px;
                    opacity: 1;
                    border: 1px solid #1B1B1B;
                }
                
            }
        }
        &-btn {
            text-align: center;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            button {
                &.register-btn {
                    margin-bottom: .3rem;
                }
                color: #1B1B1B !important;
                border-radius: 25px;
                width: 2.5rem;
                height: 1rem;
                font-weight: 400;
                font-size: .4rem;
            }
        }
        .agreement {
            font-size: .33rem;
            margin: 1rem auto .6rem auto;
        }
    }
}
</style>
