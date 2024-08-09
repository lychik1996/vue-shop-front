<script setup>
import { useSneakersStore } from '@/store/store';
import { RouterLink } from 'vue-router';

defineProps({
  imgUrl: String,
  tittle: String,
  info: String,
  link: Boolean,
});
const store = useSneakersStore();
const onBack = () => {
  store.setToggleBasket();
};
console.log(store.toggleBasket);
</script>
<template>
  <div class="w-72 flex flex-col items-center">
    <img v-if="link" :src="imgUrl" alt="Img" class="w-16 mb-7" />
    <img v-else :src="imgUrl" alt="Img" class="w-28">
    <h2 class="text-2xl font-bold">{{ tittle }}</h2>
    <p class="text-center opacity-40 mb-3">{{ info }}</p>

    
    <RouterLink v-if="link"
      to="/"
      class="mt-7 bg-lime-500 cursor-pointer items-center flex w-60 gap-5 text-lg justify-center  rounded-xl py-3 text-white  hover:bg-lime-600 active:bg-lime-700"
    >
      <img src="/arrow-next.svg" class="w-4 rotate-180" alt="Arrow"> <span>Turn back</span>
    </RouterLink>
    <button v-else @click="onBack" class="mt-7 bg-lime-500 cursor-pointer items-center flex w-60 gap-5 text-lg justify-center  rounded-xl py-3 text-white transition hover:bg-lime-600 active:bg-lime-700">
        <img src="/arrow-next.svg" class="w-4 rotate-180" alt="Arrow"> <span>Turn back</span>
    </button>
  </div>
</template>
