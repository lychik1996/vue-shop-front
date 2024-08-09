<script setup>
import { useSneakersStore } from '@/store/store';
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    toggleBasket:Function
})
const store = useSneakersStore();
onMounted(()=>{
    store.fetchSneakersBasket()
})
</script>
<template>
    <header class="flex justify-between border-b border-slate-200 px-10 py-8">
        <RouterLink to="/">
            <div class="flex items-center gap-4">
        <img src="/logo.png" alt="Logo" class="w-10">
        <div>
            <h2 class="text-xl font-bold uppercase">Vue Sneakers</h2>
            <p class="text-slate-500">Best goods sneakers</p>
        </div>
    </div>
        </RouterLink>
    
    <ul class="flex flex-col items-center gap-2 md:flex-row md:gap-3 lg:gap-10">
        <li class="flex items-center cursor-pointer gap-1 md:gap-3 group" @click="toggleBasket">
            <img src="/cart.svg" alt="Cart">
            <span class="text-gray-500 group-hover:text-black">{{store.totalBasketPrice}} grn</span>
        </li>
        <li class=" cursor-pointer " >
            <RouterLink to="/favorite" class="flex items-center gap-1 md:gap-3 group">
                <img src="/heart.svg" alt="Cart">
                <span class="text-gray-500 group-hover:text-black">Bookmarks</span>
            </RouterLink>
            
        </li>
        <li class="flex items-center cursor-pointer gap-1  md:gap-3 group">
            <img src="/profile.svg" alt="Cart">
            <span class="text-gray-500 group-hover:text-black">Profile</span>
        </li>
    </ul>
</header>
</template>