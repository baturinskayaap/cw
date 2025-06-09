<template>
  <n-modal>
    <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/krasny_krolik/1736598283/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Красный кролик</a><a href="https://yandex.ru/maps/67/tomsk/category/pet_shop/184107222/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Зоомагазин в Томске</a><a href="https://yandex.ru/maps/67/tomsk/category/aquariums/184107210/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Аквариумы в Томске</a><iframe src="https://yandex.ru/map-widget/v1/?display-text=%D0%97%D0%BE%D0%BE%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B&ll=84.963431%2C56.488298&mode=search&oid=1736598283&ol=biz&sll=84.963431%2C56.488285&text=category_id%3A%28184107222%29&z=13" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
  </n-modal>
</template>

<script setup>
import { NModal } from 'naive-ui'

defineProps({
  modelValue: Boolean
});
</script>
