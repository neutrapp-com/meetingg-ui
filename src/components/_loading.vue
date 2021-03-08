<script>
export default {
  page: {
    title: 'Loading page...',
    meta: [{ name: 'description', content: 'Loading page...' }],
  },
  name: 'Loading',
}
</script>

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
