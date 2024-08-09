<script setup>
defineProps({
    imageUrl: String,
  title: String,
  price: Number,
  id:String,
  onClickBasket:Function,
})
</script>
<template>
    <div class="border border-slate-200 p-4 rounded-xl flex items-center gap-4">
        <img class="w-16" :src="imageUrl" alt="Sneakers" />
        <div class="flex flex-col">
            <p>{{title}}</p>
            <div class="flex justify-between mt-2">
                <b>{{ price }} grn</b>
                <img @click="onClickBasket(id)" class="opacity-40 hover:opacity-100 cursor-pointer transition" src="/close.svg" alt="">
            </div>
        </div>
    </div>
</template>