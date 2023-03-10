<template>
  <div>
    <div class="content">
      <!-- service -->
      <div class="msgloading-list">
        <van-skeleton title avatar :row="2" />
      </div>
      <div class="msgloading-list">
        <van-skeleton title avatar :row="2" />
      </div>
      <div class="msgloading-list">
        <van-skeleton title avatar :row="2" />
      </div>
      <div class="msgloading-list">
        <van-skeleton title avatar :row="2" />
      </div>
    </div>
    <Footer/>
  </div>
  
</template>
<script>
import Footer from '@/component/Footer'
export default {
  components: {
       Footer
    },
    data() {
        return {
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
.content {
  padding: 20px;
}
</style>
