<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-black/20">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/section">Section</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
  nav {
    display: flex;
    gap: 1rem;
  }
</style>
