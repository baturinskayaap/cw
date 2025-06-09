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
    submitOrder(customerData) {
      const order = {
        customer: customerData,
        items: this.items,
      }
      console.log('Order submitted:', order)
      this.items = []
    },
  },

  getters: {
    isInCart: (state) => (type, id) =>
      state.items.some((item) => item.type == type && item.id == id),
  },
})
