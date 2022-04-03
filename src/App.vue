<template>
<div>
  <Header/>
  <router-view/>
  <Footer/>
  </div>
</template>

<script>
import Header from '@/components/ui/HeaderMenu.vue'
import Footer from '@/components/ui/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
  @import "@/app.scss";
</style>


