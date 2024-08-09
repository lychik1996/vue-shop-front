<script setup>
import { onMounted,} from 'vue';
import Card from './Card.vue';
import { useSneakersStore } from '@/store/store';

const store = useSneakersStore();
const onClickBasket =(id)=>{
  store.onClickBasket(id)
}
const onClickFavorite=(id)=>{
  store.onClickFavorite(id)
}
onMounted(()=>{
  store.fetchSneakers()
  
})

</script>
<template>
  <div class="grid justify-center xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2  gap-x-10 gap-y-5 min-h-96">
    <Card v-for="(item,i) in store.sneakers" :key="i"
      :imageUrl="item.pathImg"
      :title="item.name"
      :price="item.price"
      :isAdded="item.isBasket"
      :isFavorite="item.isFavorite"
      :id="item.id"
      :onClickBasket="onClickBasket"
      :onClickFavorite="onClickFavorite"
    />
  </div>
</template>
