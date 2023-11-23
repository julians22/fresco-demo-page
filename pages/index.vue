<script lang="ts" setup>


  import { useUserThemeStore } from '@/store/useUserThemeStore';
import Lenis from '@studio-freight/lenis';

  enum Theme {
    black = 'black',
    cappucino = 'cappucino'
  } 

  const Post = ref(null);

  onMounted(() => {
    let lenis = new Lenis()

    lenis.on('scroll', (e:any) => {
      console.log(e)
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
})
  
  const userThemeStore = useUserThemeStore();

  const userTheme = computed(() => userThemeStore.theme);

  const enableCustomLayout = (theme:Theme) => {
    userThemeStore.setTheme(theme)
  }

  onBeforeMount(() => {
    let storedTheme = localStorage.getItem('user_theme');
    (storedTheme != null) && enableCustomLayout(storedTheme as Theme)
  })

  useSeoMeta({
    title: 'Kopi Fresco Fresh Kopinya',
    ogTitle: 'Kopi Fresco Fresh Kopinya'
  });

</script>

<template>
  <div>
      <header v-if="userTheme == undefined" class="relative">
          <img src="~/assets/images/logo.png" alt="Fresco Logo" width="200" class="fixed top-2 left-1/2 right-1/2 w-[200px] z-[3] transform -translate-x-1/2">
          <div class="flex flex-nowrap w-full h-[100vh] relative overflow-hidden">
              <div class="bg-[#eb222a] w-1/2 h-full relative transform transition-all cursor-pointer ease-in-out duration-700 hover:w-2/3">
                  <div class="relative h-[80vh] bg-cover bg-no-repeat bg-center w-full overflow-hidden cursor-pointer" @click="enableCustomLayout(Theme.black)">
                    <img src="~/assets/images/left.jpg" alt="" class="w-full h-full object-cover object-left transition-transform duration-500 ease-in">
                  </div>

                  <div class="absolute bottom-0 inset-x-0">
                      <img src="~/assets/images/black-coffee-width.png" alt="" class="w-full h-auto z-[5] mx-auto">
                  </div>
              </div>
              <div class="bg-[#fdc64b] w-1/2 h-full relative transform transition-all cursor-pointer ease-in-out duration-700 hover:w-2/3">
                  <div class="relative h-[80vh] bg-cover bg-no-repeat bg-center w-full overflow-hidden cursor-pointer" @click="enableCustomLayout(Theme.cappucino)">
                    <img src="~/assets/images/right.jpg" alt="" class="w-full h-full object-cover object-left transition-transform duration-500 ease-in">
                  </div>

                  <div class="absolute bottom-0 inset-x-0">
                      <img src="~/assets/images/cappuccino-width.png" alt="" class="w-full h-auto z-[5] mx-auto">
                  </div>
              </div>
          </div>
          <img src="~/assets/images/pilih-mana.png" alt="Fresco Pilih Mana" width="400" class="fixed bottom-5 left-1/2 right-1/2 w-[200px] z-[3] transform -translate-x-1/2">
      </header>

      <div class="flex flex-col space-y-2 fixed top-0 right-0 mr-4 mt-40 z-40">
        <a href=""><img src="~/assets/images/icons/facebook-width.png" alt="" class="w-10 h-10"></a>
        <a href=""><img src="~/assets/images/icons/instagram-width.png" alt="" class="w-10 h-10"></a>
        <a href=""><img src="~/assets/images/icons/twitter-width.png" alt="" class="w-10 h-10"></a>
        <a href=""><img src="~/assets/images/icons/tiktok-width.png" alt="" class="w-10 h-10"></a>
        <a href=""><img src="~/assets/images/icons/youtube-width.png" alt="" class="w-10 h-10"></a>
      </div>

      <Transition name="right">
        <div v-if="userTheme != undefined && userTheme == Theme.black">
          <section class="bg-[#eb222a]">
            <video autoplay muted loop id="black-coffee" class="relative w-full h-[90vh] object-cover object-bottom">
              <source src="~/assets/videos/black-coffee-video.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </section>
          <BlackCoffee/>
        </div>
      </Transition>
      <Transition name="left">
        <div v-if="userTheme != undefined && userTheme == Theme.cappucino">
          <section class="bg-[#fdc64b]">
            <video autoplay muted loop id="black-coffee" class="relative w-full h-[90vh] object-cover object-bottom">
              <source src="~/assets/videos/cappucinno-video.mp4" type="video/mp4">
              Your browser does not support HTML5 video.
            </video>
          </section>
          <Cappuccino/>
        </div>
      </Transition>

      

      <Footer v-if="userTheme != undefined"/>
  </div>
</template>

<style scoped>

.right-enter-active{
  animation: wipe-in-right 2.5s cubic-bezier(.25, 1, .30, 1) both;
}

.right-leave-from{
  opacity: 0;
}
.left-enter-active{
  animation: wipe-in-left 2.5s cubic-bezier(.25, 1, .30, 1) both;
}
.left-leave-from{
  opacity: 0;
}

@keyframes wipe-in-right {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

@keyframes wipe-in-left {
  from {
    clip-path: inset(0 0 0 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

</style>
