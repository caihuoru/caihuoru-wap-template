<template>
  <div id="layout">
    <!-- <Header/> -->
    <transition :name="transitionName">
      <router-view />
    </transition>
    <Footer/>
  </div>
</template>
<script>
// import Header from '@/component/Header'
import Footer from '@/component/Footer'
export default {
  components: {
      // Header,
      Footer
    },
    data() {
    return {
      transitionName: '' 
    }
  },
  watch: {
    $route(to, from) {
      if (to.meta.fade) {
        this.transitionName = "fade";
      } else {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
      }
      
    },
  },
}
</script>
<style lang="less" scoped>
</style>
