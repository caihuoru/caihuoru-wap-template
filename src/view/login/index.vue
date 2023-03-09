<template>
  <div class="login">
    <div class="login-content">
        <div class="login-logo">
            <img src="/images/logo.png"/>
        </div>
        <div class="form">
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
            <div class="form-forgetPassword" @click="forgetPassword">
                忘记密码
            </div>
            <div class="form-btn">
                <van-button class="login-btn" color="#F84225" @click="login">登录</van-button>
                <br/>
                <van-button class="register-btn" color="#FFC600" @click="register">注册</van-button>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import { Button, Icon, Toast } from 'vant';
import { login } from '@/api/auth';
import { userInfo } from '@/api/user';
import { createSocket } from '@/plugins/websocket';
export default {
    components: {
       [ Button.name ]: Button,
       [ Icon.name ]: Icon,
    },
    data() {
        return {
            loginName: '',
            password: ''
        }
        
    },
    methods: {
        async login () {
            if (!this.loginName || !this.password) {
                return Toast.fail("账户与密码不能为空")
            }
            const res = await login({
                loginName: this.loginName,
                password: this.password
            })
            if (res.code === 0) {
                
                this.$store.commit('user/SET_USER_TOKEN', res.data.token);

                const info = await userInfo()
                this.$store.commit('user/SET_USER_INFO', info.data);
                // 连接socket
                createSocket(info?.data?.id)
                Toast.success(res.msg)
                setTimeout(() => {
                    this.$router.push('/news')
                }, 1500)
                return
            }
        },
        register () {
            this.$router.push('/register')
        },
        forgetPassword () {
            Toast('未开放')
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../less/mixin.less";
.login {
    height: 100vh;
    padding-top: 2.5rem;
    &-logo {
        width: 4.1rem;
        height: 3.5rem;
        margin: 0 auto;
        img {
            width: 150%;
            margin-left: -25%;
            margin-top: -1rem;
        }
    }
    .form {
        width: 80%;
        margin: 1rem auto 0 auto;
        color: #1B1B1B;
        &-item {
            padding: .5rem .3rem 0 .3rem;
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
        &-forgetPassword {
            padding-top: .3rem;
            font-size: .33rem;
            text-align: right;
        }
        &-btn {
            text-align: center;
            padding-top: 1.2rem;
            button {
                &.login-btn {
                    margin-bottom: .3rem;
                }
                color: #1B1B1B !important;
                border-radius: 25px;
                width: 70%;
                font-weight: 400;
                font-size: .4rem;
            }
        }
    }
}
</style>
