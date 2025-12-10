<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue';
import Footer from './components/FooterView.vue';
</script>

<template>
  <div class="container">
    <Header></Header>
      <main class="bg-blue-30">
        <RouterView />
      </main>
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .container {
    max-width: 1320px;
    width: 100%;
    margin: 0 auto;
    padding: 0 .75rem;
  }
</style>
