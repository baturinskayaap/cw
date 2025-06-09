<template>
  <h1>{{ catalogType == 'pets' ? 'Наши подопечные' : 'Товары для питомцев' }}</h1>

  <CardCmp :catalog-type="catalogType" :external-items="paginatedItems" mode="any" />

  <n-pagination
    v-model:page="currentPage"
    :page-count="totalPages"
    :page-slot="totalPages"
    @update:page="handlePageChange"
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import CardCmp from '@/components/CardCmp.vue'
import { NPagination } from 'naive-ui'
import { usePetsStore } from '@/stores/pup'
import { useGoodsStore } from '@/stores/goods'

const route = useRoute()
const petsStore = usePetsStore()
const goodsStore = useGoodsStore()
const catalogType = ref(route.params.type)
const pageItems = 3
const currentPage = ref(1)

const allItems = computed(() => {
  return catalogType.value == 'pets' ? petsStore.pets : goodsStore.goods
})

const totalPages = computed(() => {
  return Math.ceil(allItems.value.length / pageItems)
})

const paginatedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * pageItems
  const endIndex = startIndex + pageItems
  return allItems.value.slice(startIndex, endIndex).map((item) => ({
    ...item,
    type: catalogType.value,
  }))
})

const handlePageChange = (newPage) => {
  currentPage.value = newPage
}
</script>
