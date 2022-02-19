<template>
  <div class="menu">
    <VHeader backTo="/">
      Mamma mia
    </VHeader>

    <swiper
       :pagination="{
        type: 'fraction',
      }"
      :navigation="true"
      :modules="modules"
      loop
      class="menu-swiper"
    >
      <swiper-slide v-for="img in images" :key="img.id"><img :src="img.img" alt="oke"/></swiper-slide>
    </swiper>

    <span class="location">ул. Панфилова 109</span>
    <div class="menu__list">
      <div class="menu__list-burger" @click="openMenu">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.75 12H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.75 6H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.75 18H20.25" stroke="#3C3C43" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <ul class="menu__list-items">
        <li v-for="item in menu" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
    <h4 class="product-title">Пицца</h4>
    <div class="pizza" v-for="product in stuff" :key="product.id">
      <div class="pizza__info">
        <span class="pizza__info-name">{{ product.name }}</span>
        <span class="pizza__info-description">{{ product.info }}</span>
        <span class="pizza__info-price">{{ product.price}}</span>
      </div>
      <div class="pizza__img">
        <img :src="product.img" :alt="product.name" />
      </div>
    </div>
    <transition name="fade">
      <div v-if="activeMenu" class="menu-active">
        <VHeader backTo="#" :onClick="closeMenu">Меню</VHeader>
        <ul class="menu-active-list">
          <li v-for="item in menu" :key="item.id">{{ item.name }}<span>{{ item.count }}</span></li>
        </ul>
      </div>
    </transition>
    <h3 class="product-title">Напитки</h3>
    <div class="cocktails" v-for="cocktail in cocktails" :key="cocktail.id">
      <div class="cocktails__info">
        <span class="cocktails__info-name">{{ cocktail.name }}</span>
        <span class="cocktails__info-price">{{ cocktail.price }}</span>
      </div>
      <button class="add-btn">+</button>
    </div>
  </div>
</template>

<script>
  
  import VHeader from '../components/v-header.vue'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination, Navigation } from 'swiper'
  import 'swiper/swiper-bundle.min.css'
  import 'swiper/swiper.min.css'
  import 'swiper/components/pagination/pagination.min.css'
  import 'swiper/components/navigation/navigation.min.css'
  export default {
    data() {
      return {
        activeMenu: false,
        images: [
          {id:1 , img: require("../assets/images/swiper.png")},
          {id:2 , img: require("../assets/images/swiper.png")},
        ],
        menu: [
          {id:1, name: "Пицца", count: 23},
          {id:2, name: "Напитки", count: 11},
          {id:3, name: "Салаты", count: 12},
          {id:4, name: "Супы", count: 12},
          {id:5, name: "Паста", count: 12},
          {id:6, name: "Горячее", count: 12},
          {id:7, name: "Кофе", count: 12},
          {id:8, name: "Чай", count: 1},
          {id:9, name: "Десерты", count: 12},
        ],
        stuff: [
          {id:1, name: "Пицца Маргарита", price: "1 600 тг", img: require("../assets/images/menu1.png")},
          {id:2, name: "Пицца Пепперони", price: "1 600 тг", info: "Любая маленькая пицца на выбор, порция фри и Coca Cola", img: require("../assets/images/menu2.png")},
          {id:3, name: "Пицца Кальцоне", price: "1 600 тг", info: "Одна строка описания чего-то", img: require("../assets/images/menu3.png")},
          {id:4, name: "Пицца Мексикано", price: "1 600 тг", info: "Одна строка описания чего-то", img: require("../assets/images/menu4.png")},
        ],
        cocktails: [
          {id:1, name: "Фреш Яблочный, 500 мл", price: 1950},
          {id:2, name: "Фреш Морковный, 500 мл", price: 1950},
        ]
      }
    },
    components: { VHeader, Swiper, SwiperSlide },
    methods: {
      openMenu() {
        this.activeMenu = true;
      },
      closeMenu() {
        this.activeMenu = false;
      }
    },
    setup() {
      return {
        modules: [Pagination, Navigation],
      };
    },
  }
</script>

<style scoped>
.menu {
  background-color:white;
  
}
.menu-swiper img {
  width: 100%;
  margin-bottom: .5rem;
}
.location {
  font-size: .9rem; 
  color: var(--text-grey);  
  padding:1rem;
}
.menu__list {
  display: flex;
  align-items:center;
  gap:.2rem;
  
}

.menu__list-burger {
  padding:1rem;
}
.menu__list-burger svg{
  width: 1.5rem;
  height: 1.5rem;
}
.menu__list-items {
  display: flex;
  gap: .2rem;
  overflow-x: scroll;
}
.menu__list-items::-webkit-scrollbar {
  display: none;
}
.menu__list-items li{
  font-size: .9rem;
  color: var(--text-grey);
  padding:.6rem 1.4rem;
  background:rgba(218, 218, 218, 0.35); 
  border-radius: 999rem;
}
.product-title {
  font-size: 1rem;
  color: var(--text-grey);
  padding: 1rem;
}
.pizza, .cocktails {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .75rem 1rem;
  gap:.75rem;
  border-bottom: 1px solid #ECECEC;
}
.pizza__info-name, .cocktails__info-name {
  font-size: .9rem;
  color: var(--text-primary);
  font-weight: 500;
  display: block;
  margin-bottom: .3rem;
}
.pizza__info-description {
  font-size: .75rem;
  color: #707070;
  margin-bottom: .3rem;
  display: block;
}
.pizza__info-price, .cocktails__info-price {
  color: var(--blue-color);
  font-size: .9rem;
  display: block;
}
.pizza__img{
  position: relative;
  max-width: 8rem;
}
.pizzda__img img{
 width: 100%;
}
.add-btn {
  border:none;
  background-color: white;
  font-size: 1.4rem;
  color: var(--blue-color);
  padding:.3rem .7rem;
  border-radius: 8px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  font-weight: 500;

}
.menu-active{
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 10;
  background-color: white;
  overflow-y: scroll;
}
.menu-active::-webkit-scrollbar {
  display: none;
}
.menu-active-list {
  display: flex;
  flex-direction: column;
 
}
.menu-active-list li {
  padding:1rem;
  border-top: 1px solid #DBDBDB;
  display: flex;
  justify-content: space-between;
}
.menu-active-list li span {
  color: var(--text-grey);
}
</style>
