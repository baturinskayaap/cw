import axios from 'axios'

export const OrderService = {
  async createOrder(orderData) {
    // В реальном приложении здесь будет обращение к бэкенду
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Order submitted:', orderData)
        resolve({
          success: true,
          orderId: Date.now().toString(36).toUpperCase(),
          ...orderData,
        })
      }, 1000)
    })

    // Пример реального запроса:
    // const response = await axios.post('/api/orders', orderData);
    // return response.data;
  },
}
