<script lang="ts" setup>
import AOS from 'aos';
import 'aos/dist/aos.css';

import boardAsset from '~/assets/images-alt-2/board.jpg';
import Lenis from '@studio-freight/lenis'

import leftHandGlass from '~/assets/images-alt-2/left-hand.png';
import rightHandGlass from '~/assets/images-alt-2/right-hand.png';


definePageMeta({
  layout: 'alt-2',
  pageTransition: {
    name: 'fadein-flip',
    mode: 'out-in',
    onBeforeEnter: (el) => {
      console.log('Before enter...')
    },
    onEnter: (el, done) => {},
    onAfterEnter: (el) => {}
  }
});

onMounted(() => {

    AOS.init()

    let lenis = new Lenis()

    lenis.on('scroll', (e:any) => {
      console.log(e)
    })

    function raf(time:any) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);
})

</script>

<template>
  <div style="min-height: calc(100vh - 128px);" class="transition-all ease-in overflow-x-hidden">
    <div class="relative pt-6">
      <img src="~/assets/images-alt-2/cappucinno-home-island-width.png" alt="" class="mx-auto" data-aos="fade-in" data-aos-delay="600">
    </div>
    <div class="">

      <div class="text-[#592B19] font-poppins mb-10">

        <div class="w-7/12 ml-auto">
          <h1 class="text-5xl font-bold mb-2" data-aos="fade-in">
            Cappuccinonya <br> Perfecto!
          </h1>
          <p class="font-semibold text-xl" data-aos="fade-in" data-aos-delay="400">
            Kopinya berasa dengan soft foam dan choco granule yang crunchy, <br> bikin Fresco Cappuccino asli mantulnya <br> buat jadi pilihan ngopi bareng circle lo.
          </p>
        </div>
      </div>
      <div class="h-[20rem] relative" 
        :style="{
          // backgroundPosition: 'bottom',
          // backgroundSize: 'contain',
          // backgroundRepeat: 'repeat-x',
          // backgroundImage: `url(${boardAsset})`,
        }">
        
        <img src="~/assets/images-alt-2/grannul.png" alt="" 
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="800"
          data-aos-anchor-placement="bottom-bottom"
          class="absolute" :style="{
            right: '0rem',
            bottom: '26rem',
            zIndex: '1',
            // width: '13rem'
          }">
        <img src="~/assets/images-alt-2/granul-2.png" alt=""
          data-aos="zoom-in-left"
          data-aos-duration="1500"
          data-aos-delay="700"
          data-aos-offset="100"
          class="absolute" :style="{
            bottom: '14rem',
            right: '5rem',
            // width: '6rem',
          }">
        <img :src="boardAsset" alt="" class="absolute bottom-0 inset-x-0" data-aos="fade-right" data-aos-duration="1500"
        >
        <img src="~/assets/images-alt-2/slide-to-left-width.png" alt="" class="absolute right-0 bottom-14"
          data-aos="slide-left" 
          data-aos-duration="1500"
          data-aos-delay="600"
          data-aos-offset="100"
          >
        <img src="~/assets/images-alt-2/slide-to-right-width.png" alt="" class="absolute left-0 bottom-14" 
          data-aos="slide-right" 
          data-aos-duration="1500"
          data-aos-delay="300"
          data-aos-offset="200"
          >
      </div>

    </div>


    <div class="h-screen bg-green-700 relative z-[1]">

      <div class="h-1/2 relative">
        <div class="h-10"></div>
        <div data-aos="fade-left" data-aos-duration="1200">
          <h5 class="text-center text-[340px] text-white font-courgette font-semibold -rotate-12 tracking-wider" >Cappuccino</h5>
        </div>
      </div>
      
    </div>
    
    <div class="min-h-screen bg-[#f9a818] relative z-[2]">

    <img src="~/assets/images-alt-2/blanket.png" alt="" class="absolute right-0 top-0">


      <div class="container mx-auto pt-24 relative z-[1]">
        <div class="flex">
          <div class="w-2/5 font-poppins pr-8">
            <h1 class="text-6xl font-bold text-[#592B19] mb-4">Kapal Api <br>Fresco, Fresh <br>Kopinya.</h1>
            <p class="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perferendis voluptatum culpa consequatur inventore a aliquid? Odit optio quam est eius quae distinctio eum eligendi veritatis! Inventore libero ratione quae, maiores, fugiat vel provident atque aliquam, iure doloremque ea? Blanditiis.
            </p>
            <p class="mb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore perferendis voluptatum culpa consequatur inventore a aliquid? Odit optio quam est eius quae distinctio eum eligendi veritatis! Inventore libero ratione quae, maiores, fugiat vel provident atque aliquam, iure doloremque ea? Blanditiis.
            </p>
          </div>
          <div class="w-3/5">
            <div>
              <img src="~/assets/images-alt-2/vids.jpg" alt="" class="w-full">
            </div>
          </div>
        </div>
      </div>




      <div class="grid grid-cols-2 w-full h-full absolute bottom-[90%] z-0">
        <div class="w-full bg-no-repeat bg-right-top bg-cover" data-aos="slide-right" data-aos-duration="1000" :style="{
          backgroundImage: `url(${leftHandGlass})`
        }">
          <!-- <img src="~/assets/images-alt-2/glass-left.png" alt="" class="w-full"> -->
        </div>
        <div class="w-full bg-no-repeat bg-left-top bg-cover" data-aos="slide-left" data-aos-duration="1000" :style="{
          backgroundImage: `url(${rightHandGlass})`
        }">
          <!-- <img src="~/assets/images-alt-2/glass-right.png" alt="" class="w-full"> -->
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped></style>
