<script setup>
import { useRoute } from 'vue-router'

defineProps({
  to: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
})

const route = useRoute()
</script>

<template>
  <router-link
    :to="to"
    :class="{ 'text-yellow-400': route.path === to }"
    class="hover:text-yellow-400 text-white transition"
  >
    {{ label }}
  </router-link>
</template>

<style scoped>
</style>
