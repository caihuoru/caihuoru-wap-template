<template>
  <div class="sidebar">
    <div class="sidebar-nav">
      <div 
        class="sidebar-nav-item"
        :class="{'action': $route.path == item.path}"
        v-for="(item, key) in list" :key="key" 
        @click="toPath(item.path)"
      >
        <van-icon class="icon" :name="item.icon" />
        <span> {{ item.name }} </span>
      </div>
      
    </div>
  </div>
</template>
<script>
import { Icon } from 'vant';
export default {
  components: {
    [ Icon.name ]: Icon,
  },
  data() {
    return {
        list: [
          {
            icon: 'wap-home',
            name: '首页',
            path: '/home'
          },
          {
            icon: 'manager',
            name: '关于我们',
            path: '/about'
          },
          {
            icon: 'card',
            name: '留言板',
            path: '/opinion'
          }
        ]
    }
  },
  methods: {
    toPath(path) {
      this.$router.push(path);
      this.$emit('change-router')
    }
  }
}
</script>
<style lang="less" scoped>
.sidebar {
  padding-top: 1rem;
  background: #181f25;
  height: 100vh;
  width: 60vw;
  &-nav {
    font-size: .4rem;
    font-family: "微软雅黑";
    color: rgba(143,155,176,1);
    &-item {
      padding: .5rem;
      &.action {
        color: #fff;
      }
      .icon {
        margin-right: .3rem;
      }
    }
  }
}
</style>
