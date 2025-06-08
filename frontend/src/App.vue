<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header
    class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700"
  >
    <nav class="space-x-4">
      <RouterLink to="/" class="text-blue-500 hover:underline">Home</RouterLink>
      <RouterLink to="/status" class="text-blue-500 hover:underline">Status</RouterLink>
    </nav>
  </header>

  <main class="p-4">
    <RouterView />
  </main>
</template>
