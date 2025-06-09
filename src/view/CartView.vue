<template>
  <div v-if="orderSuccess">
    <p>Заказ оформлен!</p>
    <router-link to="/">
      <n-button>На главную</n-button>
    </router-link>
  </div>
  <div v-else>
    <h2>Ваши товары</h2>
    <CardCmp mode="cart" />
    <div v-if="cartStore.items.length >= 1">
      <h2>Данные для заказа</h2>
      <input v-model="name" placeholder="Ваше имя" />
      <input v-model="phone" placeholder="Телефон" />
      <button @click="submit" :disabled="!canSubmit">Заказать</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardCmp from '@/components/CardCmp.vue'
import { useCartStore } from '@/stores/cart'
import { NButton } from 'naive-ui'

const cartStore = useCartStore()
const name = ref('')
const phone = ref('')
const orderSuccess = ref(false)

const canSubmit = computed(() => {
  return name.value && phone.value && cartStore.items.length > 0
})

const submit = () => {
  cartStore.submitOrder({
    name: name.value,
    phone: phone.value,
  })

  orderSuccess.value = true
  name.value = ''
  phone.value = ''
}
</script>
