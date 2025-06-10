<template>
  <n-empty v-if="!displayedItems.length && props.mode=='cart'" description="Корзина пуста" class="empty-cart" />
  <n-grid cols="1 s:2 l:4" responsive="screen" :x-gap="16" :y-gap="20" class="card-container">
    <n-grid-item v-for="item in displayedItems" :key="`${item.type}-${item.id}`">
      <n-card type="small">
        <template #cover>
          <img :src="item.photo" :alt="item.name" class="image-c" />
        </template>
        <h3>{{ item.name }}</h3>
        <p>
          {{ item.type == 'pets' ? `Возраст: ${item.age} года` : `Цена: ${item.cost} руб.` }}
        </p>
        <n-button type="primary" @click="cartStore.toggleItem(item.type, item.id)">
          {{
            isInCart(item.type, item.id)
              ? 'Убрать'
              : buttonTexts[props.mode == 'cart' ? 'cart' : item.type]
          }}
        </n-button>
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<script setup>
import { usePetsStore } from '@/stores/pup'
import { useGoodsStore } from '@/stores/goods'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import { NCard, NButton, NGrid, NGridItem, NEmpty } from 'naive-ui'

const props = defineProps({
  mode: { type: String, default: 'any', validator: (v) => ['any', 'cart'].includes(v) },
  catalogType: { type: String, default: 'pets', validator: (v) => ['pets', 'goods'].includes(v) },
  limit: { type: Number, default: 0 },
  externalItems: { type: Array, default: null },
})

const petsStore = usePetsStore()
const goodsStore = useGoodsStore()
const cartStore = useCartStore()

const stores = {
  pets: petsStore.pets,
  goods: goodsStore.goods,
}

const items = computed(() => {
  if (props.externalItems) {
    return props.externalItems
  }
  if (props.mode == 'cart') {
    return cartStore.items
      .map((item) => {
        const element = stores[item.type].find((e) => e.id == item.id)
        return element ? { ...element, type: item.type } : null
      })
      .filter(Boolean)
  }

  return stores[props.catalogType].map((item) => ({
    ...item,
    type: props.catalogType,
  }))
})

const displayedItems = computed(() =>
  props.limit > 0 ? items.value.slice(0, props.limit) : items.value,
)

const buttonTexts = {
  pets: 'Взять домой',
  goods: 'В корзину',
  cart: 'Убрать',
}

const isInCart = (type, id) => cartStore.isInCart(type, id)
</script>
