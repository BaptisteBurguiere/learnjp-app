<template lang="">
  <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw] p-4 lg:pt-10 flex flex-col items-center">
    <RouterLink to="/">Home</RouterLink>
  </div>
</template>
<script>
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
<style lang="css">
  .container-theme-dark {
    @apply bg-dark-back text-dark-main-font;
  }
  .container-theme-light {
    @apply bg-light-back text-light-main-font;
  }
</style>