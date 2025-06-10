import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
  }),

  actions: {
    toggleItem(type, id) {
      const index = this.items.findIndex((item) => item.type == type && item.id == id)
      if (index > -1) {
        this.items.splice(index, 1)
      } else {
        this.items.push({ type, id })
      }
    },
    // переключатель(тип, номер)
    // получаем индекс первого эл из item удовл усл соотв типа и индекса
    // индекс от 0 => >-1 - удаляем из массива, иначе - добавляем
    submitOrder(customerData) {
      const order = {
        customer: customerData,
        items: this.items,
      }
      console.log('Order submitted:', order)
      this.items = [] //заказ оформлен => пустая корзина
    },
  },
  getters: {
    isInCart: (state) => (type, id) =>
      state.items.some((item) => item.type == type && item.id == id),
  },
  //принимаем переменную state, возвращаем функцию от типа + id,
  // которая возвращает тру/фолс о наличии в items
})
