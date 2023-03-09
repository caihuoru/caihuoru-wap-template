<template>
  <div>
    <div class="content">
      home
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
  height: calc(100vh - 60px);
  overflow-y: auto;
  color: #fff;
}
</style>
