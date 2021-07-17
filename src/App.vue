<template>
  <div id="app">
    <PrivateLayout v-if="!this.$route.meta.nonRequiredAuth" />
    <PublicLayout v-if="this.$route.meta.nonRequiredAuth" />
  </div>
</template>

<script>
import PrivateLayout from './layout/PrivateLayout'
import PublicLayout from './layout/PublicLayout'

export default {
  name: 'App',
  components: {
    PrivateLayout,
    PublicLayout
  }
}
</script>

<style>
@import "scss/_global.scss";
#app {
  font-family: Roboto, Inter var, ui-sans-serif, system-ui, -apple-system,
  BlinkMacSystemFont, Segoe UI, Helvetica Neue, Arial, Noto Sans, sans-serif,
  Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-weight: 400;
  color: #212121 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
