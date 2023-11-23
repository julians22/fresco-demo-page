<script lang="ts" setup>
enum Theme {
  black = 'black',
  cappucino = 'cappucino'
} 

import { useUserThemeStore } from '@/store/useUserThemeStore';

const userThemeStore = useUserThemeStore();

const userTheme = computed(() => userThemeStore.theme);

const enableCustomLayout = (theme:Theme) => {
  userThemeStore.setTheme(theme)
}

</script>

<template>
  <Transition>
    <header class="navigation" :class="userTheme" v-if="userTheme">
      <div class="max-w-7xl mx-auto">
        <ul class="flex items-baseline justify-center space-x-20">
          <li class="nav-item nav-active">
            <a>BERANDA</a>
          </li>
          <li class="nav-item">
            <a>PRODUK</a>
          </li>
          <li class="nav-item">
            <a>ARTIKEL</a>
          </li>
          <li class="w-[200px] h-[60px] relative z-50">
            <a><img src="~/assets/images/logo.png" class="absolute top-[20%]"/></a>
          </li>
          <li class="nav-item">
            <a>AKTIVITAS</a>
          </li>
          <li class="nav-item">
            <a>GALERI</a>
          </li>
          <li class="nav-item">
            <a>HUBUNGI</a>
          </li>
        </ul>
      </div>
      <Transition name="slide" mode="out-in">
        <div class="absolute right-10 top-2/4 border-2 border-white shadow-lg rounded-full overflow-hidden z-50 cursor-pointer hover:scale-105 hover:translate-x-2 transition-transform" v-if="userTheme && userTheme == Theme.black">
          <div class="w-24 h-24 flex justify-center items-center bg-[#fdc64a]" @click="enableCustomLayout(Theme.cappucino)">
            <img src="~/assets/images/theme-changer-cappuccino.png" class="max-w-full"/>
          </div>
        </div>
      </Transition>
      <Transition name="slide" mode="out-in">
        <div class="absolute right-10 top-2/4 border-2 border-white shadow-lg rounded-full overflow-hidden z-50 cursor-pointer hover:scale-105 hover:translate-x-2 transition-transform" v-if="userTheme && userTheme == Theme.cappucino">
          <div class="w-24 h-24 flex justify-center items-center bg-[#3b2314]" @click="enableCustomLayout(Theme.black)">
              <img src="~/assets/images/theme-changer-black-coffee.png" class="max-w-full"/>
          </div>
        </div>
      </Transition>
    </header>
  </Transition>
</template>

<style scoped>

.navigation{
    @apply px-4 py-3 w-full hidden relative;
}

.navigation .nav-item{
    @apply relative text-white font-bold cursor-pointer;
}

.navigation.black {
    @apply bg-black block;
}
.navigation.black .nav-item {
    @apply text-white transition-all ease-in duration-300;
}
.navigation.black .nav-item:hover,
.navigation.black .nav-active
{
    @apply text-[#f8c249];
}
.navigation.black .nav-item::after{
  content: " ";
  @apply absolute h-1 -bottom-[10px] w-full inset-x-0;
}
.navigation.black .nav-item:hover::after,
.navigation.black .nav-active::after
{
  @apply bg-red-500;
}

.navigation.cappucino {
    @apply bg-[#fdc64b] block;
}
.navigation.cappucino .nav-item {
    @apply text-slate-900;
}
.navigation.cappucino .nav-item:hover,
.navigation.cappucino .nav-item.nav-active {
    @apply text-[#006738];
}
.navigation.cappucino .nav-item::after{
  content: " ";
  @apply absolute h-1 -bottom-[10px] w-full inset-x-0;
}
.navigation.cappucino .nav-item:hover::after,
.navigation.cappucino .nav-item.nav-active::after{
  @apply bg-red-500;
}

@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}

.slide-leave-active{
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) reverse;
}

.slide-enter-active {
  animation: slide-in-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}


</style>
