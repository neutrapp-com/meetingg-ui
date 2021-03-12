<template>
  <component :is="layout" :class="getTheme">
    <RouterView :key="$route.fullPath" />
  </component>
</template>



<script>

import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'


import AppLayoutDefault from '@/layouts/Default'

export default {
  setup() {
    const layout = shallowRef(AppLayoutDefault);
    const route = useRoute();
    
    watch(
      () => route.meta,
      async (meta) => {
        try {
          const component = await import(`@/layouts/${meta.layout}.vue`)
          layout.value = component?.default || AppLayoutDefault
        } catch (e) {
          layout.value = AppLayoutDefault
        }
        return { layout }
      },
      { immediate: true }
    )
    return { layout }
  },
  computed:{
    ...mapGetters('theme',['getTheme'])
  },
  methods : {
    ...mapActions('theme',['initTheme'])
  },
  beforeMount() {
    this.initTheme();
  },
}
</script>

<style lang="scss">
html{
  @apply bg-light  text-dark;

  & .dark{
    @apply bg-dark text-light;
  }
}
</style>