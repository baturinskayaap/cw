<template>
  <n-modal class="modal">
    <n-grid cols="1 m:2" responsive="screen" x-gap="10px" y-gap="10px">
      <n-grid-item>
        <iframe
          src="https://yandex.ru/map-widget/v1/?display-text=%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B&ll=84.963431%2C56.488298&mode=search&oid=1736598283&ol=biz&sll=84.963431%2C56.488285&text=category_id%3A%28184107222%29&z=13"
          class="map"
          loading="lazy"
         />
      </n-grid-item>
      <n-grid-item>
        <h2>Контакты</h2>
        <p>+79991112233</p>
        <p>Адрес: г. Томск, ул. Примерная, д. 2</p>
        <p>Часы работы: c 8 до 20 ежедневно</p>
      </n-grid-item>
    </n-grid>
  </n-modal>
</template>

<script setup>
import { NModal, NGrid, NGridItem } from 'naive-ui'
</script>
