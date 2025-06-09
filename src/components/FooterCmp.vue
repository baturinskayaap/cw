<template>
  <footer class="footer">
    <n-space justify="center">
      <n-button text v-for="link in links" :key="link">
        {{ link }}
      </n-button>
    </n-space>

    <n-space justify="center">
      <n-button circle v-for="(icon, name) in socialIcons" :key="name">
        <n-icon :component="icon" />
      </n-button>
    </n-space>

    <n-divider />

    <n-grid :cols="isMobile ? 1 : 3" responsive="screen" :x-gap="12" align="center">
      <n-grid-item>
        <p>© 2025 Monito. All rights reserved</p>
      </n-grid-item>
      <n-grid-item>
        <img class="logo" src="@/assets/icon.png" alt="logo" />
      </n-grid-item>
      <n-grid-item>
        <n-button text>Terms of Service</n-button>
      </n-grid-item>
    </n-grid>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { NButton, NIcon, NDivider, NSpace, NGrid, NGridItem } from 'naive-ui'
import { LogoFacebook, LogoInstagram, LogoTwitter, LogoYoutube } from '@vicons/ionicons5'

const links = ['Home', 'Products', 'About Us', 'Contact']

const socialIcons = {
  facebook: LogoFacebook,
  instagram: LogoInstagram,
  twitter: LogoTwitter,
  youtube: LogoYoutube,
}

const screenWidth = ref(window.innerWidth)
const isMobile = computed(() => screenWidth.value < 768)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})
</script>
