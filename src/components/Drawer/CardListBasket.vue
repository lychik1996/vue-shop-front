<script setup>
import { onMounted, ref } from 'vue';
import CardBasket from './CardBasket.vue';

import { useSneakersStore } from '@/store/store';
const store = useSneakersStore();
onMounted(()=>{
  store.fetchSneakersBasket()
})
const onClickBasket = (id)=>{
  store.onClickBasket(id)
}

</script>
<template>
  <div class="flex flex-col gap-5">
    <CardBasket
      v-for="(item, i) in store.sneakersBasket"
      :key="i"
      :title="item.name"
      :imageUrl="item.pathImg"
      :price="item.price"
      :id="item.id"
      :onClickBasket="onClickBasket"
    />
  </div>
</template>
