<template lang="">
  <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw] p-4 lg:pt-10 flex flex-col items-center">
    <header class="w-full max-w-[1024px] flex items-center">
      <router-link to="/" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="flex justify-center items-center w-12 h-12 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out">
        <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-arrow-left" class="w-[70%] h-[70%]"/>
      </router-link>
      <h1 class="transition ease-in-out text-3xl font-poppins font-bold lg:text-4xl ml-4 mr-2">Kanji</h1>
      <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="transition ease-in-out h-[0.125rem] flex-grow"/>
    </header>

    <main class="flex flex-col text-center flex-grow justify-evenly items-center mb-14 w-[80%] max-w-[1024px]">
      <div :class="isLight ? 'card-theme-light' : 'card-theme-dark'" class="card-style h-[35vh]">
        <div class="flex justify-between items-center w-full pt-3 pl-4 pr-4">
          <h1 class="transition ease-in-out text-2xl font-poppins font-bold lg:text-3xl">Catégories</h1>
          <button v-on:click="allSwitch" :class="allClassObject" class="focus:outline-none transition ease-in-out border px-3 py-1 font-poppins text-xl font-normal lg:text-2xl rounded-full">Tout</button>
        </div>
        
        <div v-if="isLoading" class="w-full flex-grow flex items-center justify-center">
          <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-spinner" class="text-4xl animate-spin"/>
        </div>
        <div v-else class="w-full overflow-auto mt-3 rounded-b-[1.25rem]">
          <ListElement v-for="categorie in categories" v-bind:title="categorie" :isAll="isAll" @isSelected="updateSelectedItems"/>
        </div>
      </div>
      
      <div :class="isLight ? 'card-theme-light' : 'card-theme-dark'" class="card-style h-[20%]">
        <h1 class="transition ease-in-out text-2xl font-poppins font-bold lg:text-3xl ml-4 mt-3 mb-2">Modes</h1>
        <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="h-[1px] w-full mb-[1px]"/>
        <div class="flex w-full h-full justify-center items-center">
          <button v-on:click="modeKanToRomaSwitch" :class="modeKanToRomaClassObject" class="rounded-bl-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full">
            <p class="font-notojp text-2xl">火</p>
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
            <p class="font-poppins text-2xl font-bold">hi</p>
          </button>
          <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="w-[1px] h-full"/>
          <button v-on:click="modeRomaToKanSwitch" :class="modeRomaToKanClassObject" class="rounded-br-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full ">
            <p class="font-poppins text-2xl font-bold">hi</p>
            <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
            <p class="font-notojp text-2xl">火</p>
          </button>
        </div>
      </div>

      <router-link to="/kanji" :class="startClassObject">Commencer</router-link>
    </main>
  </div>
</template>
<script>
  import { useThemeStore } from '@/stores/theme.js'
  import axios from 'axios'
  import ListElement from '@/components/ListElement.vue'

  export default {
    data() {
        return {
          themeStore: null,
          theme: null,
          isLight: null,
          categories: [],
          isAll: false,
          isLoading: true,
          isModeRomaToKan: false,
          isModeKanToRoma: false,
          selectedItems: [],
          isReady: false
        }
      },
      mounted() {
        this.themeStore = useThemeStore()
        this.getCategories()
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
        getCategories() {
          const API_KEY = import.meta.env.VITE_API_KEY
          const DATABASE_ID = import.meta.env.VITE_DATABASE_ID
          const NOTION_VERSION = import.meta.env.VITE_NOTION_VERSION
          const URL = "https://learnjp-api.bburguiere.workers.dev/getKanjiDB"

          this.isLoading = true
          axios.get(URL, {
            headers:  {
              "Notion-Version": NOTION_VERSION,
            }
          })
          .then(response => {
            const categories_obj = response.data.properties["Catégorie"].multi_select.options
            for (var i in categories_obj){
              this.categories.push(categories_obj[i].name)
            }
            this.isLoading = false
          })

        },

        allSwitch() {
          if (this.isAll) {
            this.isAll = false
          }
          else {
            this.isAll = true
          }
        },

        modeRomaToKanSwitch() {
          if (this.isModeRomaToKan) {
            this.isModeRomaToKan = false
          }
          else {
            this.isModeRomaToKan = true
          }
          this.isReadyCheck()
        },
        modeKanToRomaSwitch() {
          if (this.isModeKanToRoma) {
            this.isModeKanToRoma = false
          }
          else {
            this.isModeKanToRoma = true
          }
          this.isReadyCheck()
        },

        updateSelectedItems(itemDatas) {
          if (itemDatas[1] == true) {
            if (this.selectedItems.indexOf(itemDatas[0]) == -1) {
              this.selectedItems.push(itemDatas[0])
            }
          }
          else {
            if (this.selectedItems.indexOf(itemDatas[0] != -1)) {
              this.selectedItems.splice(this.selectedItems.indexOf(itemDatas[0]), 1)
            }
          }
          this.isReadyCheck()
        },

        isReadyCheck() {
          if (this.selectedItems.length > 0 && (this.isModeKanToRoma == true || this.isModeRomaToKan == true)) {
            this.isReady = true
          }
          else {
            this.isReady = false
          }
        }
      },
      components: {
        ListElement
      },
      computed: {
        allClassObject() {
          return {
            'isAll-theme-dark': this.isAll && !this.isLight,
            'isAll-theme-light': this.isAll && this.isLight,
            'isNotAll-theme-dark': !this.isAll && !this.isLight,
            'isNotAll-theme-light': !this.isAll && this.isLight,
          }
        },
        modeRomaToKanClassObject() {
          return {
            'isMode-theme-dark': this.isModeRomaToKan && !this.isLight,
            'isMode-theme-light': this.isModeRomaToKan && this.isLight,
            'isNotMode-theme-dark': !this.isModeRomaToKan && !this.isLight,
            'isNotMode-theme-light': !this.isModeRomaToKan && this.isLight,
          }
        },
        modeKanToRomaClassObject() {
          return {
            'isMode-theme-dark': this.isModeKanToRoma && !this.isLight,
            'isMode-theme-light': this.isModeKanToRoma && this.isLight,
            'isNotMode-theme-dark': !this.isModeKanToRoma && !this.isLight,
            'isNotMode-theme-light': !this.isModeKanToRoma && this.isLight,
          }
        },
        startClassObject() {
          return {
            'isNotReady-startButton-style isNotReady-startButton-theme-dark': !this.isReady && !this.isLight,
            'isReady-startButton-style button-theme-dark': this.isReady && !this.isLight,
            'isNotReady-startButton-style isNotReady-startButton-theme-light': !this.isReady && this.isLight,
            'isReady-startButton-style button-theme-light': this.isReady && this.isLight,
          }
        }
      }
  }
</script>
<style lang="css">
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
  .icon-theme-dark {
    @apply text-dark-main-font
  }
  .icon-theme-light {
    @apply text-light-main-font
  }
  .card-theme-dark {
    @apply bg-dark-secondary-back;
  }
  .card-theme-light {
    @apply bg-light-secondary-back;
  }
  .card-style {
    @apply flex flex-col items-start shadow-md font-poppins rounded-[1.25rem] max-w-[700px] w-full transition ease-in-out;
  }
  .isAll-theme-dark {
    @apply bg-dark-accent border-dark-accent
  }
  .isAll-theme-light {
    @apply bg-light-accent border-light-accent text-light-secondary-back
  }
  .isNotAll-theme-dark {
    @apply border-dark-main-font hover:brightness-110 focus:brightness-110 bg-dark-secondary-back
  }
  .isNotAll-theme-light {
    @apply border-light-main-font hover:brightness-[0.97] focus:brightness-[0.97] bg-light-secondary-back
  }
  .divider-theme-dark {
    @apply bg-dark-back
  }
  .divider-theme-light {
    @apply bg-light-back
  }
  .isMode-theme-dark {
    @apply bg-dark-accent
  }
  .isMode-theme-light {
    @apply bg-light-accent text-light-secondary-back
  }
  .isNotMode-theme-dark {
    @apply bg-dark-secondary-back hover:brightness-110 focus:brightness-110
  }
  .isNotMode-theme-light {
    @apply bg-light-secondary-back hover:brightness-[0.97] focus:brightness-[0.97]
  }
  .isReady-startButton-style {
    @apply text-2xl lg:text-3xl font-poppins font-bold py-5 px-7 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out
  }
  .isNotReady-startButton-style {
    @apply text-2xl lg:text-3xl font-poppins font-bold py-5 px-7 rounded-full focus:outline-none transition ease-in-out scale-75 cursor-not-allowed
  }
  .isNotReady-startButton-theme-dark {
    @apply bg-dark-secondary-back brightness-110 opacity-40
  }
  .isNotReady-startButton-theme-light {
    @apply bg-light-secondary-back brightness-90 opacity-70
  }
</style>