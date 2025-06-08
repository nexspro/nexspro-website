<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { checkApiStatus } from '@/api/status'

const status = ref('Chargement...')
onMounted(async () => {
  status.value = await checkApiStatus()
})
</script>

<template>
  <div class="p-4 text-center">
    <h2>Status API</h2>
    <p>{{ status }}</p>
  </div>
</template>
