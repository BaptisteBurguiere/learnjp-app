<template lang="">
  <button v-on:click="switchTheme" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="relative w-12 h-12 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out">
    <transition name="fade" appear>
      <font-awesome-icon v-if="isLight" icon="fa-solid fa-moon" class="text-light-main-font w-[70%] h-[70%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] absolute"/>
      <font-awesome-icon v-else icon="fa-solid fa-sun" class="text-dark-main-font w-[60%] h-[60%] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] absolute"/>
    </transition>
  </button>
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
    methods: {
      switchTheme() {
        if (this.theme == "dark") {
          this.themeStore.theme = "light"
          localStorage.theme = "light"
        }
         else {
          this.themeStore.theme = "dark"
          localStorage.theme = "dark"
         }
      }
    },
  }
</script>
<style lang="css">
  .button-theme-dark {
    @apply bg-dark-secondary-back hover:brightness-110 focus:brightness-110  focus:shadow-xl hover:shadow-xl shadow-md;
  }
  .button-theme-light {
    @apply bg-light-secondary-back focus:shadow-xl hover:shadow-xl shadow-md;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 150ms ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>