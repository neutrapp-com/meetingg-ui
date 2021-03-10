<template>
  <div>
    <component :is="layout">
      <RouterView :key="$route.fullPath" />
    </component>
  </div>
</template>



<script>

import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'

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
  }
}
</script>