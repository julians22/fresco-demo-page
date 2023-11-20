<script lang="ts" setup>


  import { useUserThemeStore } from '@/store/useUserThemeStore';

  enum Theme {
    black = 'black',
    cappucino = 'cappucino'
  } 
  
  const userThemeStore = useUserThemeStore();

  const userTheme = computed(() => userThemeStore.theme);

  const enableCustomLayout = (theme:Theme) => {
    userThemeStore.setTheme(theme)
  }


</script>

<template>
  <div>
    <header v-if="userTheme == undefined">
        <img src="~/assets/images/logo.png" alt="Fresco Logo" width="200" class="fixed top-2 left-1/2 right-1/2 w-[200px] z-[3] transform -translate-x-1/2">
        <div class="grid grid-cols-2 h-[140vh] relative">
            <div class="bg-red-500 h-full relative group" @click="enableCustomLayout(Theme.black)">
                <div class="relative h-[80vh] bg-cover bg-no-repeat bg-center w-full overflow-hidden cursor-pointer">
                  <img src="~/assets/images/left.jpg" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in">
                </div>
            </div>
            <div class="bg-orange-500 h-full relative group" @click="enableCustomLayout(Theme.cappucino)">
                <div class="relative h-[80vh] bg-cover bg-no-repeat bg-center w-full overflow-hidden cursor-pointer">
                  <img src="~/assets/images/right.jpg" alt="" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in">
                </div>
            </div>
        </div>
    </header>
  </div>
</template>

<style scoped></style>
