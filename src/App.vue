<template>
  <div id="app">
      <router-view />
  </div>
</template>
<script>
import { createSocket } from '@/plugins/websocket';
export default {
  data() {
    return {
    }
  },
  watch: {
  },
  mounted() {
    if (this.$store.state.user.token && this.$route.path != 'login') {
      createSocket(this.$store.state.user.id)
    }
    
  }
}
</script>
<style>

</style>
