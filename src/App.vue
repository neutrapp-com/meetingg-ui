<template>
  <component :is="layout" :class="getTheme">
    <RouterView :key="$route.fullPath" />

    <div class="toasts">
      <toast v-for="toast in getLatestToasts()" :key="toast" :icon="toast.icon || (toast.type == 'error' ? 'sad-outline': 'alert')" v-bind="toast" />
    </div>
  </component>
</template>



<script>

import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { mapActions, mapGetters } from 'vuex'


import AppLayoutDefault from '@/layouts/Default'
import Toast from '@/components/shared/Toast.vue'

export default {
  components: {Toast},
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
    ...mapGetters('theme',['getTheme']),
    ...mapGetters('toasts',['getToasts'])
  },
  methods : {
    ...mapActions('theme',['initTheme']),
    getLatestToasts(){
      return this.getToasts.slice().reverse().slice(0,5);
    }
  },
  beforeMount() {
    this.initTheme();
  },
}
</script>
<style lang="scss" scoped>
.toasts{
  @apply  absolute flex flex-col space-y-4 top-0 right-4 z-50;
}
</style>
<style lang="scss">
html{
  @apply bg-light  text-dark;

  & .dark{
    @apply bg-dark text-light;
  }
}
</style>