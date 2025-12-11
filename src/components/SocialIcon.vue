<script setup>
import LineIcon from './icons/LineIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'
import FacebookIcon from './icons/FacebookIcon.vue'

defineProps({
  icon: {
    type: String,
    required: true,
    validator: (value) => ['line', 'youtube', 'facebook'].includes(value)
  },
  href: {
    type: String,
    required: true
  }
})

const iconComponents = {
  line: LineIcon,
  youtube: YoutubeIcon,
  facebook: FacebookIcon
}
</script>

<template>
  <li class="">
    <a :href="href" target="_blank" rel="noopener noreferrer" class="group flex w-10 h-10 rounded-full items-center justify-center border border-white hover:border-yellow-400 transition-colors duration-300">
      <component :is="iconComponents[icon]" />
    </a>
  </li>
</template>
