<script setup>
import { useSneakersStore } from '@/store/store';
import CardList from '../CardList.vue';
import { ref,} from 'vue';
import debounce from 'lodash.debounce';

const store = useSneakersStore();
const searchQuery=ref(store.searchQuery);
const sortQuery = ref(store.sortBy);
const onSort = ()=>{
  store.setSortQuery(sortQuery.value);
  store.fetchSneakers();
}
const debounceOnSearch= debounce((query)=>{
  store.setSearchQuery(query);
  store.fetchSneakers();
},300);

const onSearch = ()=>{
  debounceOnSearch(searchQuery.value)
}

</script>
<template>
    <div class="p-10">
      <div class="flex justify-between items-center mb-8">
        <h2 class="text-2xl md:text-3xl font-bold">All sneakers</h2>
        <div class="flex flex-col gap-4 lg:flex-row">
          <select 
          v-model="sortQuery"
          @change="onSort"
          class="py-2 px-3 border rounded-md outline-none">
            <option value="" disabled selected hidden>Choose filter</option>
            <option value="name">By name</option>
            <option value="asc">By price(chip)</option>
            <option value="desc">By price(expensive)</option>
          </select>
          <div class="relative">
            <img class="absolute left-3 top-3" src="/search.svg" alt="" />
            <input
              v-model="searchQuery"
              @input="onSearch"
              class="border rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
      <CardList/>
    </div>
</template>