<script lang="ts" setup>

import { useUserThemeStore } from '@/store/useUserThemeStore';

const userThemeStore = useUserThemeStore();

const userTheme = computed(() => userThemeStore.theme);

</script>

<template>
  <header class="navigation" :class="userTheme">
    <div class="max-w-7xl mx-auto">
      <ul class="flex items-baseline justify-between space-x-6">
        <li class="nav-item">
          <a>BERANDA</a>
        </li>
        <li class="nav-item">
          <a>PRODUK</a>
        </li>
        <li class="nav-item">
          <a>ARTIKEL</a>
        </li>
        <li class="w-[200px] h-[90px] relative">
          <a><img src="~/assets/images/logo.png" class="absolute top-[45%]"/></a>
        </li>
        <li class="nav-item">
          <a>AKTIVITAS</a>
        </li>
        <li class="nav-item">
          <a>GALERY</a>
        </li>
        <li class="nav-item">
          <a>HUBUNGI</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped>

.navigation{
    @apply px-4 py-3 w-full hidden;
}

.navigation .nav-item{
    @apply relative text-white font-bold;
}

.navigation.black {
    @apply bg-black block;
}

.navigation.black .nav-item {
    @apply text-white font-bold cursor-pointer;
}

.navigation.black .nav-item::after{
  content: " ";
  @apply absolute h-1 -bottom-[10px] w-full inset-x-0;
}
.navigation.black .nav-item:hover::after{
  @apply bg-red-500;
}

.navigation.cappucino {
    @apply bg-amber-900 block;
}

</style>
