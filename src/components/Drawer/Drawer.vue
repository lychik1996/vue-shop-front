<script setup>
import { useSneakersStore } from '@/store/store';
import CardListBasket from './CardListBasket.vue';
import DrawerHead from './DrawerHead.vue';
import Checker from '../Checker.vue';
defineProps({
  toggleBasket: Function,
});
const store = useSneakersStore();
const onCheckout = () => {
  store.onCheckout();
};
</script>
<template>
  <div class="fixed top-0 left-0 h-full w-full bg-black z-10 opacity-70"></div>
  <div class="bg-white w-96 h-full fixed right-0 top-0 z-20 p-8 flex flex-col">
    <DrawerHead :toggleBasket="toggleBasket" />
    <div v-if="store.sneakersBasket.length>0" class="flex flex-col h-full">
      <div class="flex-1 overflow-y-auto custom-scrollbar min-h-[454px]">
        <CardListBasket />
      </div>
      <div class="flex flex-col gap-4 my-7 ">
        <div class="flex gap-2">
          <span>Total:</span>
          <div class="border-b flex-1 border-dashed"></div>
          <b>{{ store.totalBasketPrice }} grn</b>
        </div>
        <div class="flex gap-2">
          <span>Tax 5%:</span>
          <div class="border-b flex-1 border-dashed"></div>
          <b>{{ store.totalBasketPrice * 0.05 }} grn</b>
        </div>
        <button
          :disabled="store.isLoading || store.sneakersBasket.length === 0"
          @click="onCheckout"
          class="mt-7 bg-lime-500 cursor-pointer w-full rounded-xl py-3 text-white disabled:bg-slate-300 disabled:cursor-default transition hover:bg-lime-600 active:bg-lime-700"
        >
          Checkout
        </button>
      </div>
    </div>
    <div v-else-if="store.sneakersBasket.length===0" class="flex flex-1 w-full items-center justify-between pl-6">
      <Checker
        :link="false"
        tittle="Drawer is empty"
        info="Add at least one pair of sneakers to place your order"
        imgUrl="/package-icon.png"
      />
    </div>
  </div>
</template>
<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 10px;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #6cd670;
  border-radius: 5px;
  border: 1px solid #fff;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background-color: white;
}
</style>
