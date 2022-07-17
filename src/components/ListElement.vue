<template lang="">
  <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="h-[1px]"/>
  <button v-on:click="selectedSwitch" :class="buttonClassObject" class="transition ease-in-out flex justify-between pl-2 pr-3 py-2 w-full items-center">
    <h1 class="text-md">{{ title }}</h1>
    <font-awesome-icon :class="iconClassObject" icon="fa-solid fa-check" class="text-md"/>
  </button>
</template>

<script>
  import { useThemeStore } from '@/stores/theme.js'

  export default {
    data() {
      return {
        themeStore: null,
        theme: null,
        isLight: null,
        isSelected: false
      }
    },
    props: {
      title: String,
      isAll: Boolean
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
      },
      'isAll'(newIsAll) {
        if (this.isAll == true) {
          this.isSelected = true
        }
        else {
          this.isSelected = false
        }
        this.$emit('isSelected', [this.title, this.isSelected])
      }
    },
    methods: {
      selectedSwitch() {
        if (this.isSelected) {
          this.isSelected = false
        }
        else {
          this.isSelected = true
        }
        this.$emit('isSelected', [this.title, this.isSelected])
      }
    },
    computed: {
      iconClassObject() {
        return {
          'icon-theme-dark': this.isSelected && !this.isLight,
          'icon-theme-light': this.isSelected && this.isLight,
          'icon-theme-dark hidden': !this.isSelected && !this.isLight,
          'icon-theme-light hidden': !this.isSelected && this.isLight,
        }
      },
      buttonClassObject() {
        return {
          'element-theme-dark': !this.isSelected && !this.isLight,
          'element-theme-light': !this.isSelected && this.isLight,
          'element-theme-dark selected-theme-dark': this.isSelected && !this.isLight,
          'element-theme-light selected-theme-light': this.isSelected && this.isLight,
        }
      },

    },
    emits: [
      "isSelected"
    ]
  }
</script>

<style lang="css">
  .icon-theme-dark {
    @apply text-dark-main-font
  }
  .icon-theme-light {
    @apply text-light-main-font
  }
  .selected-theme-dark {
    @apply brightness-110
  }
  .selected-theme-light {
    @apply brightness-[0.98]
  }
  .element-theme-dark {
    @apply bg-dark-secondary-back hover:brightness-110 focus:brightness-110
  }
  .element-theme-light {
    @apply bg-light-secondary-back hover:brightness-[0.97] focus:brightness-[0.97]
  }
  .divider-theme-dark {
    @apply bg-dark-back
  }
  .divider-theme-light {
    @apply bg-light-back
  }
</style>