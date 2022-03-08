<template>
  <div class="menu">
    <VHeader backTo="/">
      {{ menu.restaurant_name }}
    </VHeader>
    <swiper
      :pagination="{
        type: 'fraction',
      }"
      :modules="modules"
      loop
      class="menu-swiper"
    >
      <swiper-slide v-for="img in menu.restaurant_images" :key="img.image_id" >
        <img :src="img.url" :alt="menu.restaurant_name" />
      </swiper-slide>
    </swiper>
    <span class="location">{{ menu.location }}</span>
    <MenuCategories 
      :categories="menu.product_categories" 
      :active="selected" 
      :onSelect="selectProduct"
    />
    <ProductList 
      v-if="selected" 
      :title="selected.product_category_name" 
      :menu="menu.product_categories.find(item => item.product_category_id == selected.product_category_id)?.products"
    />
    <ProductList 
      v-else 
      v-for="item in menu.product_categories" 
      :title="item.product_category_name" 
      :menu="item.products" 
      :key="item.product_category_id"
    />
    <VButton v-if="count !== 0" :total="total" className="fixed" @click="$router.push('/cart')">
      <template v-slot:count>{{ count }}</template>
      <template v-slot:name>Корзина</template>
    </VButton>
  </div>
</template>

<script>
  import ProductList from '../components/product-list'
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Pagination } from 'swiper';
  import VButton from '../components/button-blue.vue'
  import VHeader from '../components/header.vue';
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
      },
    },
    created() {
      this.$store.dispatch("restaurant/fetchRestaurantById", this.$route.params.id)
    },
    computed: {
      menu() {
        return this.$store.getters["restaurant/getMenu"]
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
