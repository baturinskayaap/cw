<template>
  <n-layout class="page-layout">
    <n-layout-content content-class="content">
      <n-grid cols="1 s:2" responsive="screen" :x-gap="12" :y-gap="16" align="center">
        <n-grid-item>
          <div>
            <h1>Заголовок</h1>
            <p>Текст</p>
            <n-button type="primary" size="small">Кнопка</n-button>
          </div>
        </n-grid-item>
        <n-grid-item>
          <img src="@/assets/photos/banner1.png" alt="Описание изображения" class="image" />
        </n-grid-item>
      </n-grid>
    </n-layout-content>
    <n-layout-content content-class="content">
      <div class="item justify-start">
        <h2>Наши подопечные</h2>
        <n-button circle @click="toggleMobileMenu">
          <router-link to="/store/pets">
            <n-icon><ArrowForward /></n-icon>
          </router-link>
        </n-button>
      </div>

      <CardCmp catalog-type="pets" :limit="4" />
    </n-layout-content>
    <n-layout-content content-class="content">
      <div class="item justify-start">
        <h2>Наши продукты</h2>
        <n-button circle @click="toggleMobileMenu">
          <router-link to="/store/goods">
            <n-icon><ArrowForward /></n-icon>
          </router-link>
        </n-button>
      </div>
      <CardCmp catalog-type="goods" :limit="4" />
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { NGrid, NGridItem, NButton, NLayout, NLayoutContent, NIcon } from 'naive-ui'
import CardCmp from '@/components/CardCmp.vue'
import { ArrowForward } from '@vicons/ionicons5'
</script>
