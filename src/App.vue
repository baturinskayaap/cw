<script setup>
import HeaderCmp from './components/HeaderCmp.vue'
import FooterCmp from './components/FooterCmp.vue'
</script>

<template>
  <header>
    <HeaderCmp />
  </header>

  <main>
    <RouterView />
  </main>

  <footer>
    <FooterCmp />
  </footer>
</template>
