import { defineStore } from 'pinia'

export const usePetsStore = defineStore('pets', {
  state: () => ({
    pets: [
      {
        id: 1,
        name: 'Рекс',
        age: 3,
        photo: '/pup/image1.png',
      },
      {
        id: 2,
        name: 'Тобик',
        age: 3,
        photo: '/pup/image2.png',
      },
      {
        id: 3,
        name: 'Бобик',
        age: 3,
        photo: '/pup/image3.png',
      },
      {
        id: 4,
        name: 'Снежок',
        age: 3,
        photo: '/pup/image4.png',
      },
      {
        id: 5,
        name: 'Пушок',
        age: 3,
        photo: '/pup/image1.png',
      },
    ],
  }),
})
