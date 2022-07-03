import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
    id: 'theme',
    state: () => ({
        theme: 'dark'
    }),
    actions: {
        getTheme() {
            if (localStorage.theme) {
                this.theme = localStorage.theme
            }
            else {
                localStorage.theme = this.theme
            }
        }
    }
})