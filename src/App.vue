<template>
  <div :class="isLight ? 'app-theme-light' : 'app-theme-dark'" class="relative h-[100vh] w-[100vw]">
    <router-view v-slot="{ Component, route }">
      <transition :mode="route.meta.mode" :enter-active-class="route.meta.enterClass" :leave-active-class="route.meta.leaveClass">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
  
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import { useThemeStore } from '@/stores/theme.js'

  export default {
    data() {
      return {
        themeStore: null,
        theme: null,
        isLight: null
      }
    },
    mounted() {
      this.themeStore = useThemeStore()
      this.themeStore.getTheme()
    },
    watch: {
      'themeStore.theme'(newTheme) {
        this.theme = newTheme
        if (this.theme == "light") {
          this.isLight = true
        }
        else {
          this.isLight = false
        }
      }
    },
  }
</script>

<style>
  .app-theme-dark {
    @apply bg-dark-back;
  }
  .app-theme-light {
    @apply bg-light-back;
  }

  .page {
    position: absolute;
  }
</style>
