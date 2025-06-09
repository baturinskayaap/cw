<template>
  <n-layout-header bordered position="static">
    <n-grid :cols="isMobile ? 3 : 24" responsive="screen" :x-gap="12">
      <n-grid-item :span="isMobile ? 1 : 0">
        <div class="item justify-start">
          <n-button circle @click="toggleMobileMenu" v-if="isMobile">
            <n-icon><MenuIcon /></n-icon>
          </n-button>
        </div>
      </n-grid-item>

      <n-grid-item :span="isMobile ? 1 : 5">
        <div class="item">
          <router-link to="/">
            <img class="logo" src="@/assets/icon.png" alt="logo" />
          </router-link>
        </div>
      </n-grid-item>

      <n-grid-item :span="isMobile ? 1 : 14" v-if="!isMobile" class="desktop-nav">
        <div class="item justify-center">
          <n-space>
            <n-button text type="default">Главная</n-button>
            <n-button text type="default">Товары</n-button>
            <n-button text type="default">О нас</n-button>
            <n-button text type="default">Контакты</n-button>
          </n-space>
        </div>
      </n-grid-item>

      <n-grid-item :span="1" :offset="isMobile ? 0 : 3">
        <div class="item justify-end">
          <router-link to="/cart">
            <n-button circle>
              <template #icon>
                <n-icon><CartIcon /></n-icon>
              </template>
            </n-button>
          </router-link>
        </div>
      </n-grid-item>
    </n-grid>
  </n-layout-header>

  <div v-if="showMobileMenu && isMobile" class="mobile-menu">
    <n-space vertical>
      <n-button text type="default">Главная</n-button>
      <n-button text type="default">Товары</n-button>
      <n-button text type="default">О нас</n-button>
      <n-button text type="default" @click="isModalOpen = true">Контакты</n-button>
      <ContactModal v-model:show="isModalOpen" />
    </n-space>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { NLayoutHeader, NGrid, NGridItem, NButton, NIcon, NSpace } from 'naive-ui'
import { MenuOutline as MenuIcon, CartOutline as CartIcon } from '@vicons/ionicons5'

import ContactModal from '@/modal/ContactsModal.vue';

const isModalOpen = ref(false);

const showMobileMenu = ref(false)
const screenWidth = ref(window.innerWidth)

const isMobile = computed(() => screenWidth.value < 768)

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
  if (!isMobile.value) showMobileMenu.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
  updateScreenWidth()
})
</script>
