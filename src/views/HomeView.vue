<template>
  <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out w-full h-full p-4 lg:pt-10 flex flex-col items-center">
    <header class="w-full max-w-[1024px]">
      <h1 class="transition ease-in-out text-2xl font-poppins font-bold lg:text-3xl">Apprendre le japonais</h1>
      <div class="flex items-center">
        <h2 class="transition ease-in-out text-2xl mt-1 ml-3 mr-2 font-notojp lg:text-3xl">日本語の学習</h2>
        <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="transition ease-in-out h-[0.125rem] flex-grow"/>
      </div>
    </header>
    
    <main class="flex flex-col text-center flex-grow justify-evenly items-center w-[80%] max-w-[1024px]">
      <RouterLink to="/kanji" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="button-style">Kanji</RouterLink>
      <RouterLink to="/expression" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="button-style">Expressions</RouterLink>
      <RouterLink to="/random" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="button-style">Random</RouterLink>
    
      <ThemeToggle />
    </main>

  </div>
</template>

<script>
  import { RouterLink } from 'vue-router'
  import { useThemeStore } from '@/stores/theme.js'
  import ThemeToggle from '@/components/ThemeToggle.vue'

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
    components: {
      ThemeToggle,
    }
  }
</script>

<style>
  .container-theme-dark {
    @apply bg-dark-back text-dark-main-font;
  }
  .container-theme-light {
    @apply bg-light-back text-light-main-font;
  }
  .line-theme-dark {
    @apply bg-dark-accent;
  }
  .line-theme-light {
    @apply bg-light-accent;
  }
  .button-theme-dark {
    @apply bg-dark-secondary-back hover:brightness-110 focus:brightness-110  focus:shadow-xl hover:shadow-xl shadow-md;
  }
  .button-theme-light {
    @apply bg-light-secondary-back focus:shadow-xl hover:shadow-xl shadow-md;
  }
  .button-style {
    @apply text-4xl lg:text-5xl font-poppins font-bold py-10 rounded-[1.25rem] max-w-[700px] w-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out;
  }
</style>