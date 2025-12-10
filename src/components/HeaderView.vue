<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import LogoIcon from './icons/LogoIcon.vue';

const isScrolled = ref(false)
const isSticky = ref(false)
const headerRef = ref(null)
const headerHeight = ref(0)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0

  if (headerHeight.value) {
    isSticky.value = window.scrollY > headerHeight.value + 50
  }
}

const measureHeaderHeight = () => {
  if (headerRef.value) {
    headerHeight.value = headerRef.value.offsetHeight
  }
}

onMounted(() => {
  measureHeaderHeight()
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', measureHeaderHeight)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', measureHeaderHeight)
})
</script>

<template>
  <header ref="headerRef" :class="{ 'scrolled': isScrolled, 'sticky-active': isSticky }">
    <div class="max-w-[1320px] mx-auto w-full py-4">
      <nav class="flex items-center justify-between gap-6">
        <h1 class="leading-0 block">
          <RouterLink to="/" class=""><LogoIcon /></RouterLink>
        </h1>
        <div class="flex-1 flex items-center justify-between">
          <div>
            <form action="">
              <input type="text" placeholder="搜尋景點、地點或城市">
            </form>
          </div>
          <div>
            <button type="button" class="bg-primary-100 text-white rounded-xl px-8 py-4 font-semibold font-poppins hover:cursor-pointer hover:bg-primary-120 transition-all duration-300">登入 / 註冊</button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
  header {
    position: static;
    z-index: 100;
    border-bottom: 0.5px solid transparent;
    transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  }

  header.sticky-active {
    position: sticky;
    top: 0;
  }

  header.scrolled {
    border-bottom: 0.5px solid var(--Neutral-40, #ECECEC);
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(4px);
  }
</style>
