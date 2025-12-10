<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { RouterView } from 'vue-router'
import Header from './components/HeaderView.vue';
import Footer from './components/FooterView.vue';
</script>

<template>
  <Header></Header>
    <main>
      <RouterView />
    </main>
  <Footer></Footer>
</template>


