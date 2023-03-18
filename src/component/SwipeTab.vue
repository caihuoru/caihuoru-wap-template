<template>
  <van-swipe-item>
    <van-pull-refresh class="pull-list" v-model="isLoading" @refresh="onRefresh">
      <div class="sort-list" v-for="(item, key) in list" :key="key">
        <template v-if="skeletonLoading">
          <slot/>
        </template>
        <template v-else>
            <div class="simg">
              <img v-lazy="item.bg">
            </div>
            <div class="stit">{{item.name}}</div>
        </template>
      
      </div>
    </van-pull-refresh>
    
  </van-swipe-item>
</template>
<script>
export default {
  components: {
  },
  props: {
    list: Array,
    skeletonLoading: null
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  }
}
</script>
<style lang="less" scoped>
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
  .pull-list {
    min-height: calc(100vh - 60px - 80px);
  }
</style>
