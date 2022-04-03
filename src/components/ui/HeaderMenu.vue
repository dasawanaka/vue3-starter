<template>
   <nav>
    <router-link to="/">About</router-link> |
    <router-link to="/blog">Blog</router-link> | 
    <router-link to="/contact">Contact</router-link> 
  </nav>
</template>

<script>
export default {
    name: 'HeaderMenu',
}
</script>

<style lang="scss">
@import "@/styles/templates/Header.scss";
</style>
