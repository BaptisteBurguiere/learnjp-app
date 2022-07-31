<template lang="">
  <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw]">
    <div class="relative">
      <div :class="isLight ? 'container-theme-light' : 'container-theme-dark'" class="page transition ease-in-out h-[100vh] w-[100vw] p-4 lg:pt-10 flex flex-col items-center">
      
        <header class="w-full max-w-[1024px] flex items-center">
          <router-link to="/" :class="isLight ? 'button-theme-light' : 'button-theme-dark'" class="flex justify-center items-center w-12 h-12 rounded-full hover:scale-110 focus:scale-110 focus:outline-none transition ease-in-out">
            <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-arrow-left" class="w-[70%] h-[70%]"/>
          </router-link>
          <h1 class="transition ease-in-out text-3xl font-poppins font-bold lg:text-4xl ml-4 mr-2">Random</h1>
          <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="transition ease-in-out h-[0.125rem] flex-grow"/>
        </header>

        <main class="flex flex-col text-center flex-grow justify-evenly items-center w-[80%] max-w-[1024px]">
          
          <div :class="isLight ? 'card-theme-light' : 'card-theme-dark'" class="card-style h-[35%]">
            <h1 class="text-2xl font-poppins font-bold lg:text-3xl ml-4 mt-3 mb-5 underline decoration-dark-accent underline-offset-2">Kanji</h1>
            <div class="flex w-36 justify-between items-center self-center">
              <button v-on:click="removeKanji" :class="isLight ? 'plusMinus-theme-light' : 'plusMinus-theme-dark'" class="flex rounded-full transition ease-in-out hover:scale-110 focus:scale-110">
                <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-minus" class="text-2xl justify-center items-center p-2"/>
              </button>
              <p class="font-poppins font-bold text-2xl">{{ nbrKanji }}</p>
              <button v-on:click="addKanji" :class="isLight ? 'plusMinus-theme-light' : 'plusMinus-theme-dark'" class="flex rounded-full transition ease-in-out hover:scale-110 focus:scale-110">
                <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-plus" class="text-2xl justify-center items-center p-2"/>
              </button>
            </div>

            <h1 class="transition ease-in-out text-xl font-poppins font-bold lg:text-2xl ml-4 mt-5 mb-2">Modes</h1>
            <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="h-[1px] w-full mb-[1px]"/>
            <div class="flex w-full h-full justify-center items-center">
              <button v-on:click="modeKanToRomaSwitch" :disabled="!isKanji" :class="modeKanToRomaClassObject" class="rounded-bl-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full">
                <p class="font-notojp text-2xl">火</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
                <p class="font-poppins text-2xl font-bold">hi</p>
              </button>
              <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="w-[1px] h-full"/>
              <button v-on:click="modeRomaToKanSwitch" :disabled="!isKanji" :class="modeRomaToKanClassObject" class="rounded-br-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full ">
                <p class="font-poppins text-2xl font-bold">hi</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
                <p class="font-notojp text-2xl">火</p>
              </button>
            </div>
          </div>

          <div :class="isLight ? 'card-theme-light' : 'card-theme-dark'" class="card-style h-[35%]">
            <h1 class="text-2xl font-poppins font-bold lg:text-3xl ml-4 mt-3 mb-5 underline decoration-dark-accent underline-offset-2">Expression</h1>
            <div class="flex w-36 justify-between items-center self-center">
              <button v-on:click="removeExp" :class="isLight ? 'plusMinus-theme-light' : 'plusMinus-theme-dark'" class="flex rounded-full transition ease-in-out hover:scale-110 focus:scale-110">
                <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-minus" class="text-2xl justify-center items-center p-2"/>
              </button>
              <p class="font-poppins font-bold text-2xl">{{ nbrExp }}</p>
              <button v-on:click="addExp" :class="isLight ? 'plusMinus-theme-light' : 'plusMinus-theme-dark'" class="flex rounded-full transition ease-in-out hover:scale-110 focus:scale-110">
                <font-awesome-icon :class="isLight ? 'icon-theme-light' : 'icon-theme-dark'" icon="fa-solid fa-plus" class="text-2xl justify-center items-center p-2"/>
              </button>
            </div>

            <h1 class="transition ease-in-out text-2xl font-poppins font-bold lg:text-3xl ml-4 mt-3 mb-2">Modes</h1>
            <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="h-[1px] w-full mb-[1px]"/>
            <div class="flex w-full h-full justify-center items-center">
              <button v-on:click="modeJpToFrSwitch" :disabled="!isExp" :class="modeJpToFrClassObject" class="rounded-bl-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full">
                <p class="font-notojp text-2xl">あい</p>
                <font-awesome-icon icon="fa-solid fa-arrow-right-long" class="text-2xl"/>
                <p class="font-poppins text-2xl font-bold">oui</p>
              </button>
              <div :class="isLight ? 'divider-theme-light' : 'divider-theme-dark'" class="w-[1px] h-full"/>
              <button v-on:click="modeFrToJpSwitch" :disabled="!isExp" :class="modeFrToJpClassObject" class="rounded-br-[1.25rem] transition ease-in-out flex items-center justify-evenly flex-grow h-full ">
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
              <h2 class="font-poppins lg:text-2xl self-end">/{{ elementsList.length }}</h2>
            </div>
          </header>

          <main class="flex flex-col text-center flex-grow justify-start items-center w-[95%] max-w-[1024px] mt-7">
            <button v-if="currentElement.type == 'kanji' && currentElement.mode == 'kanToRoma'" v-on:click="showAnswer" :class="cardClassObject" class="flash-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <h1 class="font-notojp text-9xl">{{ currentElement.kanji }}</h1>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <div class="flex items-center mb-4">
                  <h2 class="font-notojp text-3xl">{{ currentElement.lectureJp }}</h2>
                  <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="h-2 w-2 rounded-full mx-4"/>
                  <h2 class="font font-notojp text-3xl">{{ currentElement.lectureSino }}</h2>
                </div>
                <h2 class="text-xl">{{ currentElement.traduction }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentElement.commentaire }}</p>
                </div>
              </div>
            </button>
            <button v-else-if="currentElement.type == 'kanji' && currentElement.mode == 'romaToKan'" v-on:click="showAnswer" :class="cardClassObject" class="flash-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <div class="flex items-center">
                  <h1 class="font-notojp text-5xl">{{ currentElement.lectureJp }}</h1>
                  <div :class="isLight ? 'line-theme-light' : 'line-theme-dark'" class="h-3 w-3 rounded-full mx-6"/>
                  <h1 class="font font-notojp text-5xl">{{ currentElement.lectureSino }}</h1>
                </div>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <h2 class="font-notojp text-4xl mb-4">{{ currentElement.kanji }}</h2>
                <h2 class="text-xl">{{ currentElement.traduction }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentElement.commentaire }}</p>
                </div>
              </div>
            </button>
            <button v-else-if="currentElement.type == 'expression' && currentElement.mode == 'jpToFr'" v-on:click="showAnswer" :class="cardClassObject" class="flash-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <h1 class="font-notojp text-2xl">{{ currentElement.expression }}</h1>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <h2 v-if="currentElement.lecture != ''" class="font-notojp text-xl mb-4">{{ currentElement.lecture }}</h2>
                <h2 class="text-xl">{{ currentElement.traduction }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentElement.commentaire }}</p>
                </div>
              </div>
            </button>
            <button v-else-if="currentElement.type == 'expression' && currentElement.mode == 'frToJp'" v-on:click="showAnswer" :class="cardClassObject" class="flash-card-style p-2 mb-4">
              <div class="flex items-center h-1/2">
                <h1 class="text-2xl">{{ currentElement.traduction }}</h1>
              </div>
              <div :class="isShowAnswer ? 'h-1/2 opacity-100 transition-all ease-in-out' : 'h-0 opacity-0'" class="flex flex-col justify-start">
                <h2 class="font-notojp text-xl mb-4">{{ currentElement.expression }}</h2>
                <h2 class="font-notojp text-xl">{{ currentElement.lecture }}</h2>
                <div class="flex flex-grow items-end mb-4 justify-center">
                  <p>{{ currentElement.commentaire }}</p>
                </div>
              </div>
            </button>

            <button v-if="currentId < elementsList.length" v-on:click="next" :class="nextClassObject" class="font-poppins text-xl rounded-full py-4 px-6 hover:scale-110 focus:scale-110 focus:outline-none">Suivant</button>
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
          isModeRomaToKan: false,
          isModeKanToRoma: false,
          isModeFrToJp: false,
          isModeJpToFr: false,
          isReady: false,
          isStarted: false,
          isStarting: false,
          currentId: 1,
          currentElement: null,
          isShowAnswer: false,
          nbrKanji: 20,
          nbrExp: 20,
          isKanji: true,
          isExp: true,
          elementsList: [],
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

        async getKanji() {
          var kanjiList = []
          const URL = "https://learnjp-api.bburguiere.workers.dev/getKanjiFilter"
          await axios.post(URL)
          .then(response => {
            var allKanjiList = []
            const kanji_obj = response.data.results
            for (var i in kanji_obj) {
              var kanji = {}
              kanji.type = "kanji"
              kanji.kanji = kanji_obj[i].properties["Kanji"].rich_text[0].plain_text
              kanji.traduction = kanji_obj[i].properties["Traduction"].title[0].plain_text
              kanji.lectureJp = kanji_obj[i].properties["Lecture purement japonaise"].rich_text[0].plain_text
              kanji.lectureSino = kanji_obj[i].properties["Lecture sino-japonaise"].rich_text[0].plain_text
              if (kanji_obj[i].properties["Commentaire"].rich_text.length > 0) {
                kanji.commentaire = kanji_obj[i].properties["Commentaire"].rich_text[0].plain_text
              }
              else {
                kanji.commentaire = ""
              }
              allKanjiList.push(kanji)
            }

            allKanjiList = this.shuffle(allKanjiList)
            var nbrKanjiMax = null
            if (allKanjiList.length < this.nbrKanji) {
              nbrKanjiMax = allKanjiList.length
            }
            else {
              nbrKanjiMax = this.nbrKanji
            }
            if (this.isModeKanToRoma && this.isModeRomaToKan) {
              for (var i = 0; i < nbrKanjiMax/2; i++) {
                allKanjiList[i].mode = "kanToRoma"
                kanjiList.push(allKanjiList[i])
              }
              for (var i = nbrKanjiMax/2; i < nbrKanjiMax; i++) {
                allKanjiList[i].mode = "romaToKan"
                kanjiList.push(allKanjiList[i])
              }
            }
            else if (this.isModeKanToRoma) {
              for (var i = 0; i < nbrKanjiMax; i++) {
                allKanjiList[i].mode = "kanToRoma"
                kanjiList.push(allKanjiList[i])
              }
            }
            else {
              for (var i = 0; i < nbrKanjiMax; i++){
                allKanjiList[i].mode = "romaToKan"
                kanjiList.push(allKanjiList[i])
              }
            }
          })
          return kanjiList
        },

        async getExp() {
          var expList = []
          const URL = "https://learnjp-api.bburguiere.workers.dev/getExpFilter"
          await axios.post(URL)
          .then(response => {
            var allExpList = []
            const exp_obj = response.data.results
            for (var i in exp_obj) {
              var exp = {}
              exp.type = "expression"
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
              allExpList.push(exp)
            }
            
            allExpList = this.shuffle(allExpList)
            var nbrExpMax = null
            if (allExpList.length < this.nbrExp) {
              nbrExpMax = allExpList.length
            } 
            else {
              nbrExpMax = this.nbrExp
            }
            if (this.isModeJpToFr && this.isModeFrToJp) {
              for (var i = 0; i < nbrExpMax/2; i++) {
                allExpList[i].mode = "jpToFr"
                expList.push(allExpList[i])
              }
              for (var i = nbrExpMax/2; i < nbrExpMax; i++) {
                allExpList[i].mode = "frToJp"
                expList.push(allExpList[i])
              }
            }
            else if (this.isModeJpToFr) {
              for (var i = 0; i < nbrExpMax; i++) {
                allExpList[i].mode = "jpToFr"
                expList.push(allExpList[i])
              }
            }
            else {
              for (var i = 0; i < nbrExpMax; i++){
                allExpList[i].mode = "frToJp"
                expList.push(allExpList[i])
              }
            }
          })
          return expList
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

        isReadyCheck() {
          if (this.isKanji) {
            if (this.isModeKanToRoma || this.isModeRomaToKan) {
              if (this.isExp) {
                if (this.isModeFrToJp || this.isModeJpToFr) {
                  this.isReady = true
                }
                else {
                  this.isReady = false
                }
              }
              else {
                this.isReady = true
              }
            }
            else {
              this.isReady = false
            }
          }
          else if (this.isExp) {
            if (this.isModeFrToJp || this.isModeJpToFr) {
              this.isReady = true
            }
            else {
              this.isReady = false
            }
          }
          else {
            isReady = false
          }
        },

        async start() {
          this.isStarting = true
          if (this.isKanji && this.isExp) {
            var [kanjiList, expList] = await Promise.all([this.getKanji(), this.getExp()])
            this.elementsList = this.shuffle(kanjiList.concat(expList))
            this.currentElement = this.elementsList[0]
            this.isStarted = true
          }
          else if (this.isKanji) {
            var kanjiList = await this.getKanji()
            this.elementsList = this.shuffle(kanjiList)
            this.currentElement = this.elementsList[0]
            this.isStarted = true
          }
          else {
            var expList = await this.getExp()
            this.elementsList = this.shuffle(expList)
            this.currentElement = this.elementsList[0]
            this.isStarted = true
          }

        },
        close() {
          this.elementsList = []
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
          if (this.currentId < this.elementsList.length){
            this.currentId += 1
            this.currentElement = this.elementsList[this.currentId-1]
          }
        },

        addKanji() {
          this.nbrKanji += 10
          this.isKanji = true

          this.isReadyCheck()
        },
        
        removeKanji() {
          if (this.nbrKanji > 0) {
            this.nbrKanji -= 10
          }
          if (this.nbrKanji == 0) {
            this.isKanji = false
            this.isModeKanToRoma = false
            this.isModeRomaToKan = false
          }

          this.isReadyCheck()
        },

        addExp() {
          this.nbrExp += 10
          this.isExp = true
          
          this.isReadyCheck()
        },
        
        removeExp() {
          if (this.nbrExp > 0) {
            this.nbrExp -= 10
          }
          if (this.nbrExp == 0) {
            this.isExp = false
            this.isModeFrToJp = false
            this.isModeJpToFr = false
          }

          this.isReadyCheck()
        }
      },
      components: {
        ListElement
      },
      computed: {
        modeRomaToKanClassObject() {
          return {
            'isMode-theme-dark': this.isModeRomaToKan && !this.isLight && this.isKanji,
            'isMode-theme-light': this.isModeRomaToKan && this.isLight && this.isKanji,
            'isNotMode1-theme-dark hover:brightness-110 focus:brightness-110': !this.isModeRomaToKan && !this.isLight && this.isKanji,
            'isNotMode1-theme-light hover:brightness-[0.97] focus:brightness-[0.97]': !this.isModeRomaToKan && this.isLight && this.isKanji,
            'isNotMode1-theme-dark': !this.isLight && !this.isKanji,
            'isNotMode1-theme-light': this.isLight && !this.isKanji
          }
        },
        modeKanToRomaClassObject() {
          return {
            'isMode-theme-dark': this.isModeKanToRoma && !this.isLight && this.isKanji,
            'isMode-theme-light': this.isModeKanToRoma && this.isLight && this.isKanji,
            'isNotMode1-theme-dark hover:brightness-110 focus:brightness-110': !this.isModeKanToRoma && !this.isLight && this.isKanji,
            'isNotMode1-theme-light hover:brightness-[0.97] focus:brightness-[0.97]': !this.isModeKanToRoma && this.isLight && this.isKanji,
            'isNotMode1-theme-dark': !this.isLight && !this.isKanji,
            'isNotMode1-theme-light': this.isLight && !this.isKanji
          }
        },
        modeFrToJpClassObject() {
          return {
            'isMode-theme-dark': this.isModeFrToJp && !this.isLight && this.isExp,
            'isMode-theme-light': this.isModeFrToJp && this.isLight && this.isExp,
            'isNotMode1-theme-dark hover:brightness-110 focus:brightness-110': !this.isModeFrToJp && !this.isLight && this.isExp,
            'isNotMode1-theme-light hover:brightness-[0.97] focus:brightness-[0.97]': !this.isModeFrToJp && this.isLight && this.isExp,
            'isNotMode1-theme-dark': !this.isLight && !this.isExp,
            'isNotMode1-theme-light': this.isLight && !this.isExp
          }
        },
        modeJpToFrClassObject() {
          return {
            'isMode-theme-dark': this.isModeJpToFr && !this.isLight && this.isExp,
            'isMode-theme-light': this.isModeJpToFr && this.isLight && this.isExp,
            'isNotMode1-theme-dark hover:brightness-110 focus:brightness-110': !this.isModeJpToFr && !this.isLight && this.isExp,
            'isNotMode1-theme-light hover:brightness-[0.97] focus:brightness-[0.97]': !this.isModeJpToFr && this.isLight && this.isExp,
            'isNotMode1-theme-dark': !this.isLight && !this.isExp,
            'isNotMode1-theme-light': this.isLight && !this.isExp
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
        },
      }
  }
</script>
<style lang="css">
  .plusMinus-theme-dark {
    @apply bg-dark-secondary-back brightness-110 hover:brightness-125 focus:brightness-125 shadow-md hover:shadow-lg focus:shadow-lg ;
  }
  .plusMinus-theme-light {
    @apply bg-light-secondary-back brightness-[0.97] hover:brightness-[0.95] focus:brightness-[0.95] shadow-md hover:shadow-lg focus:shadow-lg;
  }
  .isNotMode1-theme-dark {
    @apply bg-dark-secondary-back
  }
  .isNotMode1-theme-light {
    @apply bg-light-secondary-back
  }
</style>