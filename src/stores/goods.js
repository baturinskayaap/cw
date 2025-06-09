import { defineStore } from 'pinia'

export const useGoodsStore = defineStore('goods', {
  state: () => ({
    goods: [
      {
        id: 1,
        name: 'Reflex Plus Adult Cat Food Salmon',
        cost: '140',
        photo: '/goods/can.png',
      },
      {
        id: 2,
        name: 'Cute Pet Cat Warm Nest',
        cost: '410',
        photo: '/goods/pillow.png',
      },
      {
        id: 3,
        name: 'Reflex Plus Adult Cat Food Salmon',
        cost: '165',
        photo: '/goods/food.png',
      },
      {
        id: 4,
        name: 'NaturVet Dogs - Omega-Gold Plus Salmon Oil',
        cost: '350',
        photo: '/goods/snack.png',
      },
      {
        id: 5,
        name: 'Costumes Fashion Pet Clother Cowboy Rider',
        cost: '410',
        photo: '/goods/costume.png',
      },
    ],
  }),
})
