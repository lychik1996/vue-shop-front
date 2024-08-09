<script setup>
import { useSneakersStore } from '@/store/store';
import CardListFavorite from './CardListFavorite.vue';
import Checker from '../Checker.vue';
import { onMounted } from 'vue';
const store = useSneakersStore();
onMounted(()=>{
    store.fetchSneakersFavorite();
})
</script>
<template>
  <div class="p-10">
    <h2 class="uppercase font-bold text-2xl mb-10">My Booksmarks</h2>

    <CardListFavorite v-if="store.sneakersFavorite.length > 0" />
    <div v-else class="w-full h-96 flex items-center justify-center">
      <Checker
        :link="true"
        tittle="No Bookmarks"
        info="You havn't added anything to your bookmarks"
        imgUrl="/emoji-1.png"
      />
    </div>
  </div>
</template>
