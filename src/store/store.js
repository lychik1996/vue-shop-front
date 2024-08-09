import { defineStore } from 'pinia';
import axios from 'axios';

export const useSneakersStore = defineStore('sneakers', {
  state: () => ({
    sneakers: [],
    sneakersBasket: [],
    sneakersFavorite: [],
    totalBasketPrice:0,
    isLoading: false,
    searchQuery:'',
    sortBy:'',
    toggleBasket:false,
    
  }),
  actions: {
    async fetchSneakers() {
      try {
        const res = await axios.get('http://localhost:3000/sneakers',{
          params:{
            search:this.searchQuery,
            sortBy:this.sortBy,
          }
        });
        this.sneakers = res.data;
      } catch (e) {
        console.error('failed to fetch sneakers:', e);
      }
    },
    async fetchSneakersBasket() {
      try {
        const res = await axios.get('http://localhost:3000/sneakers/basket');
        this.sneakersBasket = res.data;
        this.calculateTotalBasketPrice();
      } catch (e) {
        console.error('Failed to load sneakers basket:', e);
      }
    },
    async fetchSneakersFavorite() {
      try {
        const res = await axios.get('http://localhost:3000/sneakers/favorite');
        this.sneakersFavorite = res.data;
      } catch (e) {
        console.error('Failed to load sneakers basket:', e);
      }
    },
    async onClickBasket(id) {
      try {
        const res = await axios.post(
          `http://localhost:3000/sneakers/basket/${id}`
        );
        await this.fetchSneakers();
        await this.fetchSneakersBasket();
        await this.fetchSneakersFavorite();
      } catch (e) {
        console.error('Falied to add/remove from basket');
      }
    },
    async onClickFavorite(id) {
      try {
        const res = await axios.post(
          `http://localhost:3000/sneakers/favorite/${id}`
        );
        await this.fetchSneakers();
        await this.fetchSneakersFavorite();
      } catch (e) {
        console.error('Falied to add/remove from favorite');
      }
    },
    async onCheckout(){
      if(this.sneakersBasket.length===0)return;
      this.isLoading=true;
      try{
        const res= await axios.post('http://localhost:3000/checkout');
        await this.fetchSneakers();
        await this.fetchSneakersBasket();
        await this.fetchSneakersFavorite();
      }catch(e){
        console.error("Failed to buy item")
      }finally{
        this.isLoading= false;
      }
    },
    calculateTotalBasketPrice(){
        this.totalBasketPrice = this.sneakersBasket.reduce((acum,a)=>acum+a.price,0)
    },
    setSearchQuery(query){
      this.searchQuery=query
    },
    setSortQuery(sortBy){
      this.sortBy=sortBy;
    },
    setToggleBasket(){
      this.toggleBasket=!this.toggleBasket;
    }
  },
});
