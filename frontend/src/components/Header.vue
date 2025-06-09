<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <header class="sticky top-0 w-full z-50 backdrop-blur-md bg-transparent text-[var(--text)]">
    <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <!-- Logo + Navigation -->
      <div class="flex items-center gap-8">
        <a href="/" class="font-bold text-xl tracking-tight transition" style="color: var(--link)">
          Nexspro
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="#portfolio" class="transition" style="color: var(--link)"> Portfolio </a>
          <a href="#contact" class="transition" style="color: var(--link)"> Contact </a>
        </nav>
      </div>

      <!-- Login / Signup / Theme toggle -->
      <div class="flex items-center gap-4 text-sm">
        <a href="#login" class="transition" style="color: var(--link)"> Login </a>
        <a
          href="#signup"
          class="px-5 py-1.5 rounded-full font-medium text-sm border transition"
          style="border-color: var(--border); color: var(--text); background-color: transparent"
        >
          Sign up
        </a>

        <!-- Toggle Dark/Light -->
        <button
          @click="toggleDark()"
          class="w-6 h-6 hover:opacity-80 transition"
          aria-label="Toggle dark mode"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M12 3v1m0 16v1m8.66-8.66h-1M4.34 12h-1m15.36 5.66l-.71-.71M6.05 6.05l-.71-.71m12.02 0l-.71.71M6.05 17.95l-.71.71M12 8a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
