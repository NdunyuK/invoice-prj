<script setup lang="ts">
import {  RouterView, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'
const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const route = useRoute()

const isHomePage = computed(() => route.path === '/')
</script>

<template>
  <div>
    <header v-show="isHomePage"
    :class="[
      'fixed top-0 left-0 w-full bg-rose-50 transition-shadow duration-300 p-8',
      scrolled ? 'shadow-md' : 'shadow-none'
    ]"
    >
        <nav class="flex gap-10 justify-end pr-20">
          <a href="#features">Features</a>
          <a href="#example">Example</a>
          <a href="#pricing">Pricing</a>
        </nav>
    </header>
    <main>
      <RouterView />
    </main>

  </div>

</template>
