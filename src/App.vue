<script setup>

import Drawer from './components/Drawer/Drawer.vue';
import Header from './components/Home/Header.vue';
import { RouterView } from 'vue-router';
import { useSneakersStore } from './store/store';

const store = useSneakersStore();
const toggleBasket = ()=>{
  store.setToggleBasket();
}
</script>

<template>
  <Drawer v-if="store.toggleBasket" :toggleBasket="toggleBasket" />
  <div class="w-4/5 m-auto rounded-xl shadow-xl bg-white mt-14">
    <Header :toggleBasket="toggleBasket" />
    <suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </suspense>
  </div>
</template>

<style scoped></style>
