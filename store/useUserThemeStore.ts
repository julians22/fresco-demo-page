import { defineStore } from "pinia";

enum Theme {
    black = 'black',
    cappucino = 'cappucino'
} 

export const useUserThemeStore = defineStore("userTheme", () => {
    const theme = ref<Theme|undefined>(undefined);

    const setTheme = (user_theme:Theme) => {
        theme.value = user_theme;
    }


    watch(theme, () => {
        if (theme.value !== undefined) {
            localStorage.setItem('user_theme', theme.value);
        }
    })

    return {theme, setTheme}
})