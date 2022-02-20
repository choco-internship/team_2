<template>
  <div class="menu">
    <VHeader backTo="/">
      {{ menu.restaurant.restaurant_info.name }}
    </VHeader>

    <swiper
      :pagination="{
        type: 'fraction',
      }"
      :modules="modules"
      loop
      class="menu-swiper"
    >
      <swiper-slide v-for="img in menu.restaurant.restaurant_images" :key="img.id" >
        <img :src="img.image_url" :alt="menu.restaurant.restaurant_info.name" />
      </swiper-slide>
    </swiper>

    <span class="location">{{ menu.restaurant.restaurant_info.location }}</span>
    <MenuCategories :categories="Object.keys(menu.products)" :active="selected" :onSelect="selectProduct"/>
    <ProductList v-if="selected" :title="selected" :menu="menu.products[selected]" />
    <ProductList v-else v-for="item in Object.keys(menu.products)" :title="item" :menu="menu.products[item]" :key="item"/>
    <VButton v-if="count !== 0" :total="total" className="fixed">
        <template v-slot:count>{{ count }}</template>
        <template v-slot:name>Корзина</template>
    </VButton>
  </div>
</template>

<script>
  import ProductList from '../components/product-list'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';
  import VButton from '../components/v-button.vue'
  import VHeader from '../components/v-header.vue';
  import MenuCategories from '../components/menu-categories.vue';

  import 'swiper/swiper-bundle.min.css';
  import 'swiper/components/pagination/pagination.min.css';

  export default {
    data() {
      return {
        selected: '',
      }
    },
    components: {ProductList, VHeader, Swiper, SwiperSlide, MenuCategories, VButton },
    methods: {
      selectProduct(item) {
        this.selected = item;
      }
    },
    created() {
      this.$store.dispatch("restaurant/FETCH_MENU_BY_ID", this.$route.params.id)
    },
    computed: {
      menu() {
        return this.$store.getters["restaurant/GET_MENU"]
      },
      count() {
        return this.$store.getters["restaurant/getCount"]
      },
      total() {
        return this.$store.getters["restaurant/getPrice"]
      }
    },
    setup() {
      return {
        modules: [Pagination],
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
  .fixed {
    position: fixed;
    bottom: 1rem;
  }
 
</style>
