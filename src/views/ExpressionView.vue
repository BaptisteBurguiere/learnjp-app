<template lang="">
  <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw]">
    <div class="relative">
      <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw] p-4 lg:pt-10 flex flex-col items-center">
      
        <header class="w-full max-w-[1024px] flex items-center">
          <router-link to="/" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="flex justify-center items-center w-12 h-12 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out">
            <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-arrow-left" class="w-[70%] h-[70%]"/>
          </router-link>
          <h1 class="transition ease-in-out text-3xl font-poppins font-bold lg:text-4xl ml-4 mr-2">Expression</h1>
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
              <button v-on:click="modeJpToFrSwitch" :class="modeJpToFrClassObject" class="rounded-bl-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full">
                <p class="font-notojp text-2xl">あい</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
                <p class="font-poppins text-2xl font-bold">oui</p>
              </button>
              <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="w-[1px] h-full"/>
              <button v-on:click="modeFrToJpSwitch" :class="modeFrToJpClassObject" class="rounded-br-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full ">
                <p class="font-poppins text-2xl font-bold">oui</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
                <p class="font-notojp text-2xl">あい</p>
              </button>
            </div>
          </div>

          <div v-if="isStarting" class="h-16 w-16 my-1">
            <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-spinner" class="w-4/5 h-4/5 animate-spin"/>
          </div>
          <button v-else v-on:click="start" :class="startClassObject" :disabled="!isReady">Commencer</button>
        </main>
      </div>
      
      <transition name="startAnim" enter-active-class="animate__animated animate__slideInUp animate__faster" leave-active-class="animate__animated animate__slideOutDown animate__faster">
        <div v-if="isStarted" :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw] p-4 lg:pt-10 flex flex-col items-center">
      
          <header class="w-full max-w-[1024px] flex items-center justify-between">
            <button v-on:click="close" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="flex justify-center items-center w-12 h-12 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out">
              <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-xmark" class="w-[70%] h-[70%]"/>
            </button>
            <div class="flex items-center">
              <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="h-2 w-2 rounded-full"/>
              <h1 class="text-4xl font-poppins font-bold lg:text-5xl ml-2 mr-1">{{ currentId }}</h1>
              <h2 class="font-poppins lg:text-2xl self-end">/{{ expList.length }}</h2>
            </div>
          </header>

          <main class="flex flex-col text-center flex-grow justify-start items-center mb-14 w-[95%] max-w-[1024px] mt-7">
            <button v-if="currentExp.mode == 'jpToFr'" v-on:click="showAnswer" :class="cardClassObject" class="exp-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <h1 class="font-notojp text-2xl">{{ currentExp.expression }}</h1>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <h2 v-if="currentExp.lecture != ''" class="font-notojp text-xl mb-4">{{ currentExp.lecture }}</h2>
                <h2 class="text-xl">{{ currentExp.traduction }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentExp.commentaire }}</p>
                </div>
              </div>
            </button>
            <button v-else v-on:click="showAnswer" :class="cardClassObject" class="exp-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <h1 class="text-2xl">{{ currentExp.traduction }}</h1>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <h2 class="font-notojp text-xl mb-4">{{ currentExp.expression }}</h2>
                <h2 class="font-notojp text-xl">{{ currentExp.lecture }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentExp.commentaire }}</p>
                </div>
              </div>
            </button>

            <button v-if="currentId < expList.length" v-on:click="next" :class="nextClassObject" class="font-poppins text-xl rounded-full py-4 px-6 hover:scale-110 focus:scale-110 focus:outline-none">Suivant</button>
            <button v-else v-on:click="close" :class="nextClassObject" class="font-poppins text-xl rounded-full py-4 px-6 hover:scale-110 focus:scale-110 focus:outline-none">Terminer</button>
          </main>

        </div>
      </transition>
    </div>
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
          isModeFrToJp: false,
          isModeJpToFr: false,
          selectedItems: [],
          isReady: false,
          isStarted: false,
          isStarting: false,
          expList: [],
          currentId: 1,
          currentexp: null,
          isShowAnswer: false,
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
          const URL = "https://learnjp-api.bburguiere.workers.dev/getExpDB"
          this.isLoading = true
          axios.get(URL)
          .then(response => {
            const categories_obj = response.data.properties["Catégorie"].multi_select.options
            for (var i in categories_obj){
              this.categories.push(categories_obj[i].name)
            }
            this.isLoading = false
          })

        },

        getExp(filters) {
          const URL = "https://learnjp-api.bburguiere.workers.dev/getExpFilter"
          axios.post(URL, {
            "filter": filters
          })
          .then(response => {
            const exp_obj = response.data.results
            for (var i in exp_obj) {
              if (this.isModeJpToFr) {
                var exp = {}
                exp.expression = exp_obj[i].properties["Expression"].rich_text[0].plain_text
                exp.traduction = exp_obj[i].properties["Traduction"].title[0].plain_text
                if (exp_obj[i].properties["Lecture"].rich_text.length > 0) {
                  exp.lecture = exp_obj[i].properties["Lecture"].rich_text[0].plain_text
                }
                else {
                  exp.lecture = ""
                }
                if (exp_obj[i].properties["Commentaire"].rich_text.length > 0) {
                  exp.commentaire = exp_obj[i].properties["Commentaire"].rich_text[0].plain_text
                }
                else {
                  exp.commentaire = ""
                }
                exp.mode = "jpToFr"
                this.expList.push(exp)
              }
              if (this.isModeFrToJp) {
                var exp = {}
                exp.expression = exp_obj[i].properties["Expression"].rich_text[0].plain_text
                exp.traduction = exp_obj[i].properties["Traduction"].title[0].plain_text
                if (exp_obj[i].properties["Lecture"].rich_text.length > 0) {
                  exp.lecture = exp_obj[i].properties["Lecture"].rich_text[0].plain_text
                }
                else {
                  exp.lecture = ""
                }
                if (exp_obj[i].properties["Commentaire"].rich_text.length > 0) {
                  exp.commentaire = exp_obj[i].properties["Commentaire"].rich_text[0].plain_text
                }
                else {
                  exp.commentaire = ""
                }
                exp.mode = "FrToJp"
                this.expList.push(exp)
              }
            }
            this.expList = this.shuffle(this.expList)
            this.currentExp = this.expList[0]
            this.isStarted = true
          })
        },

        getFilters() {
          var filters = { "or": [] }
          for (var i in this.selectedItems) {
            var filter = {
              "property": "Catégorie",
              "multi_select": {
                "contains": this.selectedItems[i]
              }
            }
            filters.or.push(filter)
          }
          return filters
        },

        shuffle(array) {
          let currentIndex = array.length,  randomIndex;

          while (currentIndex != 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
              array[randomIndex], array[currentIndex]];
          }

          return array;
        },

        allSwitch() {
          if (this.isAll) {
            this.isAll = false
          }
          else {
            this.isAll = true
          }
        },

        modeFrToJpSwitch() {
          if (this.isModeFrToJp) {
            this.isModeFrToJp = false
          }
          else {
            this.isModeFrToJp = true
          }
          this.isReadyCheck()
        },
        modeJpToFrSwitch() {
          if (this.isModeJpToFr) {
            this.isModeJpToFr = false
          }
          else {
            this.isModeJpToFr = true
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
          if (this.selectedItems.length > 0 && (this.isModeJpToFr == true || this.isModeFrToJp == true)) {
            this.isReady = true
          }
          else {
            this.isReady = false
          }
        },

        start() {
          this.isStarting = true
          var filters = this.getFilters()
          this.getExp(filters)
        },
        close() {
          this.expList = []
          this.currentId = 1
          this.isShowAnswer = false
          this.isStarted = false
          this.isStarting = false
        },

        showAnswer() {
          if (this.isShowAnswer == false) {
            this.isShowAnswer = true
          }
          else {
            this.isShowAnswer = false
          }
        },

        next() {
          this.isShowAnswer = false
          if (this.currentId < this.expList.length){
            this.currentId += 1
            this.currentExp = this.expList[this.currentId-1]
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
        modeFrToJpClassObject() {
          return {
            'isMode-theme-dark': this.isModeFrToJp && !this.isLight,
            'isMode-theme-light': this.isModeFrToJp && this.isLight,
            'isNotMode-theme-dark': !this.isModeFrToJp && !this.isLight,
            'isNotMode-theme-light': !this.isModeFrToJp && this.isLight,
          }
        },
        modeJpToFrClassObject() {
          return {
            'isMode-theme-dark': this.isModeJpToFr && !this.isLight,
            'isMode-theme-light': this.isModeJpToFr && this.isLight,
            'isNotMode-theme-dark': !this.isModeJpToFr && !this.isLight,
            'isNotMode-theme-light': !this.isModeJpToFr && this.isLight,
          }
        },
        startClassObject() {
          return {
            'isNotReady-startButton-style isNotReady-startButton-theme-dark': !this.isReady && !this.isLight,
            'isReady-startButton-style button-theme-dark': this.isReady && !this.isLight,
            'isNotReady-startButton-style isNotReady-startButton-theme-light': !this.isReady && this.isLight,
            'isReady-startButton-style button-theme-light': this.isReady && this.isLight,
          }
        },
        nextClassObject() {
          return {
            'h-0 opacity-0 button-theme-dark': !this.isShowAnswer && !this.isLight,
            'opacity-100 button-theme-dark transition-all ease-in-out': this.isShowAnswer && !this.isLight,
            'h-0 opacity-0 button-theme-light': !this.isShowAnswer && this.isLight,
            'opacity-100 button-theme-light transition-all ease-in-out': this.isShowAnswer && this.isLight,
          }
        },
        cardClassObject() {
          return {
            'h-full card-theme-dark': !this.isShowAnswer && !this.isLight,
            'h-4/5 card-theme-dark transition-all ease-in-out': this.isShowAnswer && !this.isLight,
            'h-full card-theme-light': !this.isShowAnswer && this.isLight,
            'h-4/5 card-theme-light transition-all ease-in-out': this.isShowAnswer && this.isLight,
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
  .exp-card-style {
    @apply flex flex-col justify-center items-center shadow-md font-poppins rounded-[1.25rem] max-w-[700px] w-full;
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