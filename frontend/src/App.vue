<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="flex flex-col min-h-screen w-full">
    <Header />

    <main class="flex-1 w-full">
      <RouterView />
    </main>

    <Footer class="mt-auto" />
  </div>
</template>
