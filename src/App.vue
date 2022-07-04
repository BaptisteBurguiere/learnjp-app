<template>

  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
  import { useThemeStore } from '@/stores/theme.js'

  export default {
    mounted() {
      const themeStore = useThemeStore()
      themeStore.getTheme()
    },
  }
</script>

<style>

</style>
