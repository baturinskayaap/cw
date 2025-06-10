<template>
  <n-grid :cols="isMobile ? 3 : 24" responsive="screen">
    <n-grid-item :span="isMobile ? 1 : 0">
      <div class="item justify-start">
        <n-button circle @click="toggleMobileMenu" v-if="isMobile">
          <n-icon><MenuOutline /></n-icon>
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

    <n-grid-item :span="isMobile ? 1 : 14" v-if="!isMobile">
      <div class="item justify-center">
        <n-space>
          <n-button text v-for="link in links" :key="link" @click="link === 'Контакты' ? openContactModal() : null">
            {{ link }}
          </n-button>
        </n-space>
      </div>
    </n-grid-item>

    <n-grid-item :span="1" :offset="isMobile ? 0 : 3">
      <div class="item justify-end">
        <router-link to="/cart">
          <n-button circle>
            <template #icon>
              <n-icon><CartOutline /></n-icon>
            </template>
          </n-button>
        </router-link>
      </div>
    </n-grid-item>
  </n-grid>

  <div v-if="showMobileMenu && isMobile" class="mobile-menu">
    <n-space vertical>
      <n-button text v-for="link in links" :key="link" @click="link === 'Контакты' ? openContactModal() : null">
        {{ link }}
      </n-button>
    </n-space>
  </div>

  <ContactsModal v-model:show="showContactModal" />

</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { NGrid, NGridItem, NButton, NIcon, NSpace } from 'naive-ui'
import { MenuOutline, CartOutline } from '@vicons/ionicons5'
import ContactsModal from '@/modal/ContactsModal.vue'

const showMobileMenu = ref(false)
const showContactModal = ref(false)
const links = ['Главная', 'Товары', 'Контакты']
const screenWidth = ref(window.innerWidth)
const isMobile = computed(() => screenWidth.value < 768)

const openContactModal = () => {
  showContactModal.value = true
  showMobileMenu.value = false
}

const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth
  if (!isMobile.value) showMobileMenu.value = false
}

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth)
  updateScreenWidth()
})
</script>
