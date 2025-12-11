<script setup>
import SocialIcon from './SocialIcon.vue'
import FooterNavLink from './FooterNavLink.vue'

const navLinks = [
  { to: '/qna', label: 'Q&A' },
  { to: '/about', label: '關於我們' },
  { to: '/policy', label: '隱私政策' },
  { to: '/notice', label: '使用者條款' },
]

const socialLinks = [
  { icon: 'line', href: 'https://line.me' },
  { icon: 'youtube', href: 'https://youtube.com' },
  { icon: 'facebook', href: 'https://facebook.com' }
]
</script>

<template>
  <footer class="bg-black py-20 lg:py-24">
    <div class="max-w-[1320px] px-3 w-full mx-auto">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 lg:gap-4">
        <div class="">
          <a href="" class="max-w-48 lg:max-w-[270px] w-full block leading-0 mb-10 lg:mb-8"><img src="/src/assets/images/logo-white.png" alt="ZOBAA"></a>
          <nav class="flex gap-4 lg:gap-8 flex-col lg:flex-row">
            <FooterNavLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              :label="link.label"
            />
          </nav>
        </div>
        <div>
          <ul class="mb-4 flex lg:justify-end gap-4">
            <SocialIcon
              v-for="social in socialLinks"
              :key="social.icon"
              :icon="social.icon"
              :href="social.href"
            />
          </ul>
          <p class="text-neutral-15 text-sm">copyright © 2025 ZOBAA 旅遊網站 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
