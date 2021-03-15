<template>
  <Layout>
    <div class="preloader">
      <div class="status">
        <div class="spinner">
          <div class="circle1"></div>
          <div class="circle2"></div>
          <div class="circle3"></div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from '../layouts/Default.vue'

export default {
  name: 'Loading',
  components: { 
    Layout
   },
}
</script>

<style lang="scss" module>
.loadingIcon {
  display: block;
  margin: 0 auto;

  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter-active) {
    transition: opacity 1s;
  }
  // stylelint-disable-next-line selector-class-pattern
  &:global(.v-enter) {
    opacity: 0;
  }
}
</style>
